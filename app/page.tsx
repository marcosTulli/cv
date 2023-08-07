"use client";
import { LanguageContextProvider } from '@/app/contexts/LanguageContext';
import Home from './components/home/Home';


export default function HomePage() {
  return (
    <LanguageContextProvider>
      <Home />
    </LanguageContextProvider>
  );

}