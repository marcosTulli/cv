'use client';
import * as React from 'react';
import { useUsers, useUser } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import { IUser } from '@/app/models';
import { useLanguage } from '@/app/hooks';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Education, WorkExperience, Skills } from '../sections';

export default function Home() {
    const { data: users } = useUsers();
    const { currentLanguage } = useLanguage();
    // This will change when I implement login, and/or user selection. 
    const userId = users ? users[1]._id : '';;
    const { data: user } = useUser({ lang: currentLanguage, id: userId });
    const { setUser } = userStore();

    React.useEffect(() => {
        if (currentLanguage && users && users?.length > 0) {
            if (user !== undefined) {
                setUser(user as IUser);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users, user, currentLanguage]);


    return (
        <div >
            <Header />
            <WorkExperience />
            <Education />
            <Skills />
            <Footer />
        </div>
    );
}
