import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Employee = () => {
    return (
        <div className=' gap-1 rounded-full mx-10 mt-7'>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Employee
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details
                </Typography>
                <form className="mt-8 mb-2 w-full  item-center">
                    <div className="mb-1 flex gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Tasks
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Hours Worked
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Date
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                        <Button className="w-2/5" >
                        Submit
                        </Button>
                    </div>
                    
                    
                </form>
            </Card>
        </div>
    );
};

export default Employee;