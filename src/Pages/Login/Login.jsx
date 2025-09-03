import {Card,Input,Button,CardBody,CardHeader,Typography,} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
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
                    <form
                    action="#"
                    className="flex flex-col gap-4 md:mt-8"
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
                    <Button size="lg" color="gray" fullWidth>
                        continue
                    </Button>
                    <div>New to here? Creat an <Link to='/signup' className="font-medium">Account</Link> OR</div>
                    <Button
                        variant="outlined"
                        size="lg"
                        className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                        src={`https://www.material-tailwind.com/logos/logo-google.png`}
                        alt="google"
                        className="h-6 w-6"
                        />{" "}
                        sign in with google
                    </Button>
                    </form>
                     
                    
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;