"use client";
import { Providers } from './provider';
import Home from './components/home/Home';

export default function HomePage() {

  return (
    <Providers>
      <Home />
    </Providers>
  );

}