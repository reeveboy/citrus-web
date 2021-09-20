import React from "react";
import DelItemButton from "./DelItemButton";
import EditItemButton from "./EditItemButton";

const Items = ({ items, categories }) => {
  return (
    <div>
      <table className="w-full border table-fixed rounded-lg bg-white mt-4">
        <thead className="text-lg">
          <tr>
            <td className="w-1/12 border text-center  py-2" />
            <td className="w-1/12 border text-center py-2">Id</td>
            <td className="w-2/5 border text-center py-2">Name</td>
            <td className="w-1/6 border text-center py-2">Rate</td>
            <td className="w-1/4 border text-center py-2">Category</td>
            <td className="w-1/12 border text-center py-2" />
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr className="text-center" key={idx}>
              <td className="border py-2 ">
                <DelItemButton item_id={item.item_id} />
              </td>
              <td className="border py-2">{item.item_id}</td>
              <td className="border py-2 truncate">{item.name}</td>
              <td className="border py-2">
                <span>&#8377;</span>
                {item.rate}
              </td>
              <td className="border py-2">{item.category_name}</td>
              <td className="border py-2 ">
                <EditItemButton item={item} categories={categories} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
