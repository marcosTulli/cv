import { IContactInfo } from '../types';
import { userStore } from '../store';

const useContactInfo = () => {
    const { user } = userStore();
    const contactInfo: IContactInfo[] = [
        {
            id: 1,
            name: 'location',
            src: '/location.png',
            value: user.info.location,
        },
        {
            id: 2,
            name: 'email',
            src: '/mail.png',
            value: user.email,

        },
        {
            id: 3,
            name: 'phone',
            src: '/telephone.png',
            value: user.info.phone,

        },
    ];

    return contactInfo;
};



export default useContactInfo;