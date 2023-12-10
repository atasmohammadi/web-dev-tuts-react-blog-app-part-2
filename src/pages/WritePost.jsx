import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function WritePost({ writePost, loggedInUser }) {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your post creation logic here
    console.log("Post Data:", formData);
    writePost(formData);
  };

  if (!loggedInUser) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            You need to log in first
          </Typography>
        </div>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Write Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            label="Title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Text"
            name="text"
            multiline
            rows={4}
            value={formData.text}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Post
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default WritePost;
