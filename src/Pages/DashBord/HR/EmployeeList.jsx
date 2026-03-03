import { Button, Spinner, Typography } from '@material-tailwind/react';
import useUsers from '../../../Hooks/useUsers';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import {NavLink}  from 'react-router-dom';


const TABLE_HEAD = ["Name","Email","Bank-Account","Salary","Verfied","",""]

const EmployeeList = ({onPayEdit}) => {

    const axiosSecure = useAxiosSecure();
    const {users , loading, refetch} = useUsers();

    if(loading){
        return <div className='text-center '>
            <Spinner></Spinner>
        </div>
    }
  //  Toggle Verify
  const handleVerify = async (user) => {

    try {
      const res = await axiosSecure.patch(`/users/${user._id}/verify`);

      if (res.data.modifiedCount > 0) {
        
        Swal.fire(
          "Updated!",
          `Employee is now ${res.data.isVerified ? "Verified ✅" : "Unverified ❌"}`,
          "success"
        );
        refetch(); // reload data
      }
      console.log(res)
    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "Verification failed", "error");
    }
  };

    return (
        <div className="w-full overflow-hidden px-5 mt-5">
            <Typography variant='h2' className='text-center font-medium'>
                All Employee is here - {users.length}
            </Typography>
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
                    {users.map((user) => {
                     const {_id,name, email,account_no,salary, isVerified = false} = user;
                    return (
                <tr key={_id} className="border-b font-medium even:bg-surface-light dark:even:bg-surface-dark">

                    <td className="p-3">{name}</td>
                    <td className="p-3">{email}</td>
                    <td className="p-3">{account_no}</td>
                    <td className="p-3">{salary}</td> 
                    <td className="p-3">
                    <Button
                        size="sm"
                        onClick={() => handleVerify(user)}
                        className={
                        isVerified
                            ? "bg-green-500"
                            : "bg-red-500"
                        }
                    >
                        {isVerified ? "✅" : "❌"}
                    </Button>
                    </td>                        
                       
                    <td className="p-3">
                        <Button
                        size="sm"
                        disabled={!isVerified}
                        onClick={() => onPayEdit(user)}
                        className={
                        isVerified
                            ? "bg-green-500"
                            : "bg-gray-400 cursor-not-allowed"
                        }
                    >
                        Pay
                    </Button>
                    <NavLink  className='ml-5 bg-pink-400 p-2 rounded-xl text-white' size='sm'
                    to={`/dashbord/employee-details/${_id}`}
                    > Details</NavLink>
                    </td>
                </tr> 
                );
          })}
                </tbody>
            </table>           
        </div>
    );
};

export default EmployeeList;