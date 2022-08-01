import { Navigate } from 'react-router-dom';

const RequireAuth = ({ user, children }) => {
    return user ? children : <Navigate to="/login" />
}

export default RequireAuth;