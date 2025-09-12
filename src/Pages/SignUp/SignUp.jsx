import {Card,Input,Button,CardBody,CardHeader,Typography,} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
    const  { register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = data => {
        // console.log(data);
    }
   
    return (
        <div>
            <Card shadow={false} className="mx-auto my-15 lg:w-2xl md:px-24 md:py-14 py-8 border border-gray-300">
                <CardHeader shadow={false} floated={false} className="text-center">
                    <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:text-4xl"
                    >
                    SingUP 
                    </Typography>
                    <Typography className="text-center !text-gray-600 text-[18px] font-normal">
                    Enjoy quick and secure access to your accounts on various SHIKHAR ALO
                    platforms.
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}
                    action="#"
                    className="flex flex-col gap-4 md:mt-8"
                    >
                    <div>
                        <label htmlFor="text">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium mb-2"
                        >
                            Name
                        </Typography>
                        </label>
                        <Input {...register("name",{ })}
                        id="name"
                        color="gray"
                        size="lg"
                        type="text"
                        name="Name"
                        placeholder="Enter your name"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="link">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium mb-2"
                        >
                            Photo URL
                        </Typography>
                        </label>
                        <Input
                        id="link"
                        color="gray"
                        size="lg"
                        type="link"
                        name="link"
                        placeholder="image link"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
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
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
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
                        {...register("password",
                            { required: true,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/ ,
                                minLength: 6,
                                maxLength: 20 })} name='password' placeholder="password" 
                        id="password"
                        color="gray"
                        size="lg"
                        type="password"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 input input-bordered"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <Button type="submit" size="lg" color="gray" fullWidth>
                        continue
                    </Button>

                        <div>Already have an Account? Please <Link className="font-medium" to='/login'>Login</Link> OR </div>

                     
                    </form>
                     <Button
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
                   
                </CardBody>
            </Card>
        </div>
    );
};

export default SignUp;