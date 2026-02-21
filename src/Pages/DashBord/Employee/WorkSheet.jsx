import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Job", "WorkTime", "WorkingDay", "", "" ];
 
 
const WorkSheet = ({works = [], onEdit, onDelete}) => {
    
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
                    {works.length === 0 && (
                        <tr>
                        <td colSpan="4" className="text-center p-2 text-gray-500">
                            No work added yet
                        </td>
                        </tr>
                    )}
                    {works.map((w, idx) => (
                        <tr key={idx} className="border-b text-center font-medium">
                        <td className="p-2">{w.task}</td>
                        <td className="p-2">{w.workHour} Hour</td>
                        <td className="p-2">{w.date}</td>
                        <td className='space-x-5'>
                            <Button className="text-green-400 h-9 text-center " onClick={() => onEdit(w)}>Edit</Button>
                            <Button className="text-red-500 h-9 text-center" onClick={() => onDelete(w.id)}> Delete</Button>
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