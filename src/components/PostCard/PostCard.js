import { Card, Box, CardContent } from '@mui/material';

const PostCard = ({ post }) => {
  return <Card sx={{ maxWidth: 360, borderRadius: 0, boxShadow: "none" }}>
    <img src={post.img} height="230" alt="" srcSet={post.img_2} />
    <CardContent sx={{ paddingLeft: 0, paddingTop: 0 }}>
      <Box fontSize="0.813rem" color="#EB0028" pt="1rem">{post.tags}</Box>
      <Box fontSize="1.5rem" fontWeight="700" pt="1rem">
        {post.title}
      </Box>
      <Box display="flex" color="#000000" fontSize="0.75rem" pt="1rem" alignItems="center">
        <Box color="#000000" fontSize="0.75rem">{post.autor} </Box>
        <Box bgcolor="#D7D7D7" width="3px" height="3px" mx="0.313rem" borderRadius="50%"></Box>
        <Box color="#9B9B9B" fontSize="0.75rem">{post.date}</Box>
        <Box bgcolor="#D7D7D7" width="3px" height="3px" mx="0.313rem" borderRadius="50%"></Box>
        <Box color="#9B9B9B" fontSize="0.75rem">{post.views} Views
        </Box>
      </Box>
      <Box color="#929292" fontSize="0.875rem" pt="1rem">
        {post.text}
      </Box>
    </CardContent>
  </Card>

}
export default PostCard;