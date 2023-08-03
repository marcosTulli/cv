import { IContactInfo } from "@/app/types";
import En from "@/app/loc/strings-en";

export const contactInfo: IContactInfo[] = [
    {
        id: 1,
        name: 'location',
        src: '/location.png',
        value: En.location,
    },
    {
        id: 2,
        name: 'email',
        src: '/mail.png',
        value: En.email,

    },
    {
        id: 3,
        name: 'phone',
        src: '/telephone.png',
        value: En.phone,

    },
];