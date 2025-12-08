'use client';
import React from 'react';
import { LengthSlider } from './LengthSlider';
import { CharConfig } from './CharConfig';

export const PasswordConfiguration: React.FC = () => {
  return (
    <>
      <LengthSlider />
      <CharConfig />
    </>
  );
};
