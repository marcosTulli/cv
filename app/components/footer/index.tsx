"use client";
import React from "react";
import styles from "./index.module.scss";
import { userStore } from "@/app/store";
import { Box } from "@mui/material";

const Footer = () => {
  const { user } = userStore();
  return (
    <footer>
      <Box
        component={"footer"}
        sx={{ bgcolor: "defaultBackground.main" }}
        className={styles.footer}
      >
        <Box
          sx={{ color: "secondary.main" }}
          component={"p"}
          className={styles.footerText}
        >
          © 2024 {user.name} CV.
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
