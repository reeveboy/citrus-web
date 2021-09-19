import React from "react";

const Items = ({ items }) => {
  return (
    <div>
      <table className="w-full border table-fixed rounded-lg bg-white mt-4">
        <thead className="text-lg">
          <tr>
            <td className="w-1/12 border text-center  py-2" />
            <td className="w-1/12 border text-center py-2">#</td>
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
                <button className="rounded text-black text-center transform transition duration-150 ease-in hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="25"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </td>
              <td className="border py-2">{item.item_id}</td>
              <td className="border py-2 truncate">{item.name}</td>
              <td className="border py-2">
                <span>&#8377;</span>
                {item.rate}
              </td>
              <td className="border py-2">{item.category}</td>
              <td className="border py-2 ">
                <button className="rounded text-black text-center transform transition duration-150 ease-in hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="25"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
