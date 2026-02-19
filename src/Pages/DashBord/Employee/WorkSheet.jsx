import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Job", "WorkTime", "WorkingDay", "", "" ];
 
 
const WorkSheet = ({works = []}) => {
    
    return (
        <div>
            <Card className="h-full w-full ">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
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
                        <tr key={idx} className="border-b">
                        <td className="p-2">{w.task}</td>
                        <td className="p-2">{w.workHour}</td>
                        <td className="p-2">{w.date}</td>
                        <td className=''>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                            >
                                Edit
                            </Typography>
                            </td>
                            <td className=''>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                            >
                                Delete
                            </Typography>
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