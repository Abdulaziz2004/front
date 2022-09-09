import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import LoginRedirect from "./components/LoginRedirect";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./containers/CreatePost";
import Login from "./containers/Login";
import PostDetail from "./containers/PostDetail";
import Posts from "./containers/Posts";
import SignUp from "./containers/SignUp";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("user-token");
      navigate("/login");
    }, 1000000);
  }, [navigate]);

  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />

        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <PostDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/posts/:id/:action"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />

        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <LoginRedirect>
              <Login />
            </LoginRedirect>
          }
        />

        <Route
          path="/signup"
          element={
            <LoginRedirect>
              <SignUp />
            </LoginRedirect>
          }
        />
      </Routes>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
