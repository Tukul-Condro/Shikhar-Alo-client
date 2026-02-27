import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useWorks = () => {
    //  tan stack query
    const axiosSecure = useAxiosSecure();
    const{ user} = useAuth();
    const {refetch , data: work=[]} = useQuery({
        queryKey:['work', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/works?email=${user.email}`);
            return res.data
        }
    });
    console.log('data',work);

    return [work, refetch]
};

export default useWorks;