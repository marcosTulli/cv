'use client';
import useScroll from '@/app/components/menu/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { languageStore, } from '@/app/store';
import { Translation } from '@/app/models/interfaces';


const usePageSections = () => {
    const { strings } = languageStore();
    const { scroll } = useScroll();

    const pageSections = Object.keys(Sections)
        .filter((i => !(i === Sections.Header || i === Sections.PrintableTemplate)))
        .map(i => {
            const camelCasedLabel = i.charAt(0).toLowerCase() + i.slice(1);
            return {
                name: i,
                onClick: () => scroll(Sections[i as Sections]),
                title: strings.clickAction,
                label: strings[camelCasedLabel as keyof Translation]
            };
        });

    return { pageSections };
};

export default usePageSections;