import { Container, CssBaseline } from "@mui/material";

function FilterPosts({ users, onSelectUser }) {
  return (
    <Container component="main" sx={{ mt: 3 }}>
      <CssBaseline />
      <select onChange={(e) => onSelectUser(e.target.value)}>
        <option></option>
        {users.map((user) => (
          <option>{user.username}</option>
        ))}
      </select>
    </Container>
  );
}

export default FilterPosts;
