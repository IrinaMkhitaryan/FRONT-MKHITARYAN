
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled, alpha } from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import arrowDownIcon from "../../assets/arrowDownIcon.svg";

const MenuItem = (props) => {
    const {
        open,
        handleClick,
        anchorEl,
        handleClose,
        menuName,
        subMenuData
    } = props;

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            marginTop: '21px',
            border: '1px solid #E9E9E9',
            minWidth: 180,
            color: "#000000",
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: "0.813rem",
                    color: "#000000",
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
        '& .css-1x7jfmm-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            borderRadius: 'unset'
        }
    }));

    return (
        <>
            <Box
                color="#000000"
                fontWeight="bold"
                fontSize="1rem"
                paddingLeft="1rem"
                paddingRight="1rem"
                onClick={handleClick}
                display="flex"
            >
                <Box>{menuName}</Box><Box pl="0.4rem">{menuName === "Buy Now" ? null : <img src={arrowDownIcon} />}</Box>
            </Box>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                xs={{ boxShadow: 'none' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Box display="flex" flexDirection="column" px="20px">
                    {subMenuData.map((item) => (
                        <Box display="flex" component="list" sx={{ "&:hover": { cursor: "pointer", color: "#969696" } }}
                            borderBottom={item === "Video Post" ? "none" : "1px solid #E9E9E9"}
                            justifyContent="space-between" fontSize="0.813rem" py="8px">
                            <Box sx={{ "&:hover": { paddingLeft: "8px" } }}>{item}</Box><Box><KeyboardArrowRightIcon fontSize="0.813rem" /></Box>
                        </Box>
                    ))}
                </Box>
            </StyledMenu>
        </>
    )
}
export default MenuItem;