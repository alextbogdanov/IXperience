import { Navigate  } from 'react-router-dom';

const RequiresAuth = ({user, children}) => {
    return user ? children : <Navigate to="/login" />
}

export default RequiresAuth;