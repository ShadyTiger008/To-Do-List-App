import React from "react";

const InputData = ({ theme, addItem, AddButton, inputData, setInputData }) => {
  return (
    <section
      className={`flex flex-row border-2 rounded-xl dark:bg-slate-600 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <button
        onClick={addItem}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-95`}
      >
        <AddButton fill={theme === "dark" ? "white" : "black"} />
      </button>
      <input
        type="text"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        placeholder="Add a Task"
        className={`outline-none w-full px-3 rounded-xl ${
          theme === "dark" ? "bg-slate-600" : "bg-gray-100"
        } ${theme === "dark" ? "text-white" : "text-black"} `}
      />
    </section>
  );
};

export default InputData;
