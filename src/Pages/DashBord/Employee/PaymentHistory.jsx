import { Typography } from "@material-tailwind/react";
import usePayment from "../../../Hooks/usePayment";
import useAuth from "../../../Hooks/useAuth";

const TABLE_HEAD = ["Month", "Amount", "Status","Transaction Id",];

export default function PaymentHistroy() {

  const {user} = useAuth();
  console.log("User:", user);
  const [payRoll] = usePayment(user?.email);
  console.log("User UID:", user?.email);
  console.log("Payroll:", payRoll);

  return (
    <div className="w-full overflow-hidden px-5 " >
        <Typography className="m-10 text-center text-gray-700" variant="h2">All Payment History</Typography>
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
          {payRoll.map((payment, index) => {
            return (
              <tr
                key={payment._id || index}
                className=" border-b font-medium even:bg-surface-light dark:even:bg-surface-dark"
              >
                <td className="p-3">{payment?.month} {payment?.year}</td>
                <td className="p-3">{payment?.salary} BDT</td>
                <td className="p-3">{payment?.status}</td>
                <td className="p-3">{payment?.transactionId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
