// import { Button, Card, Input, Option, Select, Typography } from '@material-tailwind/react';
// import { Controller, useForm} from 'react-hook-form';

// const AddWorkForm = ({onSubmit}) => {

//     const {control,handleSubmit,register,reset} = useForm();

//     const submitHandler = (data) =>{

//         console.log("Child Data:", data);

//          if (onSubmit) {
//         onSubmit(data);
//     }
//         reset()
//     }

//     return (
//         <div>
//             <Card color="transparent" shadow={false}>
//                 <Typography variant="h4" color="blue-gray">
//                     Employee
//                 </Typography>
//                 <Typography color="gray" className="mt-1 font-normal">
//                     Nice to meet you! Enter your details
//                 </Typography>
//                 <form onSubmit={handleSubmit(submitHandler)} className="mt-8 mb-2 w-full  item-center">
//                     <div className="mb-1 flex gap-6">
//                     <Typography variant="h6" color="blue-gray" className="-mb-3">
//                         Tasks
//                     </Typography>
//                     <Controller
//                             name="task"
//                             control={control}
//                             // rules={{required:"role is required"}}
//                             render={({field}) =>(
//                                 <>
//                                     <Select 
//                                         label="Select task"
//                                         value={field.value}
//                                         onChange={(value) => field.onChange(value)}  
//                                     >
//                                         <Option value ="Sales">Sales</Option>
//                                         <Option value ="Support">Support</Option>
//                                         <Option value ="Content">Content</Option>
//                                         <Option value ="Paper-work">Paper-work</Option>
//                                     </Select>
//                                     {/* {fieldState.error && (
//                                         <p className="text-red-500">
//                                             {fieldState.error.message}
//                                         </p>
//                                     )} */}
//                                 </>
//                             )}
//                         />
//                     <Typography variant="h6" color="blue-gray" className="-mb-3">
//                         Hours Worked
//                     </Typography>
//                     <Input
//                         name="workHour"
//                         type="number"
//                         size="lg"
//                         placeholder="enter time"
//                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                         {...register("workHour",{require:true})}
//                         labelProps={{
//                         className: "before:content-none after:content-none",
//                         }}
//                     />
//                     <Typography variant="h6" color="blue-gray" className="-mb-3">
//                         Date
//                     </Typography>
//                     <Input
//                         name="date"
//                         type="date"
//                         size="lg"
//                         placeholder="********"
//                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                         {...register("date",{require:true})}
//                         labelProps={{
//                         className: "before:content-none after:content-none",
//                         }}
//                     />
//                         {/* <Button type='submit' className="w-2/5" >
//                         Submit
//                         </Button> */}
//                         <Button type="submit" className="w-2/5" onClick={handleSubmit(submitHandler)}> Submit </Button>
//                     </div>
                
                    
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default AddWorkForm;
import { Button, Card, Input, Option, Select, Typography } from '@material-tailwind/react';
import { Controller, useForm } from 'react-hook-form';

const AddWorkForm = ({ onSubmit }) => {

    const { control, handleSubmit, reset } = useForm();

    const submitHandler = (data) => {
        console.log("Child Data:", data);

        if (onSubmit) {
            onSubmit(data);
        }

        reset();
    };

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4">Employee</Typography>

            <form onSubmit={handleSubmit(submitHandler)} className="mt-8 mb-2 w-full">

                <div className="mb-4 flex gap-6">

                    {/* Task */}
                    <Controller
                        name="task"
                        control={control}
                        rules={{ required: "Task is required" }}
                        render={({ field, fieldState }) => (
                            <div className="mb-2">
                            <Select
                                label="Select task"
                                value={field.value || ""}
                                onChange={field.onChange}
                            >
                                <Option value="Sales">Sales</Option>
                                <Option value="Support">Support</Option>
                                <Option value="Content">Content</Option>
                                <Option value="Paper-work">Paper-work</Option>
                            </Select>
                            {/* Error message */}
                            {fieldState.error && (
                                <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                            )}
                            </div>
                        )}
                    />



                    {/* Work Hour */}
                    <Controller
                        
                        name="workHour"
                        control={control}
                        rules={{
                            required: "Hours Worked is required",
                            min: { value: 1, message: "Hours must be at least 1" },
                            max: {value: 10, message: "Hours Can't more than 10" }
                        }}
                        render={({ field, fieldState }) => (
                            <div className="mb-2">
                            <Input
                                type="number"
                                label="Hours Worked"
                                value={field.value || ""}
                                onChange={field.onChange}
                            />
                            {fieldState.error && (
                                <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                            )}
                            </div>
                        )}
                    />

                    

                    {/* Date */}
                    <Controller
                        name="date"
                        control={control}
                        rules={{ required: "Date is required" }}
                        render={({ field, fieldState }) => (
                            <div className="mb-2">
                            <Input
                                type="date"
                                label="Date"
                                value={field.value || ""}
                                onChange={field.onChange}
                            />
                            {fieldState.error && (
                                <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                            )}
                            </div>
                        )}
                    />


                    <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded">
                        Add Work
                    </button>

                </div>

            </form>
        </Card>
    );
};

export default AddWorkForm;
