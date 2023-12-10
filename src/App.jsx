import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WritePost from "./pages/WritePost";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const [posts, setPosts] = useState([]);

  const addUser = (userData) => {
    setUsers([
      ...users,
      {
        ...userData,
        email: userData.email.toLowerCase(),
      },
    ]);
  };

  const loginUser = ({ email, password }) => {
    const user = users.find(
      (u) => u.email === email.toLowerCase() && u.password === password
    );
    if (user) {
      setLoggedInUser(user);
      alert("login successful");
    } else {
      setLoggedInUser();
      alert("email or password incorrect");
    }
  };

  const logoutUser = () => {
    setLoggedInUser();
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 10000);
  };

  const writePost = ({ title, text }) => {
    if (loggedInUser) {
      setPosts([
        ...posts,
        {
          title,
          text,
          id: generateRandomId(),
          author: loggedInUser.username,
        },
      ]);
    } else {
      alert("You need to log in first");
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout logoutUser={logoutUser} loggedInUser={loggedInUser} />
          }
        >
          <Route path="/" element={<Home posts={posts} users={users} />} />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route
            path="/write-post"
            element={
              <WritePost writePost={writePost} loggedInUser={loggedInUser} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
