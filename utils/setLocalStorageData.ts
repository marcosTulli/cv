import { INode } from '@/models/interfaces';

export const setLocalStorageData = (key: string, value: INode) => {
  localStorage.setItem(key, JSON.stringify(value));
};
