import { Navigate } from "react-router-dom";

const RequireNoAuth = ({ user, children }) => {
    return user ? <Navigate to="/" /> : children;
}

export default RequireNoAuth;