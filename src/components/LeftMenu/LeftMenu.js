import { useState } from "react";
import { Box } from "@mui/material";
import MenuItem from "../../components/MenuItem/MenuItem";
import { MENU, POSTS } from "../../constants";
import closeIcon from "../../assets/closeIcon.svg";
import logo from "../../assets/Logo.png";

const LeftMenu = ({ toggleDrawer }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <>
            <Box pt="2rem"
                px="1.25rem"
                pb="1.563rem"
                mb="1.844rem"
                borderBottom="1px solid #E9E9E9"
                width="320px"
                display="flex"
                justifyContent="space-between"
            ><img src={logo} alt="Logo" />
                <Box sx={{ cursor: "pointer" }}><img src={closeIcon} alt="" onClick={toggleDrawer(false)} /></Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                px="1.25rem"
                sx={{ cursor: "pointer" }}
            >
                {MENU.map((item) => (
                    <Box borderBottom="1px solid #E9E9E9" py="1rem">
                        <MenuItem
                            open={open}
                            handleClick={handleClick}
                            anchorEl={anchorEl}
                            handleClose={handleClose}
                            menuName={item}
                            subMenuData={POSTS}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default LeftMenu;