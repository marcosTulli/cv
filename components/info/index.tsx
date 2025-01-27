"use client";
import React from "react";
import styles from "./index.module.scss";
import { Social, Contact, Languages, ProfilePicture } from "./components";
import { userStore } from "@/store";
import { useIsLoadingSections } from "@/hooks";
import { Box } from "@mui/material";

const Info: React.FC = () => {
  const { isLoadingUser } = userStore();
  const { isLoadingSections } = useIsLoadingSections();
  const isLoading = isLoadingUser || isLoadingSections;

  return (
    <Box component={"section"} className={styles.info}>
      <Box className={styles.infoGrid}>
        <ProfilePicture isLoading={isLoading} />
        <Contact isLoading={isLoading} />
        <Social isLoading={isLoading} />
        <Languages isLoading={isLoading} />
      </Box>
    </Box>
  );
};

export default Info;
