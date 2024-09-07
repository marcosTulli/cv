"use client";
import { Providers } from './provider';

import Home from './components/home/Home';
import SinglePageTemplate from './components/pdf-version/SinglePageTemplate';

export default function HomePage() {

  return (
    <Providers>
      <Home />
      {/* <SinglePageTemplate /> */}
    </Providers>
  );

}