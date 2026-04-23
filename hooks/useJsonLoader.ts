import { useCallback } from 'react';
import { skillsService, workService, educationService } from '@services';
import { languageStore, userStore } from '@/store';
import { useQueryClient } from '@tanstack/react-query';
import { uiStore } from '@/store';
import { isEndDateBeforeStartDate } from '@/utils/dateValidation';

interface SkillJson {
  _id?: string;
  name: string;
  formattedName: string;
}

interface ExperienceInfoLangJson {
  position?: string;
  tasks?: { task: string }[];
}

interface ExperienceJson {
  _id?: string;
  companyName: string;
  comapnyUrl?: string;
  companyLogo?: string;
  activePeriod?: { startDate: string; endDate?: string };
  info?: Record<string, ExperienceInfoLangJson>;
}

interface EducationJson {
  _id?: string;
  title: string;
  content: string;
  url?: string;
}

const useJsonLoader = () => {
  const queryClient = useQueryClient();
  const { strings } = languageStore();
  const showSnackbar = uiStore((state) => state.showSnackbar);

  const getUserId = () => userStore.getState().user._id;
  const getLang = () => languageStore.getState().currentLanguage;

  const loadSkills = useCallback(
    async (data: unknown) => {
      const items = data as SkillJson[];
      if (!Array.isArray(items)) throw new Error('Expected array');

      const userId = getUserId();
      const promises = items.map((item) => {
        if (item._id) {
          return skillsService.patchSkill({
            userId,
            skillId: item._id,
            name: item.name,
            formattedName: item.formattedName,
          });
        }
        return skillsService.addSkill({
          userId,
          name: item.name,
          formattedName: item.formattedName,
        });
      });

      await Promise.all(promises);
      queryClient.invalidateQueries({ queryKey: ['skills'] });
      showSnackbar(strings.jsonLoadedSuccess || 'JSON loaded successfully', 'success');
    },
    [queryClient, showSnackbar, strings],
  );

  const loadExperiences = useCallback(
    async (data: unknown) => {
      const items = data as ExperienceJson[];
      if (!Array.isArray(items)) throw new Error('Expected array');

      const userId = getUserId();

      for (const item of items) {
        if (
          item.activePeriod?.startDate &&
          item.activePeriod?.endDate &&
          isEndDateBeforeStartDate(item.activePeriod.startDate, item.activePeriod.endDate)
        ) {
          throw new Error(`End date before start date for "${item.companyName}"`);
        }

        if (item._id) {
          // Existing: per-field patches
          const promises: Promise<unknown>[] = [];
          promises.push(
            workService.patchCompanyName({
              userId,
              experienceId: item._id,
              companyName: item.companyName,
            }),
          );
          if (item.activePeriod?.startDate) {
            promises.push(
              workService.patchActivePeriod({
                userId,
                experienceId: item._id,
                startDate: item.activePeriod.startDate,
                endDate: item.activePeriod.endDate || '',
              }),
            );
          }
          // Patch info per language
          if (item.info) {
            for (const [infoLang, infoData] of Object.entries(item.info)) {
              if (infoData?.position) {
                promises.push(
                  workService.upsertInfo({
                    userId,
                    experienceId: item._id,
                    lang: infoLang,
                    position: infoData.position,
                  }),
                );
              }
            }
          }
          await Promise.all(promises);
        } else {
          // New: single POST with everything
          const infoMap: Record<string, { position: string; tasks?: { task: string }[] }> = {};
          if (item.info) {
            for (const [infoLang, infoData] of Object.entries(item.info)) {
              if (infoData?.position) {
                infoMap[infoLang] = {
                  position: infoData.position,
                  tasks: infoData.tasks?.filter((t) => t.task.trim()),
                };
              }
            }
          }

          await workService.addExperience({
            userId,
            companyName: item.companyName,
            comapnyUrl: item.comapnyUrl,
            companyLogo: item.companyLogo,
            activePeriod: item.activePeriod,
            info: Object.keys(infoMap).length > 0 ? infoMap : undefined,
          });
        }
      }

      queryClient.invalidateQueries({ queryKey: ['work-experience'] });
      showSnackbar(strings.jsonLoadedSuccess || 'JSON loaded successfully', 'success');
    },
    [queryClient, showSnackbar, strings],
  );

  const loadEducation = useCallback(
    async (data: unknown) => {
      const items = data as EducationJson[];
      if (!Array.isArray(items)) throw new Error('Expected array');

      const userId = getUserId();
      const lang = getLang();

      for (const item of items) {
        if (item._id) {
          const promises: Promise<unknown>[] = [];
          promises.push(
            educationService.upsertTranslation({
              userId,
              educationId: item._id,
              lang,
              title: item.title,
              content: item.content,
            }),
          );
          if (item.url) {
            promises.push(
              educationService.upsertUrl({
                userId,
                educationId: item._id,
                url: item.url,
              }),
            );
          }
          await Promise.all(promises);
        } else {
          const result = await educationService.addEducation({
            userId,
            url: item.url,
          });
          await educationService.upsertTranslation({
            userId,
            educationId: result._id,
            lang,
            title: item.title,
            content: item.content,
          });
        }
      }

      queryClient.invalidateQueries({ queryKey: ['education'] });
      showSnackbar(strings.jsonLoadedSuccess || 'JSON loaded successfully', 'success');
    },
    [queryClient, showSnackbar, strings],
  );

  const loadFullCv = useCallback(
    async (data: unknown) => {
      const cv = data as {
        skills?: SkillJson[];
        workExperience?: ExperienceJson[];
        education?: EducationJson[];
      };

      if (cv.skills?.length) await loadSkills(cv.skills);
      if (cv.workExperience?.length) await loadExperiences(cv.workExperience);
      if (cv.education?.length) await loadEducation(cv.education);
    },
    [loadSkills, loadExperiences, loadEducation],
  );

  return { loadSkills, loadExperiences, loadEducation, loadFullCv };
};

export default useJsonLoader;
