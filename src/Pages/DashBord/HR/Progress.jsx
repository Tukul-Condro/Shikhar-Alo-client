import { Spinner, Typography } from '@material-tailwind/react';
import useWorks from '../../../Hooks/useWorks';
import useUsers from '../../../Hooks/useUsers';
import { useMemo } from "react";

const TABLE_HEAD = ["Sl No","Name","Email","Task","Bank-Ac/No","Salary",]

const Progress = () => {

    const {users , loading} = useUsers();
    const [allWork] = useWorks(true);

    const userMap = useMemo(() => {

            const map = {};

            users.forEach(user => {
              map[user.email] = user;
            });

            return map;

    }, [users]);

        if(loading){
            return <div className='text-center '>
                <Spinner></Spinner>
            </div>
        }
        
    return (
        <div className="w-full overflow-hidden px-5 ">
            <Typography variant='h2' className='text-center font-medium mt-5'>Employee's All Works is {allWork.length}</Typography>
            
            <table className="w-full mt-8 text-center">
                <thead className="w-full min-w-max table-auto text-left">
                    <tr className="text-center">
                        {TABLE_HEAD.map((head) => (
                           <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                             <Typography
                                 className="leading-none text-gray-700 font-medium text-2xl "
                             >
                                 {head}
                             </Typography>
                           </th>
                         ))}
                       </tr>
                     </thead>
                <tbody className="group text-sm text-gray-700 dark:text-white">
                       {/* {allWork.map((w, index) => {
                         return (
                           <tr
                             key={w._id}
                             className=" border-b font-medium even:bg-surface-light dark:even:bg-surface-dark"
                           >
                             <td className="p-3">{w.name}</td>
                             <td className="p-3">{w.email}</td>
                             <td className="p-3">{w.account_no}</td>
                             <td className="p-3">{w.salary}</td>
                             <td className="p-3"> 
                             </td>                         
                           </tr>
                         );
                       })} */}

                    {allWork.map((w, idx) => {

                      const matchedUser = userMap[w.email];

                      return(
                        <tr key={w._id} className="border-b text-center font-medium">
                        <th>{idx + 1}</th>
                        <td className="p-2">{w.name}</td>
                        <td className="p-2">{w.email}</td>
                        <td className="p-2">{w.task}</td>
                        <td>{matchedUser?.account_no || "N/A"}</td>
                        <td>{matchedUser?.salary || "N/A"}</td>
                        </tr>
                      )

                    })}                       
                </tbody>
            </table>
        </div>
    );
};

export default Progress;