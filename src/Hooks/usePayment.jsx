import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePayment = ( all = false ) => {

    const {user} = useAuth();
    console.log("Employee ID:", user.email)
    const axiosSecure = useAxiosSecure();

    const {refetch, data:payRoll=[]} =useQuery({

        queryKey: all?['allPayRoll'] : ['payRoll',user?.email],
        enabled: all ? true : !!user?.email,

        queryFn: async () =>{
            // get all payRoll
            if(all){
                const res = await axiosSecure.get('/payroll');
               return res.data;
            }
            // payroll by employee
            const res = await axiosSecure.get(`/payroll/${user?.email}`);
            return res.data
        }
    })
    return [payRoll,refetch]
};

export default usePayment;