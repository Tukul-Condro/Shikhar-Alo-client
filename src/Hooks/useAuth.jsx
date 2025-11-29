import { useContext } from "react";
import { AuthContext } from "../ProviderContext/AuthContext";


const useAuth = () => {
    
        const auth = useContext(AuthContext)
    return auth;
    
};

export default useAuth;