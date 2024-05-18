import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
const PostDialog = (props) => {
    const {
        handleClose,
        open,
        post
    } = props;

    return (
        <Dialog onClose={handleClose} open={open}>
            <img srcSet={post.img_2} src={post.img} alt="" />
            <Box py={1}>{post.title}</Box>
            <Box py={1}>{post.text}</Box>
        </Dialog>
    )
}
export default PostDialog;