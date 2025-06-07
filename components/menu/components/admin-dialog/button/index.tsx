"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { useAdminDialogStore } from "../hooks/useAdminDialog";
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import useSideBar from "@/components/menu/hooks/useSidebar";

const OpenAdminDialogButton: React.FC = () => {
    const pathName = usePathname();
    const { toggle } = useAdminDialogStore()
    const { toggleSideBar } = useSideBar();
    const click = () => { toggle(); toggleSideBar() }

    return (
        <Button sx={{ color: "secondary.main" }} onClick={click}>
            <LoginIcon />
        </Button>
    )
};

export default OpenAdminDialogButton;
