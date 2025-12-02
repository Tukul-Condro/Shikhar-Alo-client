import { Button } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {

    const {googleSinIn} = useAuth(); 
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSinIn()
        .then(result =>{
            console.log(result.user)
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    title: "SignIn Success",
                    icon: "success",
                });
                navigate(from , {replace : true});
            })
        })
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn}
                        variant="outlined"
                        size="lg"
                        className="flex mt-5 h-12 border-blue-gray-200 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                        src={`https://www.material-tailwind.com/logos/logo-google.png`}
                        alt="google"
                        className="h-6 w-6"
                        />{" "}
                        sign in with google
                    </Button>
        </div>
    );
};

export default GoogleLogin;