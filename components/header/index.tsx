"use client";
import React from "react";
import styles from "./index.module.scss";
import { userStore } from "@/store";
import SectionHeader from "../sections/section-header/SectionHeader";
import { Sections } from "@/models/enums";
import useSectionRef from "../sections/hooks/useSectionRef";
import { useIsLoadingSections } from "@/hooks";
import { Box } from "@mui/material";
import { useUser } from "@/hooks/queries";

const Header: React.FC = () => {
  const { isLoadingUser } = userStore();
  const { user } = useUser();
  const { sectionRef } = useSectionRef({ sectionName: Sections.Header });
  const { isLoadingSections } = useIsLoadingSections();

  return (
    <Box
      component={"section"}
      ref={sectionRef}
      className={styles.headerContainer}
    >
      <SectionHeader
        title={user?.name}
        description={user?.info.candidateTitle}
        isLoading={isLoadingUser || isLoadingSections}
        pageHeader
      />
    </Box>
  );
};

export default Header;
