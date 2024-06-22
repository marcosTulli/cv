import { IContactInfo } from '../types';
import { userStore } from '../store';
import useLanguage from './useLanguage';

const useContactInfo = () => {
    const { user } = userStore();
    const { strings } = useLanguage();
    const contactInfo: IContactInfo[] = [
        {
            id: 1,
            name: 'location',
            src: '/location.png',
            value: strings.location,
        },
        {
            id: 2,
            name: 'email',
            src: '/mail.png',
            value: strings.email
        },
        {
            id: 3,
            name: 'phone',
            src: '/telephone.png',
            value: strings.phone,

        },
    ];

    return contactInfo;
};



export default useContactInfo;