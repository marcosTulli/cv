import * as React from 'react';
import JobCard from './job-card/JobCard';
import styles from './WorkExperience.module.scss';
import { languageStore } from '@/app/store';
import { IExperience } from '@/app/models/interfaces';
import { Container, Grid } from '@mui/material';

interface IWorkExperienceBody {
    data?: IExperience[];
};

const WorkExperienceBody: React.FC<IWorkExperienceBody> = ({ data }) => {
    const { currentLanguage } = languageStore();

    return (
        <Container className={styles.section}>
            <Grid container maxWidth='lg' spacing={1.5}>
                {data?.map((experience) => (
                    <Grid item xs={12} sm={12} md={6} key={experience._id}>
                        <JobCard experience={experience} language={currentLanguage} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default WorkExperienceBody;