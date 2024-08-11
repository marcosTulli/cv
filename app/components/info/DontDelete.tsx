// 'use client';
// import React from 'react';
// import Image from "next/image";
// // import { CopyAlert } from './CopyAlert';
// // import copy from "copy-to-clipboard";
// import styles from './Info.module.scss';
// // import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// // import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { useMediaQuery } from '@mui/material';
// // import { useContactInfo } from '@/app/hooks';
// import { userStore } from '@/app/store';
// import Languages from './language-section/Languages';

// interface HoverState {
//     id: number,
//     value: string,
//     isHover: boolean;
//     isCopied?: boolean;
// }

// const Info = () => {
//     const [hoverItem, setHoverItem] = React.useState<HoverState | undefined>();
//     const isMobile = useMediaQuery('(max-width: 500px)');
//     // const contactInfo = useContactInfo();
//     const { user } = userStore();



//     // const displayCopyButton = (id: number): boolean => {
//     //     if (hoverItem?.isHover && id === hoverItem.id) {
//     //         return false;
//     //     }
//     //     else {
//     //         return true;
//     //     }
//     // };

//     React.useEffect(() => {
//         if (isMobile && hoverItem !== undefined) {
//             setTimeout(() => {
//                 setHoverItem(undefined);
//             }, 700);
//         }

//     }, [isMobile, hoverItem]);

//     // const displayCopyConfirmation = (id: number): boolean => {
//     //     if (hoverItem?.isCopied && id === hoverItem.id) {
//     //         return false;
//     //     }
//     //     else {
//     //         return true;
//     //     }
//     // };

//     // const handleTextHover = (id: number, value: string, isHover: boolean) => {
//     //     if (value !== user.location) {
//     //         setHoverItem({ id, value, isHover });
//     //     }

//     // };

//     // const handleCopy = (value: string, isCopied: boolean) => {
//     //     copy(value);
//     //     setHoverItem((i) => i ? { ...i, isCopied } : i);
//     // };

//     // const handleMenuClick = () => {
//     //     setDisplayMenu(!displayMenu);
//     // };

//     // const handleIcons = (iconName: string) => {
//     //     const icons = {
//     //         location: <LocationOnOutlinedIcon />,
//     //         phone: <LocalPhoneOutlinedIcon />,
//     //         email: <EmailOutlinedIcon />
//     //     };

//     //     switch (iconName) {
//     //         case 'location':
//     //             return icons.location;
//     //         case 'phone':
//     //             return icons.phone;
//     //         case 'email':
//     //             return icons.email;
//     //         default:
//     //             break;
//     //     }
//     // };



//     return (
//         <div className={styles.info}>
//             <Image
//                 src="/profile.png"
//                 alt="profile picture"
//                 width={500}
//                 className={styles.profilePicture} height={500}
//             />

//             <div className={styles.contactInfoContainer}>
//                 <div className={styles.contact}>
//                     <LocalPhoneOutlinedIcon />
//                     <div>{user.phone}</div>
//                 </div>
//                 <div className={styles.contact}>
//                     <EmailOutlinedIcon />
//                     <div>{user.email}</div>
//                 </div>
//             </div>

//             <Languages />


//             <div className={styles.links}>
//                 <a
//                     href={user.network.linkedin.url}
//                     target="_blank"
//                     title={user.network.linkedin.url}
//                 >
//                     <LinkedInIcon
//                         style={{ marginRight: '0.4rem' }}
//                     />
//                     <p>{user.network.linkedin.display}</p>
//                 </a>
//                 <a
//                     href={user.network.github.url}
//                     target="_blank"
//                     title={user.network.github.url}
//                 >
//                     <GitHubIcon
//                         style={{ marginRight: '0.4rem' }}
//                     />
//                     <p>{user.network.github.display}</p>
//                 </a>
//             </div>

//         </div>
//     );
// };

// export default Info;