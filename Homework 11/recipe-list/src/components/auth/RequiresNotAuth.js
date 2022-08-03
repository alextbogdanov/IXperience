import { Navigate } from 'react-router-dom';

const RequiresNotAuth = ({ user, children }) => {
    return user ? <Navigate to="/" /> : children;
}

export default RequiresNotAuth;