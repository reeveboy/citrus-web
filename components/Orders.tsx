const Orders = ({ orders }) => {
  const delButton = (
    <button className="px-3 bg-red-500 rounded text-white text-center hover:bg-red-600">
      -
    </button>
  );

  const editButton = (
    <button className="px-3 bg-black rounded text-white text-center hover:bg-opacity-50">
      ...
    </button>
  );

  return (
    <table className="w-full border table-fixed rounded-lg shadow-lg bg-white mt-4">
      <thead>
        <tr>
          <th className="w-1/12 border   px-4 py-2" />
          <th className="w-1/12 border  px-4 py-2">#</th>
          <th className="w-2/5 border  px-4 py-2">Name</th>
          <th className="w-1/12 border  px-4 py-2">Qty</th>
          <th className="w-1/12 border  px-4 py-2">Rate</th>
          <th className="w-1/4 border  px-4 py-2">Total</th>
          <th className="w-1/12 border  px-4 py-2" />
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <tr className="text-center" key={idx}>
            <td className="border px-4 py-2 flex justify-center">
              {delButton}
            </td>
            <td className="border px-4 py-2">{++idx}</td>
            <td className="border px-4 py-2 truncate">{order.itemName}</td>
            <td className="border px-4 py-2">{order.quantity}</td>
            <td className="border px-4 py-2">{order.itemRate}</td>
            <td className="border px-4 py-2">
              <span>&#8377;</span>
              {order.total}
            </td>
            <td className="border px-4 py-2 flex justify-center">
              {editButton}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
