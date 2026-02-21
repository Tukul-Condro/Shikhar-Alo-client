
import { Card, Button, Input, Select, Option } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";

const EditWorkModal = ({ work, onUpdate, onClose }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { task: work.task, workHour: work.workHour, date: work.date },
  });

  const submitHandler = (data) => {
    onUpdate({ ...work, ...data });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <Card className="p-6 w-96">
        <h3 className="text-lg font-bold mb-4">Edit Work</h3>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
          <Controller
            name="task"
            control={control}
            render={({ field }) => (
              <Select {...field} label="Task">
                <Option value="Sales">Sales</Option>
                <Option value="Support">Support</Option>
                <Option value="Content">Content</Option>
                <Option value="Paper-work">Paper-work</Option>
              </Select>
            )}
          />
          <Controller
            name="workHour"
            control={control}
            render={({ field }) => <Input type="number" {...field} label="Hours Worked" />}
          />
          <Controller
            name="date"
            control={control}
            render={({ field }) => <Input type="date" {...field} />}
          />
          <div className="flex justify-end gap-3">
            <Button color="red" type="button" onClick={onClose}>Close</Button>
            <Button color="green" type="submit" >Update</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EditWorkModal;