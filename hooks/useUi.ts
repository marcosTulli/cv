import { uiStore } from '@/store';

const useUi = () => {
  const isEditMode = uiStore((state) => state.isEditMode);
  const editTarget = uiStore((state) => state.editTarget);
  const snackbar = uiStore((state) => state.snackbar);
  const toggleEditMode = uiStore((state) => state.toggleEditMode);
  const setEditMode = uiStore((state) => state.setEditMode);
  const openEdit = uiStore((state) => state.openEdit);
  const closeEdit = uiStore((state) => state.closeEdit);
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const closeSnackbar = uiStore((state) => state.closeSnackbar);

  return {
    isEditMode,
    editTarget,
    snackbar,
    toggleEditMode,
    setEditMode,
    openEdit,
    closeEdit,
    showSnackbar,
    closeSnackbar,
    isEditOpen: editTarget !== null,
  };
};

export default useUi;
