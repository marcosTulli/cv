'use client';
import * as React from 'react';
import { useUser } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import { IUser } from '@/app/models/interfaces';
import { useLanguage } from '@/app/hooks';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Education, WorkExperience, Skills } from '../sections';
import { PrintableTemplate } from '../pdf-version/PrintableTemplate';
import useDownload from '../nav-bar/hooks/useDownload';
import { useIsLoadingSections } from '@/app/hooks';
import { LoadableSections } from '@/app/models/enums';


export default function Home() {
    const userID = process.env.NEXT_PUBLIC_USER_ID || '';
    const { currentLanguage } = useLanguage();
    const { handleLoad } = useIsLoadingSections();
    const { data: user, isLoading: isLoadingUser } = useUser({ lang: currentLanguage, id: userID });
    const { setUser } = userStore();
    const { downloadRef } = useDownload();

    React.useEffect(() => {
        handleLoad({
            sectionName: LoadableSections.isLoadingUser,
            isLoading: isLoadingUser
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingUser]);

    React.useEffect(() => {
        if (currentLanguage) {
            if (user !== undefined) {
                setUser(user as IUser);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, currentLanguage]);


    return (
        <div >
            <Header />
            <WorkExperience />
            <Education />
            <Skills />
            <Footer />
            <PrintableTemplate ref={downloadRef} />
        </div>
    );
}
