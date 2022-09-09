import { Link } from "react-router-dom";

const { default: styled } = require("styled-components")

const Post = ({ img, title, id, author, date }) => {
    return (
        <Wrapper to={`/posts/${id}`}>
            <div className="post__header">
                <h2>{author}</h2>
                <p>{date.split("T")[0]}</p>
            </div>

            <img src={`http://localhost:8000/${img}`} alt="" />
            <h2>{title}</h2>
        </Wrapper>
    )
}

export default Post

const Wrapper = styled(Link)`
    width: 400px;
    border: 3px solid #1d74ad;
    text-decoration: none;
    color: black;
    
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }  

    h2 {
        padding: 20px 10px;
    }

    .post__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }
`;