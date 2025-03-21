import useScroll from "@/components/menu/hooks/useScroll";
import { Sections } from "@/models/enums";
import { languageStore } from "@/store";
import { Translation } from "@/models/interfaces";

const usePageSections = () => {
  const { strings } = languageStore();
  const { scroll } = useScroll();

  const handleTooltips = (section: Sections) => {
    if (section === Sections.Header) return strings.scrollToHomeTooltip;
    if (section === Sections.WorkExperience) return strings.scrollToWorkTooltip;
    if (section === Sections.Education) return strings.scrollToEducationTooltip;
    if (section === Sections.Skills) return strings.scrollToSkillsTooltip;
  };

  const pageSections = Object.keys(Sections)
    .filter((section) => {
      return (
        section !== Sections.Projects && section !== Sections.PrintableTemplate
      );
    })
    .map((section) => {
      const camelCasedLabel =
        section.charAt(0).toLowerCase() + section.slice(1);
      return {
        name: section as Sections,
        onClick: () => scroll(Sections[section as Sections]),
        title: handleTooltips(section as Sections),
        label: strings[camelCasedLabel as keyof Translation],
      };
    });

  return { pageSections };
};

export default usePageSections;
