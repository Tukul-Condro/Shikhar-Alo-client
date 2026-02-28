import { Typography } from '@material-tailwind/react';
import React from 'react';
import useWorks from '../../../Hooks/useWorks';

const TABLE_HEAD = ["Name","Email","Bank-Account","Salary","Verfied","",""]

const Progress = () => {
    const [allWork] = useWorks(true);
    return (
        <div>
            <Typography variant='h2' className='text-center font-medium'>Employee's All Works is {allWork.length}</Typography>
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
                       {allWork.map(({ name,email, account_no,salary}, index) => {
                         return (
                           <tr
                             key={index}
                             className=" border-b font-medium even:bg-surface-light dark:even:bg-surface-dark"
                           >
                             <td className="p-3">{name}</td>
                             <td className="p-3">{email}</td>
                             <td className="p-3">{account_no}</td>
                             <td className="p-3">{salary}</td>
                             <td className="p-3"> 
                             </td>                         
                           </tr>
                         );
                       })}
                </tbody>
            </table>
        </div>
    );
};

export default Progress;