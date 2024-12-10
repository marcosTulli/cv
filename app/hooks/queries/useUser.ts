import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/app/models/interfaces";
import { languageStore, userStore } from "@/app/store";
import useIsLoadingSections from "../useIsLoadingSections";
import React from "react";
import { LoadableSections } from "@/app/models/enums";
import { userService } from "@services";

const id = process.env.NEXT_PUBLIC_USER_ID || '';

const useUser = () => {
    const { handleLoad } = useIsLoadingSections();
    const { setUser, setIsLoadingUser } = userStore();
    const { currentLanguage: lang } = languageStore();
    const queryFn = () => userService.getUserById({ lang, id });

    const { data: user, isLoading: isLoadingUser } = useQuery({
        queryKey: ['user', id, lang],
        queryFn,
        enabled: id.length > 0
    });

    React.useEffect(() => {
        handleLoad({
            sectionName: LoadableSections.isLoadingUser,
            isLoading: isLoadingUser
        });
        setIsLoadingUser(isLoadingUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingUser]);

    React.useEffect(() => {
        if (lang) {
            if (user !== undefined) {
                setUser(user as IUser);
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, lang, isLoadingUser]);


    return { user, isLoadingUser };
};

export default useUser;