import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Month", "Amount", "Transaction Id"];

const TABLE_ROWS = [
  {
    monthYear: "April-2018",
    amount: 1250,
    transactionId: "TXN1001",
  },
  {
    monthYear: "March-2018",
    amount: 980,
    transactionId: "TXN1002",
  },
  {
    monthYear: "September-2017",
    amount: 2100,
    transactionId: "TXN1003",
  },
  {
    monthYear: "December-2008",
    amount: 450,
    transactionId: "TXN1004",
  },
  {
    monthYear: "October-2021",
    amount: 1750,
    transactionId: "TXN1005",
  },
];

export default function PaymentHistroy() {
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
          {TABLE_ROWS.map(({ monthYear, amount, transactionId }, index) => {
            return (
              <tr
                key={index}
                className=" border-b font-medium even:bg-surface-light dark:even:bg-surface-dark"
              >
                <td className="p-3">{monthYear}</td>
                <td className="p-3">{amount} BDT</td>
                <td className="p-3">{transactionId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
