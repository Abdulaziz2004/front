import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Post from "../components/Post";
import API from "../utils/axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/api/posts/")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 401) {
          navigate("/login");
        }
      });
  }, [navigate]);

  return (
    <PostsWrapper>
      {posts.map(({ id, title, image, author, date }) => (
        <Post
          id={id}
          key={id}
          img={image}
          title={title}
          author={author}
          date={date}
        />
      ))}
    </PostsWrapper>
  );
};

export default Posts;

const PostsWrapper = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
