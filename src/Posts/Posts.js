import { useState } from 'react';
import { Box } from "@mui/material";
import PostCard from "../components/PostCard/PostCard.js";
import PostDialog from "../components/PostDialog/PostDialog.js";

const Posts = ({ posts }) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [post, setPost] = useState({});
    console.log(openDialog)
    const openPostDialog = (post) => {
         setOpenDialog(true);
         setPost(post);
    }
    return (
        <>
        <Box mt="3rem" display="flex" pl={{ xs: "10%", sm: "20%" }} pr="20%" flexWrap="wrap" justifyContent="space-between">
            {posts.map(
                post => (
                    <Box key={post.title} marginBottom="3rem"  onClick={() => openPostDialog(post)} sx={{cursor: "pointer"}}>
                        <PostCard post={post} />
                    </Box>
                ))}
        </Box>
        <PostDialog open={openDialog} handleClose={() => setOpenDialog(false)} post={post}/>
        </>
    )
}
export default Posts;