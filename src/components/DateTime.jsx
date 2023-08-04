import React from "react";

const DateTime = ({ theme, SunIcon, formattedDate, removeAll }) => {
  return (
    <section
      className={`flex flex-col ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-row">
        {theme === "dark" ? <SunIcon fill="white" /> : <SunIcon fill="black" />}
        <h1 className="px-3 flex items-center font-semibold text-xl">My Day</h1>
      </div>
      <div className="flex flex-row">
        <div className="grow font-semibold text-lg text-gray-600">
          {formattedDate}
        </div>
        <div>
          <button
            onClick={removeAll}
            className="bg-red-600 text-white px-4 py-2 rounded-md mb-3 hover:scale-90"
          >
            Remove All
          </button>
        </div>
      </div>
    </section>
  );
};

export default DateTime;
