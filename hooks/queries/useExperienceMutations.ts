import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workService } from '@services';
import {
  IAddExperienceParams,
  IAddTaskParams,
  IDeleteExperienceParams,
  IDeleteTaskParams,
  IPatchActivePeriodParams,
  IPatchCompanyNameParams,
  IPatchInfoParams,
  IPatchTaskParams,
} from '@/models/interfaces';
import { uiStore, languageStore } from '@/store';

const useExperienceMutations = () => {
  const queryClient = useQueryClient();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const { strings } = languageStore();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['work-experience'] });

  const addExperience = useMutation<unknown, Error, IAddExperienceParams>({
    mutationFn: (params) => workService.addExperience(params),
    onSuccess: () => {
      showSnackbar(strings.experienceAddedSuccess || 'Experience added', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const deleteExperience = useMutation<unknown, Error, IDeleteExperienceParams>({
    mutationFn: (params) => workService.deleteExperience(params),
    onSuccess: () => {
      showSnackbar(strings.experienceDeletedSuccess || 'Experience deleted', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const patchCompanyName = useMutation<unknown, Error, IPatchCompanyNameParams>({
    mutationFn: (params) => workService.patchCompanyName(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const postActivePeriod = useMutation<unknown, Error, IPatchActivePeriodParams>({
    mutationFn: (params) => workService.postActivePeriod(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const patchActivePeriod = useMutation<unknown, Error, IPatchActivePeriodParams>({
    mutationFn: (params) => workService.patchActivePeriod(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const upsertInfo = useMutation<unknown, Error, IPatchInfoParams>({
    mutationFn: (params) => workService.upsertInfo(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const addTask = useMutation<unknown, Error, IAddTaskParams>({
    mutationFn: (params) => workService.addTask(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const patchTask = useMutation<unknown, Error, IPatchTaskParams>({
    mutationFn: (params) => workService.patchTask(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  const deleteTask = useMutation<unknown, Error, IDeleteTaskParams>({
    mutationFn: (params) => workService.deleteTask(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.experienceError || 'Something went wrong', 'error'),
  });

  return {
    addExperience,
    deleteExperience,
    patchCompanyName,
    postActivePeriod,
    patchActivePeriod,
    upsertInfo,
    addTask,
    patchTask,
    deleteTask,
  };
};

export default useExperienceMutations;
