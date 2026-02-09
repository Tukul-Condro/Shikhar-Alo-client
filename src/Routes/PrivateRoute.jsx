import  { useContext } from 'react';
import {AuthContext} from '../ProviderContext/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
// import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const {user, loading} = useAuth();
    const location = useLocation();
    
    // if(!auth){
    //     return null;
    // }
    // const {user, loading} = auth;
    if(loading){
        return  <div className="flex items-center justify-center min-h-screen">
                     <Spinner className="h-10 w-10" />
                </div>
    }
    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;