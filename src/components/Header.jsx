import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user-token");
        navigate("/login")
    }

    return (
        <Wrapper>
            <StyledLink to="/">
                <h2>G1 Book</h2>
            </StyledLink>

            {!(pathname === "/login" || pathname === "/signup") &&
                <Fragment>
                    {pathname !== "/create" &&
                        <Link to="/create">
                            <button className="btn btn-create-post">Create Post</button>
                        </Link>
                    }
                    <button onClick={logout} className="btn btn-logout">Log out</button>
                </Fragment>
            }

            {pathname === "/login" && <Link to="/signup">
                <button className="btn btn-create-post">Sign Up</button>
            </Link>}

            {pathname === "/signup" && <Link to="/login">
                <button className="btn btn-create-post">Login</button>
            </Link>}
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 80px;
    background-color: #0a7b8f;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 100px;
`;

const StyledLink = styled(Link)`
    color: white;
    margin-right: auto;
    text-decoration: none;
`;