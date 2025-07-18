import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../SignlePageTemplate.module.scss";
import { languageStore, userStore } from "@/store";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProfilePicture from "../../info/components/profile-picture";
import { ILanguage } from "@/models/interfaces";

const Header: React.FC = () => {
  const { user } = userStore();
  const { strings } = languageStore();
  return (
    <div className={styles.header}>
      <ProfilePicture isLoading={false} />
      <Typography className={styles.sectionTitle}>{user.name}</Typography>
      <Typography className={styles.candidateDescription}>
        {user.info.candidateTitle}
      </Typography>
      <div className={styles.contactInfo}>
        <Typography className={styles.contactItem}>
          <LocalPhoneOutlinedIcon className={styles.icon} />
          {user.email}
        </Typography>
        <Typography className={styles.contactItem}>
          <EmailOutlinedIcon className={styles.icon} />
          {user.phone}
        </Typography>
        <Typography className={styles.contactItem}>
          <GitHubIcon
            className={styles.icon}
            style={{ marginRight: "0.4rem" }}
          />
          {user.network.linkedin.display}
        </Typography>
        <Typography className={styles.contactItem}>
          <LinkedInIcon
            className={styles.icon}
            style={{ marginRight: "0.4rem" }}
          />
          {user.network.github.display}
        </Typography>
      </div>
      <Box>
        <Typography className={styles.languageTitle}>
          {strings.languages}:
        </Typography>
        <ul className={styles.languagesContainer}>
          {user.info.languages?.map((language: ILanguage) => (
            <li key={language.language} className={styles.languageContainer}>
              <Typography variant="body2" className={styles.language}>
                {` ${language.language}: ${language.level}`}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Header;
