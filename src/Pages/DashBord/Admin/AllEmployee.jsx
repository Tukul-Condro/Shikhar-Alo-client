import { Button, Spinner, Typography } from '@material-tailwind/react';
import useUsers from '../../../Hooks/useUsers';

const TABLE_HEAD = ["Name", "Designation","",""];

const AllEmployee = () => {

    const {users , loading} = useUsers();
    if(loading){
        return <div className='text-center'>
            <Spinner></Spinner>
        </div>
    }

    return (
        <div className="w-full overflow-hidden px-5 mt-5">
            <Typography variant='h2' className='text-center font-medium text-gray-700'>ALL Employee</Typography>
            <Typography variant='h4' className='text-center font-medium text-gray-700'>Total Employee are : {users.length}</Typography>
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
                   {users.map(({ name, designation }, index) => {
                     return (
                       <tr
                         key={index}
                         className=" border-b font-medium even:bg-surface-light dark:even:bg-surface-dark"
                       >
                         <td className="p-3">{name}</td>
                         <td className="p-3">{designation}</td>
                         <td className='space-x-5'>
                            <Button className="text-green-400 h-9 text-center " >Make HR</Button>
                            <Button className="text-red-500 h-9 text-center" > FIRE</Button>
                         </td>
                                                 
                       </tr>
                     );
                   })}
                 </tbody>
               </table>   
        </div>
    );
};

export default AllEmployee;