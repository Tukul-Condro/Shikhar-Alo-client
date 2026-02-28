import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useWorks = ( all = false) => {
    //  tan stack query
    const axiosSecure = useAxiosSecure();
    const{ user} = useAuth();
    const {refetch , data: work=[]} = useQuery({
        
        // query key different for cache
        queryKey:all
        ?['allWork']
        :['work', user?.email],

        queryFn: async () => {
            // get all users work
            if(all){
                const res = await axiosSecure.get('/works');
                return res.data
            }
            // employee own work
            const res = await axiosSecure.get(`/works?email=${user.email}`);
            return res.data
        },
        enabled : all || !user?.email
    });
    console.log('data',work);

    return [work, refetch]
};

export default useWorks;