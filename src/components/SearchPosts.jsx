import { Container, CssBaseline } from "@mui/material";

function SearchPosts({ onSearch }) {
  return (
    <Container component="main" sx={{ mt: 3 }}>
      <CssBaseline />
      <input type="text" onChange={(e) => onSearch(e.target.value)} />
    </Container>
  );
}

export default SearchPosts;
