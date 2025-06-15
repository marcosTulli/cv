"use client";
import * as React from "react";
import styles from "./index.module.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { userStore } from "@/store";
import { Box, Button, Tooltip } from "@mui/material";
import { useContact } from "../../hooks";
import ContactsSkeleton from "./ContactsSkeleton";

interface IContactProps {
  isLoading: boolean;
}
const Contact: React.FC<IContactProps> = ({ isLoading }) => {
  const { user } = userStore();
  const { tooltipTitle, handleCopy, resetTooltip } = useContact();
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const toggleman = ()=> { setIsHover((p)=> !p);};

  return (
    <Box
      sx={{ color: "secondary.main" }}
      className={styles.contactInfoContainer}
    >
      {isLoading ? (
        <ContactsSkeleton/>
      ) : (
        <Box >
          <Tooltip title={tooltipTitle} TransitionProps={{ timeout: 500 }}>
            <Box
              onClick={handleCopy}
              onMouseOut={resetTooltip}
              className={styles.contact}
              onMouseEnter={toggleman}
              onMouseLeave={toggleman}
              sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}
            >
              <Box display={'flex'} gap={'0.5rem'}>
              <LocalPhoneOutlinedIcon className={styles.icon} />
              <Box>{user.phone}</Box>
              </Box>
              {isHover && <Button 
              
              variant="contained"
              onClick={()=> console.log('jeje')}sx={{ padding:'0', margin:'0' }}>+</Button>}
            </Box>
          </Tooltip>
          <Tooltip title={tooltipTitle} TransitionProps={{ timeout: 500 }}>
            <Box
              className={styles.contact}
              onClick={handleCopy}
              onMouseOut={resetTooltip}
            >
              <EmailOutlinedIcon className={styles.icon} />
              <Box>{user.email}</Box>
            </Box>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default Contact;
