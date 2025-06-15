"use client";
import * as React from "react";
import styles from "./index.module.scss";
import { Box} from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContactsSkeleton: React.FC = ({  }) => {
  return (
        <Box>
          <Box className={styles.contact}>
            <Skeleton className={styles.icon} height={24} width={24} />
            <Skeleton height={14} width={150} />
          </Box>
          <Box className={styles.contact}>
            <Skeleton className={styles.icon} height={24} width={24} />
            <Skeleton height={14} width={220} />
          </Box>
        </Box>
      );
};

export default ContactsSkeleton;