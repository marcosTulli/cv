// import { useState } from 'react';
// import copy from 'copy-to-clipboard';

// interface HoverStateProps {
//     id: number,
//     value: string,
//     isHover: boolean;
//     isCopied?: boolean;
// }

// const useCopyToClipboard = () => {
//     const [hoverItem, setHoverItem] = useState<HoverStateProps | undefined>();

//     const displayCopyButton = (id: number): boolean => {
//         if (hoverItem?.isHover && id === hoverItem.id) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     };

//     // const handleCopy = (value) => {
//     //     copy(value);
//     //     setIsCopied(true);
//     // };

//     return {
//         isCopied,
//         handleCopy,
//     };
// };