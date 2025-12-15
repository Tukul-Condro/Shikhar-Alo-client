import  { useContext } from 'react';
import {AuthContext} from '../ProviderContext/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner className="h-8 w-8" />
    }
    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;