import { Button, Tooltip } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useDownload, useIsLoadingSections } from "@/hooks";
import { languageStore } from "@/store";
import useSideBar from "../../hooks/useSidebar";
import NavItem from "../NavItem";

const Download: React.FC = () => {
  const { isLoadingSections } = useIsLoadingSections();
  const { strings } = languageStore();
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { handleDownload } = useDownload();

  const handleClick = () => {
    handleDownload();
    isSideBarOpen && toggleSideBar();
  };

  return (
    <Tooltip title={strings.downloadAction}>
      <span>
        <Button
          sx={{ color: "secondary.main" }}
          disabled={isLoadingSections}
          onClick={handleClick}
        >
          <NavItem label={"Download"}>
            <PictureAsPdfIcon />
          </NavItem>
        </Button>
      </span>
    </Tooltip>
  );
};

export default Download;
