import { AppBar, Button, Container, Toolbar, CssBaseline } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

function Layout({ logoutUser, loggedInUser }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            Home
          </Button>
          <Button component={Link} to="/write-post" color="inherit">
            Write Post
          </Button>
          <div style={{ flex: 1 }} />
          {loggedInUser ? (
            <>
              Hello {loggedInUser.username}
              <Button color="inherit" onClick={logoutUser}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/register"
                color="inherit"
                sx={{ marginRight: 1 }}
              >
                Register
              </Button>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 8 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
