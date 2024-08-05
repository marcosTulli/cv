import { RefObject } from 'react';

export type TSectionElement = {
    [key: string]: RefObject<HTMLDivElement> | null;
};
