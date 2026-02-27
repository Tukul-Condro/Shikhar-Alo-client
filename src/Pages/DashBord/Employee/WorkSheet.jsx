import { Button, Card, Typography } from "@material-tailwind/react";
import useWorks from "../../../Hooks/useWorks";

const TABLE_HEAD = ["SL-No.","Job", "WorkTime", "WorkingDay", "", "" ];
 
const WorkSheet = ({ onEdit,onDelete}) => {

    const [work] = useWorks();
    const sortedWork = [...work].sort((a, b) => new Date(b.date) - new Date(a.date));
 
    return (
        <div>
            <Card className="h-full w-full ">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr className="text-center ">
                        {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                            <Typography
                            className="leading-none text-gray-700 font-medium text-2xl "
                            >
                            {head}
                            </Typography>
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {sortedWork.length === 0 && (
                        <tr>
                        <td colSpan="4" className="text-center p-2 text-gray-500">
                            No work added yet
                        </td>
                        </tr>
                    )}
                    {sortedWork.map((w, idx) => (
                        <tr key={w._id} className="border-b text-center font-medium">
                            <th>{idx + 1}</th>
                        <td className="p-2">{w.task}</td>
                        <td className="p-2">{w.workHour} Hour</td>
                        <td className="p-2">{w.date}</td>
                        <td className='space-x-5'>
                            <Button className="text-green-400 h-9 text-center hover:bg-green-500 hover:text-white" onClick={() => onEdit(w)}>🖊</Button>
                            <Button className="text-red-500 hover:bg-orange-400 h-9 text-center" onClick={() => onDelete(w._id)}>❌</Button>
                            </td>
                        </tr>
                    ))}
                   
                    </tbody>
                </table>
            </Card>
        </div>
        
    );
};

export default WorkSheet;