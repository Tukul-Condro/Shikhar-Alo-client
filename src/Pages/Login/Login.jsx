import {Card,Input,Button,CardBody,CardHeader,Typography} from "@material-tailwind/react";
import { useContext, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ProviderContext/AuthContext";
import { Title } from "react-head";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import Swal from "sweetalert2";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                    title: "Login Successfull!",
                    icon: "success"
                });
            navigate(from, { replace: true});
        })
        .catch(error => {
            console.log(error.code);
            {
            Swal.fire({
                icon: "error",
                title: "Email not found",
                text: "This email is not registered.",
            });
          }
        });
    }

    return (
        <div>
            <Title>Login - Shikhar Alo</Title>
            <Card shadow={false} className="mx-auto my-15 lg:w-2xl md:px-24 md:py-14 py-8 border border-gray-300">
                <CardHeader shadow={false} floated={false} className="text-center">
                    <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:text-4xl"
                    >
                    Login 
                    </Typography>
                    <Typography className="text-center !text-gray-600 text-[18px] font-normal">
                    Enjoy quick and secure access to your accounts on various SHIKHAR ALO
                    platforms.
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleLogin} action="#" className="flex flex-col gap-4 md:mt-8"
                    >
                    <div>
                        <label htmlFor="email">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium mb-2"
                        >
                            Your Email
                        </Typography>
                        </label>
                        <Input 
                        id="email"
                        color="gray"
                        size="lg"
                        type="email"
                        name="email"
                        placeholder="name@mail.com"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 input input-neutral"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium mb-2"
                        >
                             Email password
                        </Typography>
                        </label>
                        <Input
                        id="password"
                        color="gray"
                        size="lg"
                        type="password"
                        name="password"
                        placeholder="password"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                    </div>
                    <div className="form-control mt-6 text-center w-full">
                         <Button size="lg" color="gray" fullWidth>
                            <input className="w-full" type="submit" value="continue" />
                        </Button> 
                        {/* {errorMessage && (
                         <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
                        )}  */}
                     </div>
                    <div>New to here? Creat an <Link to='/signup' className="font-medium">Account</Link> OR</div>
                    </form>
                   <GoogleLogin></GoogleLogin>
                     
                    
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;