import {Card,Input,Button,CardBody,CardHeader,Typography, Select, Option,} from "@material-tailwind/react";
import { useContext } from "react";
import { Title } from "react-head";
import { Controller, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ProviderContext/AuthContext";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const  { control, register,handleSubmit,watch,formState: { errors },} = useForm();
    const {creatUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        creatUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            const userInfo ={
                name: data.name,
                email: data.email,
                photo: data.link,
                role: data.role,
                account_no: data.account_no,
                salary: data.salary,
                designation: data.designation,
                createdAt: new Date()
            }
            axiosPublic.post('/users', userInfo )
            .then(res =>{
                if(res.data.insertedId){
                    console.log('user added to the database')
                    Swal.fire({
                        position: "top-end",
                        title: "SignUp Success",
                        icon: "success"
                    });
                    navigate(from , {replace : true});
                }
            })
             
        })
    }
    console.log(watch("example"))
   
    return (
        <div>
            <Title>SignUp - Shikhar Alo</Title>
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
                        <Input {...register("name",{ required:true})}
                        id="name"
                        color="gray"
                        size="lg"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                        {errors.name && <span className="text-red-500">Name field is required</span>}
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
                        <Input {...register("email",{ required:true})}
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
                        {errors.email && <span className="text-red-500">Email field is required</span>}
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
                        <Input type="password"
                        {...register("password",
                            { required: true,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/ ,
                                minLength: 6,
                                maxLength: 20 })}
                         name='password' placeholder="password" 
                        id="password"
                        color="gray"
                        size="lg"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 input input-bordered"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                            {errors.password?.type === "required" && <span className='text-red-600'>password is required</span>}
                            {errors.password?.type === "minLength" && <span className='text-red-600'>minimam 6 character</span>}
                            {errors.password?.type === "maxLength" && <span className='text-red-600'>Maximan 20 characters</span>}
                            {errors.password?.type === "pattern" && <span className='text-red-600'>password must be one uppercase, one lowercase, one digit and one spaceil character</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="role"
                            control={control}
                            // rules={{required:"role is required"}}
                            render={({field}) =>(
                                <>
                                    <Select label="Select Role"{...field}>
                                        <Option>Employee</Option>
                                        <Option>HR</Option>
                                    </Select>
                                    {/* {fieldState.error && (
                                        <p className="text-red-500">
                                            {fieldState.error.message}
                                        </p>
                                    )} */}
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <label htmlFor="account_no">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium mb-2"
                        >
                            Bank Account No
                        </Typography>
                        </label>
                        <Input {...register("account_no",{ required:true})}
                        id="account_no"
                        color="gray"
                        size="lg"
                        type="account_no"
                        name="account_no"
                        placeholder=" input Bank_account_no"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                        {errors.email && <span className="text-red-500">Bank Account field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="salary">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium mb-2"
                        >
                            Salary
                        </Typography>
                        </label>
                        <Input {...register("salary",{ required:true})}
                        id="salary"
                        color="gray"
                        size="lg"
                        type="salary"
                        name="salary"
                        placeholder="inter here salary amount"
                        className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                        />
                        {errors.email && <span className="text-red-500">Salary field is required</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="designation"
                            control={control}
                            // rules={{required:"designation is required"}}
                            render={({field}) =>(
                                <>
                                    <Select label="Select Designation"{...field}>
                                        <Option>Sales Assistant</Option>
                                        <Option>Social Media Executive</Option>
                                        <Option>Digital Marketer</Option>
                                    </Select>
                                    {/* {fieldState.error && (
                                        <p className="text-red-500">
                                            {fieldState.error.message}
                                        </p>
                                    )} */}
                                </>
                            )}
                        />
                    </div>
                    

                    <Button type="submit" size="lg" color="gray" fullWidth>
                        <input type="submit" value="continue" />
                    </Button>

                    <div>Already have an Account? Please <Link className="font-medium" to='/login'>Login</Link> OR </div>

                     <GoogleLogin></GoogleLogin>

                    </form>
                   
                </CardBody>
            </Card>
        </div>
    );
};

export default SignUp;