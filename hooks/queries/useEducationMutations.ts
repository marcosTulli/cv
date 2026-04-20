import { useMutation, useQueryClient } from '@tanstack/react-query';
import { educationService } from '@services';
import {
  IAddEducationParams,
  IDeleteEducationParams,
  IPatchUrlParams,
  IUpsertTranslationParams,
} from '@/models/interfaces';
import { uiStore, languageStore } from '@/store';

const useEducationMutations = () => {
  const queryClient = useQueryClient();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const { strings } = languageStore();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['education'] });

  const addEducation = useMutation<{ _id: string }, Error, IAddEducationParams>({
    mutationFn: (params) => educationService.addEducation(params),
    onSuccess: () => {
      showSnackbar(strings.educationAddedSuccess || 'Education added', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.educationError || 'Something went wrong', 'error'),
  });

  const deleteEducation = useMutation<unknown, Error, IDeleteEducationParams>({
    mutationFn: (params) => educationService.deleteEducation(params),
    onSuccess: () => {
      showSnackbar(strings.educationDeletedSuccess || 'Education deleted', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.educationError || 'Something went wrong', 'error'),
  });

  const upsertTranslation = useMutation<unknown, Error, IUpsertTranslationParams>({
    mutationFn: (params) => educationService.upsertTranslation(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.educationError || 'Something went wrong', 'error'),
  });

  const upsertUrl = useMutation<unknown, Error, IPatchUrlParams>({
    mutationFn: (params) => educationService.upsertUrl(params),
    onSuccess: () => invalidate(),
    onError: () => showSnackbar(strings.educationError || 'Something went wrong', 'error'),
  });

  return { addEducation, deleteEducation, upsertTranslation, upsertUrl };
};

export default useEducationMutations;
