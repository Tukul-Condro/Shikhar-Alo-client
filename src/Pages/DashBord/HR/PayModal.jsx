import { Card, Button, Input, Select, Option } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";



const PayModal = () => {
    const { control, handleSubmit } = useForm({
    
  });

  
    return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <Card className="p-6 w-96">
        <h3 className="text-lg font-bold mb-4">Edit Work</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Controller
            name="task"
            control={control}
            render={({ field }) => (
              <Select {...field} label="Task">
                <Option value="Sales">Sales</Option>
              </Select>
            )}
          />
          <Controller
            name="workHour"
            control={control}
            render={({ field }) => <Input type="number" {...field} label="Hours Worked" />}
          />
          <div className="flex justify-end gap-3">
            <Button color="red" type="button">Close</Button>
            <Button color="green" type="submit" >Update</Button>
          </div>
        </form>
      </Card>
    </div>
    );
};

export default PayModal;