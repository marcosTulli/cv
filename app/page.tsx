'use client';
import * as React from 'react';
import {
  Education,
  WorkExperience,
  Skills,
  Projects,
} from '@components/sections';
import Info from '@components/info';
import { Box } from '@mui/material';
import { useDownload } from '@/hooks';
import Header from '@components/header';
import { PrintableTemplate } from '@/components/pdf-version/PrintableTemplate';
import { Sections } from '@/models/enums';
import AdminDialog from '@/components/menu/components/admin-dialog/dialog';

const HomeHeader = () => (
  <React.Fragment>
    <Header />
    <Info />
  </React.Fragment>
);

const sections = [
  { id: Sections.Header, component: <HomeHeader /> },
  { id: Sections.Projects, component: <Projects /> },
  { id: Sections.WorkExperience, component: <WorkExperience /> },
  { id: Sections.Education, component: <Education /> },
  { id: Sections.Skills, component: <Skills /> },
];

const Home = () => {
  const { downloadRef } = useDownload();

  return (
    <Box
      sx={{
        bgcolor: 'defaultBackground.main',
        minWidth: '100%',
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={section.id}
          sx={{
            bgcolor:
              index % 2 === 1 ? 'primary.main' : 'defaultBackground.main',
          }}
        >
          {section.component}
        </Box>
      ))}
      <PrintableTemplate ref={downloadRef as React.RefObject<HTMLDivElement>} />
      <AdminDialog />
    </Box>
  );
};

export default Home;
