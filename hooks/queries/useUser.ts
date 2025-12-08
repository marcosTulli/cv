import { useQuery } from '@tanstack/react-query';
import { languageStore, userStore } from '@/store';
import useIsLoadingSections from '../useIsLoadingSections';
import React from 'react';
import { LoadableSections, Roles } from '@/models/enums';
import { userService } from '@services';
import { useAuth0 } from '@auth0/auth0-react';

const id = process.env.NEXT_PUBLIC_USER_ID || '';

const useUser = () => {
  const { handleLoad } = useIsLoadingSections();
  const { setUser, setIsLoadingUser } = userStore();
  const { currentLanguage: lang } = languageStore();
  const queryFn = () => userService.getUserById({ lang, id });

  const { user: auth0User } = useAuth0();
  const rolesLoaction = '';
  const roles: Roles = auth0User?.[rolesLoaction] || [];
  const isAdmin = roles?.includes(Roles.admin);

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user', id, lang],
    queryFn,
    enabled: id.length > 0,
  });

  React.useEffect(() => {
    handleLoad({
      sectionName: LoadableSections.isLoadingUser,
      isLoading: isLoadingUser,
    });
    setIsLoadingUser(isLoadingUser);
  }, [isLoadingUser]);

  React.useEffect(() => {
    if (lang) {
      if (user !== undefined) {
        setUser(user);
      }
    }
  }, [user, lang, isLoadingUser]);

  return { user, isLoadingUser, isAdmin };
};

export default useUser;
