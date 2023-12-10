import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";

function PostList({ posts }) {
  return (
    <Container component="main" sx={{ mt: 3 }}>
      <CssBaseline />
      <div>
        {posts.map((post) => (
          <Card key={post.id} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {post.text}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Author: {post.author}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <div>
                <Button size="small">Like</Button>
                <Button size="small">Dislike</Button>
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default PostList;
