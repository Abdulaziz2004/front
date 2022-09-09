import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LoginRedirect = ({ children }) => {
    let token = localStorage.getItem("user-token")
    let navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token, navigate])

    return children;
}

export default LoginRedirect;