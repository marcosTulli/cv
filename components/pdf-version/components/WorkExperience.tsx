import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../SignlePageTemplate.module.scss";
import { languageStore, userStore } from "@/store";
import { useWorkExperience } from "@/hooks/queries";
import { IExperience } from "@/models/interfaces";

const WorkExperience: React.FC = () => {
  const { currentLanguage, strings } = languageStore();
  const { user } = userStore();
  const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
  const experiences: IExperience[] = data
    ? data
    : [
        {
          _id: "",
          activePeriod: { startDate: "", endDate: "" },
          comapnyUrl: "",
          companyLogo: "",
          companyName: "",
          info: { position: "", tasks: [{ _id: "", task: "" }] },
        },
      ];

  return (
    <Box className={styles.workExperience}>
      <Box className={styles.sectionTitle}>{strings.workExperience}</Box>
      {experiences?.map((experience) => (
        <div className={styles.experienceContainer} key={experience._id}>
          <div className={styles.companyInfo}>
            <Typography variant="h6" className={styles.companyName}>
              {experience.companyName}
            </Typography>
            <Typography variant="body1" className={styles.positionAndPeriod}>
              {experience.info.position} | {experience.activePeriod.startDate} -{" "}
              {experience.activePeriod.endDate.length > 0
                ? experience.activePeriod.endDate
                : "present"}
            </Typography>
          </div>
          <ul>
            {experience.info.tasks?.map((task) => (
              <li key={task._id} className={styles.task}>
                <Typography variant="body1" className={styles.task}>
                  {task.task}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
};

export default WorkExperience;
