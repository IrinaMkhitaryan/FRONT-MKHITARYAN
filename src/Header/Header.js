import { useState } from "react";
import { Box, Button, Drawer, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "../components/MenuItem/MenuItem";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import { POSTS } from "../constants";
import { MENU } from "../constants";
import logo from "../assets/Logo.png";
import menuIcon from "../assets/menuIcon.svg";

const Header = ({ setQuery, scrollTop }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDr, setOpenDr] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDr(newOpen);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Box display="flex" mt="2.25rem" ml="1.25rem">
          <Button onClick={toggleDrawer(true)}><img src={menuIcon} alt="" /></Button>
          <Box display="flex" justifyContent="center" ml="3.8rem"><img src={logo} alt="Logo" /></Box>
        </Box>
        <Drawer open={openDr} onClose={toggleDrawer(false)}>
          <LeftMenu toggleDrawer={toggleDrawer} />
        </Drawer>
      </Box>
      <Box
        justifyContent="center"
        py="1.813rem"
        borderBottom="1px solid #E9E9E9"
        sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex" } }}>
        <Box display="flex" width="100%">
          <Box width="91%" display="flex" justifyContent="center"><img src={logo} alt="" /></Box>
          <Box width="8%"> <TextField margin="dance"
            onChange={e => setQuery(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          /></Box>
        </Box>
      </Box>
      <Box
        justifyContent="center"
        py="1.322rem"
        borderBottom="1px solid #E9E9E9"
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          position: scrollTop > 200 ? "static" : "sticky", top: 0, background: "white", cursor: "pointer"
        }}>
        {MENU.map((item) => (
          <MenuItem
            open={open}
            handleClick={handleClick}
            anchorEl={anchorEl}
            handleClose={handleClose}
            menuName={item}
            subMenuData={POSTS}
          />
        ))}
      </Box>
    </>

  )
};
export default Header;