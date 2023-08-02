"use client";
import './styles/style.scss';
import { LanguageContextProvider } from '@/app/contexts/LanguageContext';
import Home from '@/app/components/Home';


export default function HomePage() {
  return (
    <LanguageContextProvider>
      <Home />
    </LanguageContextProvider>
  );

}