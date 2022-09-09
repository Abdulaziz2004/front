import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import { Input } from "../components/Input";
import API from "../utils/axios";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [article, setArticle] = useState("");

    const navigate = useNavigate()
    const { id, action } = useParams()

    useEffect(() => {
        if (action === "edit") {
            API.get(`/api/posts/${id}`)
                .then(({ data }) => {
                    const { post } = data;
                    const { title, image, article } = post;
                    setTitle(title)
                    setArticle(article)
                    setFile(image)
                })
        }
    }, [id, action])

    const submit = () => {
        let form = new FormData();

        form.append("image", file)
        form.append("title", title)
        form.append("article", article)

        if (action === "edit") {
            form.append("id", id)
            API.post("/api/update-post", form)
                .then(() => navigate(-1))
        } else {
            API.post("/api/posts", form)
                .then(res => {
                    navigate("/")
                })
        }
    }

    return (
        <Wrapper>
            <Input value={title} onChange={({ target }) => setTitle(target.value)} type="text" placeholder="Sarlavha" />
            <Input type="file" onChange={({ target }) => setFile(target.files[0])} />
            {action === "edit" && <img width="100px" src={`http://localhost:8000/${file}`} alt="" />}
            <textarea value={article} onChange={({ target }) => setArticle(target.value)} rows={10} cols={30}></textarea>
            <button onClick={submit} className="btn btn-create">Saqlash</button>
        </Wrapper>
    )
}

export default CreatePost

const Wrapper = styled.div`
    padding: 50px 100px;

    textarea {
        display: block;
        padding: 16px 32px;
        border: 3px solid #1d74ad;
        font-size: 24px;
        margin: 16px 0;
    }
`;