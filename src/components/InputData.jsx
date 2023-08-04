import React from "react";

const InputData = ({ theme, addItem, AddButton, inputData, setInputData }) => {
  return (
    <section
      className={`flex flex-row border-2 dark:bg-slate-600 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <button
        onClick={addItem}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md`}
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
        className={`outline-none w-full px-3 ${
          theme === "dark" ? "bg-slate-600" : "bg-gray-100"
        } ${theme === "dark" ? "text-white" : "text-black"} `}
      />
    </section>
  );
};

export default InputData;
