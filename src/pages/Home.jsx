import { useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import PostList from "./PostList";
import FilterPosts from "../components/FilterPosts";
import SearchPosts from "../components/SearchPosts";

function Home({ posts, users }) {
  const [selectedUser, setSelectedUser] = useState();
  const [search, setSearch] = useState();

  const onSelectUser = (user) => {
    console.log(user, " is selected");
    setSelectedUser(user);
  };

  const filteredPostsByAuthor = selectedUser
    ? posts.filter((post) => post.author === selectedUser)
    : posts;

  const filteredPostsBySearch = search
    ? filteredPostsByAuthor.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.text.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      )
    : filteredPostsByAuthor;

  return (
    <Container component="main" sx={{ mt: 8 }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Welcome to the Blog!
        </Typography>
        <FilterPosts users={users} onSelectUser={onSelectUser} />
        <SearchPosts onSearch={setSearch} />
        <PostList posts={filteredPostsBySearch} />
      </div>
    </Container>
  );
}

export default Home;
