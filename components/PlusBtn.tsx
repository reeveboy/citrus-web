import React from "react";

const PlusBtn = () => {
  return (
    <button className="w-10 h-10 bg-emerald rounded-full flex justify-center items-center hover:bg-emeraldDark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-plus text-white"
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </button>
  );
};

export default PlusBtn;
