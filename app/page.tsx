"use client";
import { Providers } from './provider';
import Home from './components/home';

export default function HomePage() {
  return (
    <Providers>
      <Home />
    </Providers>
  );

}