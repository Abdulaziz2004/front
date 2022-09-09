import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../utils/axios";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/api/posts/${id}`).then((res) => setPostDetail(res.data.post));
  }, [id]);

  const deletePost = () => {
    API.post(`/api/posts/${id}`).then((res) => navigate(-1));
  };

  return (
    <Wrapper>
      <h1>{postDetail.title}</h1>
      <img src={`http://localhost:8000/${postDetail.image}`} alt="" />
      <p>{postDetail.article}</p>
      <Link to={`/posts/${id}/edit`}>
        <button className="btn">O'zgartirish</button>
      </Link>

      <button onClick={deletePost} className="btn">
        O'chirish
      </button>
    </Wrapper>
  );
};

export default PostDetail;

const Wrapper = styled.div`
  padding: 100px;

  h1 {
    margin: 30px 0;
  }

  p {
    margin: 30px 0;
    font-size: 24px;
  }
`;
