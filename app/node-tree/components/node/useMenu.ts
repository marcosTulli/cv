import React from 'react';

const useMenu = () => {
  const [isOpen, setisOpen] = React.useState<boolean>(false);
  const options = ['add', 'delete'];

  const toggleOpen = () => {
    setisOpen((prev) => !prev);
  };

  return { toggleOpen, options, isOpen };
};

export default useMenu;
