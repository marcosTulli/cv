import { useMemo, useCallback } from 'react';
import useScroll from '@/components/menu/hooks/useScroll';
import { Sections } from '@/models/enums';
import { languageStore } from '@/store';
import { Translation } from '@/models/interfaces';
import { useMediaQuery, useTheme } from '@mui/material';

const TOOLTIP_MAP: Partial<Record<Sections, keyof Translation>> = {
  [Sections.Header]: 'scrollToHomeTooltip',
  [Sections.WorkExperience]: 'scrollToWorkTooltip',
  [Sections.Education]: 'scrollToEducationTooltip',
  [Sections.Skills]: 'scrollToSkillsTooltip',
  [Sections.Projects]: 'scrollToProjectsTooltip',
};

const MOBILE_SECTIONS = [
  Sections.Header,
  Sections.WorkExperience,
  Sections.Skills,
];
const EXCLUDED_SECTIONS = [Sections.Projects, Sections.PrintableTemplate];

const usePageSections = () => {
  const { strings } = languageStore();
  const { scroll } = useScroll();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getTooltip = useCallback(
    (section: Sections) => {
      const tooltipKey = TOOLTIP_MAP[section];
      return tooltipKey ? strings[tooltipKey] : undefined;
    },
    [strings],
  );

  const pageSections = useMemo(() => {
    const allSections = Object.values(Sections)
      .filter((section) => !EXCLUDED_SECTIONS.includes(section))
      .map((section) => {
        const camelCasedLabel =
          section.charAt(0).toLowerCase() + section.slice(1);
        return {
          name: section,
          onClick: () => scroll(section),
          title: getTooltip(section),
          label: strings[camelCasedLabel as keyof Translation],
        };
      });

    return isMobile
      ? allSections.filter((s) => MOBILE_SECTIONS.includes(s.name))
      : allSections;
  }, [strings, scroll, getTooltip, isMobile]);

  return { pageSections };
};

export default usePageSections;
