import { Card, Button, Input } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PayModal = ({ payReq, onClose }) => {

  const axiosSecure = useAxiosSecure();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      salary: payReq?.salary || "",
      month: "",
      year: ""
    }
  });

  const onSubmit = async (data) => {

    const payrollData = {
      employeeId: payReq._id,
      name: payReq.name,
      email: payReq.email,
      salary: payReq.salary,
      month: data.month,
      year: data.year,
      status: "Pending",
      createdAt: new Date()
    };
    
    try {
      const res = await axiosSecure.post("/payroll", payrollData);

      if (res.data.insertedId) {
        Swal.fire("Success!", "Payment Request Sent to Admin", "success");
        onClose();
      }

    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <Card className="p-6 w-96">

        <h3 className="text-lg font-bold mb-4">
          Pay {payReq?.name}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* Salary (Read Only) */}
          <Controller
            name="salary"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Salary" readOnly />
            )}
          />

          {/* Month */}
          <Controller
            name="month"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} label="Month (e.g. January)" />
            )}
          />

          {/* Year */}
          <Controller
            name="year"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input type="number" {...field} label="Year" />
            )}
          />

          <div className="flex justify-end gap-3">
            <Button color="red" type="button" onClick={onClose}>
              Close
            </Button>

            <Button color="green" type="submit">
              Submit
            </Button>
          </div>

        </form>
      </Card>

    </div>
  );
};

export default PayModal;