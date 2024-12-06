import useScroll from '@/app/components/menu/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { languageStore } from '@/app/store';
import { Translation } from '@/app/models/interfaces';

const usePageSections = () => {
    const { strings } = languageStore();
    const { scroll } = useScroll();

    const pageSections = Object.keys(Sections)
        .filter(section => !(section === Sections.Header || section === Sections.PrintableTemplate))
        .map(section => {
            const camelCasedLabel = section.charAt(0).toLowerCase() + section.slice(1);
            return {
                name: section as Sections,
                onClick: () => scroll(Sections[section as Sections]),
                title: strings.clickAction,
                label: strings[camelCasedLabel as keyof Translation],
            };
        });

    return { pageSections };
};

export default usePageSections;
