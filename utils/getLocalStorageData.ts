import { INode } from "@/models/interfaces";

export const getLocalStorageData = (key: string): INode | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
