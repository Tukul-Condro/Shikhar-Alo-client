import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = (email) => {
     console.log("Employee ID:", email)
    const axiosSecure = useAxiosSecure();
    const {refetch, data:payRoll=[]} =useQuery({
        queryKey:['payRoll',email],
        enabled: !!email,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payroll/${email}`);
            return res.data
        }
    })

   

    return [payRoll,refetch]
};

export default usePayment;