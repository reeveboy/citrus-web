import Link from "next/link";

const BillCard = ({ bill }) => {
  const time = new Date(parseInt(bill.createdAt, 10))
    .toTimeString()
    .substring(0, 5);

  if (!bill) {
    return <div>Bill not found</div>;
  }

  return (
    <Link href={`/bill/[id]?id=${bill.bill_id}`} as={`/bill/${bill.bill_id}`}>
      <a>
        <div
          className=" border rounded-lg flex flex-col text-black"
          style={{ width: "200px", height: "260px", cursor: "pointer" }}>
          <div className="flex justify-between p-2 rounded-t-lg bg-gray-300">
            <span className="text-xl font-semibold">T - {bill.table_no}</span>
            <span className="text-xl">{time}</span>
          </div>
          <div className="h-full rounded-b-lg flex flex-col bg-gray-50">
            <div className="p-2" style={{ flex: "6" }}>
              {bill.firstThreeOrders.length !== 0 ? (
                <div className="flex flex-col">
                  {bill.firstThreeOrders.map((order) => (
                    <div className="flex justify-between">
                      <span className="font-extralight truncate">
                        {order.itemName}
                      </span>
                      <span className="font-extralight">{order.quantity}</span>
                    </div>
                  ))}
                  <span className="text-lg">. . .</span>
                </div>
              ) : (
                <span className="font-extralight">No orders just yet...</span>
              )}
            </div>
            <span className="text-center" style={{ flex: "1" }}>
              Net Amount: &#8377;{bill.netAmount}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BillCard;
