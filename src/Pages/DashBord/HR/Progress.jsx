import { Spinner, Typography } from '@material-tailwind/react';
import useWorks from '../../../Hooks/useWorks';
import useUsers from '../../../Hooks/useUsers';
import { useMemo, useState } from "react";


const TABLE_HEAD = ["Sl No","Name","Email","Task","Bank-Ac/No","Salary",]

const Progress = () => {

    const {users , loading} = useUsers();
    const [allWork] = useWorks(true);

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [selectedMonth, setSelectedMonth] = useState(currentMonth.toString(),currentYear);const [selectedYear, setSelectedYear] = useState(currentYear.toString());

    const userMap = useMemo(() => {

            const map = {};

            users.forEach(user => {
              map[user.email] = user;
            });

            return map;

    }, [users]);

    const filteredWorks = useMemo(() => {

        return allWork.filter(work => {

            const workMonth = new Date(work.date).getMonth() + 1;
            const workYear = new Date(work.date).getFullYear();

            const matchEmployee = selectedEmployee
            ? work.email === selectedEmployee
            : true;

            const matchMonth = selectedMonth
            ?  workMonth === Number(selectedMonth)
            : true;

            const matchYear = selectedYear
            ? workYear === Number(selectedYear)
            : true;

            return matchEmployee && matchMonth && matchYear;

        });


    }, [allWork, selectedEmployee, selectedMonth, selectedYear]);

        if(loading){
            return <div className='text-center '>
                <Spinner></Spinner>
            </div>
        }
        
    return (
        <div className="w-full overflow-hidden px-5 ">
            <Typography variant='h2' className='text-center font-medium mt-5'>Employee's All Works is {allWork.length}</Typography>

            <div className="flex gap-5 mt-5">
                <select
                className="border p-3 rounded"
                value={selectedEmployee}
                onChange={(e)=>setSelectedEmployee(e.target.value)}
                >
                <option value="">All Employees</option>
                {
                users.map(user=>(
                <option key={user._id} value={user.email}>
                {user.name}
                </option>
                ))
                }
                </select>

                <select
                className="border p-3 rounded "
                value={selectedMonth}
                onChange={(e)=>setSelectedMonth(e.target.value)}
                >
                    <option value="">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

                <select
                className="border p-3 rounded"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                >
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                </select>

            </div>
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
                  {filteredWorks.map((w, idx) => {

                      const matchedUser = userMap[w.email];

                      return(
                        <tr key={w._id} className="border-b text-center font-medium">
                        <th>{idx + 1}</th>
                        <td className="p-2">{matchedUser?.name || "Unknown"}</td>
                        <td className="p-2">{w.email}</td>
                        <td className="p-2">{w.task}</td>
                        <td>{matchedUser?.account_no || "N/A"}</td>
                        <td>{matchedUser?.salary || "N/A"}</td>
                        </tr>
                      )

                    })
                  }                       
                </tbody>
            </table>
        </div>
    );
};

export default Progress;