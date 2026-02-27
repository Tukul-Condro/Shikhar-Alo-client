import { Card, Input, Option, Select, Typography } from '@material-tailwind/react';
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
            <Typography variant="h2">Submit your work here</Typography>

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


                    <button type="submit" className="bg-gray-600 text-white hover:bg-gray-800 px-4 py-2 rounded">
                        Add Work
                    </button>

                </div>

            </form>
        </Card>
    );
};

export default AddWorkForm;
