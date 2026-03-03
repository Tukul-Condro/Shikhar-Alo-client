
import {Card,CardHeader,CardBody,Typography,Avatar, Spinner} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


function StarIcon() {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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

    //  Fetch Salary History
    // const { data: salaryHistory = [] } = useQuery({
    //     queryKey: ["salaryHistory", id],
    //     queryFn: async () => {
    //     const res = await axiosSecure.get(`/salary-history/${id}`);
    //     return res.data;
    //     },
    // });

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