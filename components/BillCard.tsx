import Link from "next/link";
import withApollo from "../lib/withApollo";

const BillCard = ({ bill }) => {
  const time = new Date(parseInt(bill.createdAt, 10))
    .toTimeString()
    .substring(0, 5);

  if (!bill) {
    return <div>Bill not found</div>;
  }
  return (
    <Link
      href={`/dashboard/bill/[id]?id=${bill.bill_id}`}
      as={`/dashboard/bill/${bill.bill_id}`}>
      <div className="p-2 shadow-md border h-28 w-52 rounded-lg relative flex flex-col justify-center items-center">
        <span className=" block text-xl font-semibold">
          Table No: {bill.table_no}
        </span>
        <span className="absolute top-0 right-1 text-xs">{time}</span>
        <span>Net Amount: ${bill.netAmount}</span>
      </div>
    </Link>
  );
};

export default BillCard;
