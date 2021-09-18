import BillCard from "./BillCard";
import DelOrderButton from "./DelOrderButton";
import EditOrderButton from "./EditOrderButton";

const Orders = ({ orders, bill_id }) => {
  return (
    <table className="w-full border table-fixed rounded-lg bg-white mt-4">
      <thead>
        <tr>
          <th className="w-1/12 border text-center  py-2" />
          <th className="w-1/12 border text-center py-2">#</th>
          <th className="w-2/5 border text-center py-2">Name</th>
          <th className="w-1/12 border text-center py-2">Qty</th>
          <th className="w-1/12 border text-center py-2">Rate</th>
          <th className="w-1/4 border text-center py-2">Total</th>
          <th className="w-1/12 border text-center py-2" />
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <tr className="text-center" key={idx}>
            <td className="border py-2 ">
              <DelOrderButton item_id={order.item_id} bill_id={bill_id} />
            </td>
            <td className="border py-2">{++idx}</td>
            <td className="border py-2 truncate">{order.itemName}</td>
            <td className="border py-2">{order.quantity}</td>
            <td className="border py-2">{order.itemRate}</td>
            <td className="border py-2">
              <span>&#8377;</span>
              {order.total}
            </td>
            <td className="border py-2 ">
              <EditOrderButton bill_id={bill_id} order={order} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
