"use client";
import * as React from "react";
import styles from "./index.module.scss";
import { userStore } from "@/store";
import Language from "./Language";
import { Box } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ILanguage } from "@/models/interfaces";

interface ILanguagesProps {
  isLoading: boolean;
}

const Languages: React.FC<ILanguagesProps> = ({ isLoading }) => {
  const { user } = userStore();

  return (
    <Box className={styles.languageContainer}>
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <Box key={index} className={styles.language}>
              <Skeleton height={22} width={26} />
              <Skeleton height={14} width={57.61} />
            </Box>
          ))
        : user.info.languages?.map((language: ILanguage) => (
            <Language key={language.language} language={language} />
          ))}
    </Box>
  );
};

export default Languages;
