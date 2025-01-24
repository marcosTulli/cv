'use client';
import * as React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Education, WorkExperience, Skills } from '../sections';
import { PrintableTemplate } from '../pdf-version/PrintableTemplate';
import useDownload from '../menu/hooks/useDownload';
import Info from '@components/info';
import { Box } from '@mui/material';

const Home = () => {
    const { downloadRef } = useDownload();
    return (
        <Box
            sx={{
                height: '100vh',
                bgcolor: 'defaultBackground.main',
                minWidth: '100%',
            }}
        >
            <Header />
            <Info />
            <WorkExperience />
            <Education />
            <Skills />
            <Footer />
            <PrintableTemplate ref={downloadRef} />
        </Box>
    );
};

export default Home;