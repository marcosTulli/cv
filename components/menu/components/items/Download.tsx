import { Box, Button, Tooltip, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useDownload, useIsLoadingSections } from "@/hooks";
import { languageStore } from "@/store";
import useSideBar from "../../hooks/useSidebar";

const Download: React.FC = () => {
  const { isLoadingSections } = useIsLoadingSections();
  const { strings } = languageStore();
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { handleDownload } = useDownload();
  const isMobile = useMediaQuery("(max-width: 500px)");

  const handleClick = () => {
    handleDownload();
    isSideBarOpen && toggleSideBar();
  };

  return (
    <Tooltip title={strings.downloadAction}>
      <span>
        <Button
          sx={{ color: "secondary.main", display: "flex", gap: "0.5rem" }}
          disabled={isLoadingSections}
          onClick={handleClick}
        >
          {!isMobile && (
            <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
              <PictureAsPdfIcon />
            </Box>
          )}
          <Typography>Download</Typography>
        </Button>
      </span>
    </Tooltip>
  );
};

export default Download;
