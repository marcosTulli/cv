import React from "react";
import { Typography } from "@mui/material";
import styles from "../SignlePageTemplate.module.scss";
import { useEducation } from "@/hooks/queries";
import { languageStore, userStore } from "@/store";

const Education: React.FC = () => {
  const { strings, currentLanguage } = languageStore();
  const { user } = userStore();
  const { data: educationData } = useEducation({
    id: user._id,
    lang: currentLanguage,
  });

  return (
    <div className={styles.education}>
      <Typography className={styles.sectionTitle}>
        {strings.education}
      </Typography>
      <ul>
        {educationData?.map((education) => (
          <li className={styles.educationItem} key={education.id}>
            <Typography className={styles.degree}>{education.title}</Typography>
            <Typography className={styles.college}>
              {education.content}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
