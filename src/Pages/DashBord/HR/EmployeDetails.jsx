
import {Card,CardHeader,CardBody,Typography,Avatar, Spinner} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const EmployeDetails = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    //  Fetch Employee Info
    const { data: employee = {}, isLoading } = useQuery({
        queryKey: ["employee", id],
        queryFn: async () => {
        const res = await axiosSecure.get(`/users/${id}`);
        return res.data;
        },
    });

    const { data: payroll = [] } = useQuery({
        queryKey: ["payroll", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payroll/${id}`);
            return res.data;
        },
    });

     if (isLoading) {
        return (
        <div className="text-center mt-10">
            <Spinner />
        </div>
        );
    }
    const { name, photoURL, designation } = employee;

     //  Create Dynamic Chart Data from DB
    const categories = payroll.map(
        (item) => `${item.month} ${item.year}`
    );
     const salaryData = payroll.map((item) => item.salary);

     const chartConfig = {
        type: "bar",
        height: 240,
        series: [
            {
            name: "salary",
            data: salaryData,
            },
        ],
        options: {
            chart: { toolbar: { show: false,},},
            title: {show: "",},
            dataLabels: {enabled: false},
            colors: ["#020617"],
            plotOptions: {bar: {columnWidth: "40%", borderRadius: 2 }},
            xaxis: {
                axisTicks: {show: false},
                axisBorder: {show: false},
                categories: categories,
            },
            grid: {
                borderColor: "#e5e7eb",
                strokeDashArray: 4,
             },
            tooltip: { theme: "dark" },
    },
    };


    return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex items-center gap-6 p-6"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={photoURL}
            alt={name}
          />

          <div>
            <Typography variant="h5">{name}</Typography>
            <Typography color="gray">{designation}</Typography>
          </div>
        </CardHeader>

        <CardBody>
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeDetails;