import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Actions, PageSections } from "../items";
import useSideBar from "../../hooks/useSidebar";

interface Props {
  window?: () => Window;
}

const SideBar: React.FC<Props> = ({ window }) => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      open={isSideBarOpen}
      onClose={toggleSideBar}
      anchor="right"
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "flex", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 160,
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "primary.main",
          gap: "8rem",
          height: "100%",
        }}
      >
        <PageSections />
        <Actions />
      </Box>
    </Drawer>
  );
};

export default SideBar;
