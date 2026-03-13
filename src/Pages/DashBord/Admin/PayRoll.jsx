// import { useMemo } from 'react';
import usePayment from '../../../Hooks/usePayment';
import { Spinner, Typography } from '@material-tailwind/react';
// import useUsers from '../../../Hooks/useUsers';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TABLE_HEAD = ["SL.NO","Name","Salary","Payment-Month","Payment-Data","",""]

const PayRoll = () => {
    // const {users, loading} = useUsers();
    const axiosSecure = useAxiosSecure();
    const [allPayRoll, refetch,loading] = usePayment(true);

    // const userMap = useMemo(() => {
    //     const map = {};
    //     users.forEach(user =>{
    //        map[user.email] = user;
    //     })
    //     return map
    
    // },[users])

    if(loading){
            return <div className='text-center '>
                <Spinner></Spinner>
            </div>
        }

    const handlePay = async (id) =>{
        try{
            const res = await axiosSecure.patch(`/payroll/pay/${id}`);
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Salary Paid!",
                    icon: "success"
                });
                refetch();
            }
        } catch (err) {
         console.log(err);
        }
    }

    const handleSalary = async(payroll) =>{

        const { value: salary } = await Swal.fire({
            title: `Adjust Salary for ${payroll.month} ${payroll.year} of ${payroll.name}`,
            input: "number",
            inputLabel: `Current Salary: ${payroll.salary}`,
            showCancelButton: true
        });

        if(!salary) return;

        if (Number(salary) <= payroll.salary) {
            Swal.fire({
            icon: "error",
            title: "Salary must be greater than current salary"
            });
            return;
        }
        const res = await axiosSecure.patch(`/payroll/salary/${payroll._id}`,
            { salary: Number(salary)});

          if (res.data.success) {
              Swal.fire({
                  icon: "success",
                  title: "Salary Increased Successfully"
                });
            refetch();
        }
    }
    return (
        <div>
            <Typography variant='h2' className='text-center font-medium mt-5'>Employee's All Works is {allPayRoll.length}</Typography>
            
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
                  {allPayRoll.map((p, idx) => {
                        // const matchedUser = userMap[p.email];
                        return(
                        <tr key={p._id} className="border-b font-medium even:bg-surface-light dark:even:bg-surface-dark">
                        <th>{idx + 1}</th>
                        <td className="p-2">{p.name}</td>
                        <td className="p-2">{p.salary}</td>
                        <td className="p-2">{p.month}{p.year}</td>
                        <td>{p.date ? new Date(p.date).toLocaleDateString() : "N/A"}</td>
                        <td>
                            <button 
                            onClick={() => handlePay(p._id)}
                            disabled={p.status === "paid"}
                            className={`px-3 py-1 rounded ${
                                p.status === "paid" ? "bg-gray-400" : "bg-green-400"
                                }`}
                            >
                              {p.status === "paid" ? "Paid" : "Pay"}
                            </button>
                        </td>
                        <td>
                            <button
                            onClick={() => handleSalary(p)}
                            disabled={p.status === "paid"}
                            className={`px-3 py-1 rounded ${
                                p.status === "paid" ? "bg-gray-400" : "bg-green-400"
                                }`}
                            >
                                {p.status === "paid" ? "Adjusted" : "Adjust"}
                            </button>
                        </td>
                        </tr>
                      )

                    })
                  }                       
                </tbody>
            </table>            
        </div>
    );
};

export default PayRoll;