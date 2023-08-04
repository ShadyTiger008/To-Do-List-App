import React from "react";
import { DeleteButton, EditButton } from "../Icons";

const TodoList = ({
  theme,
  listItems,
  searchInput,
  searchItems,
  deleteItem,
  editItem,
}) => {
  return (
    <section
      className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5 pb-20 w-full justify-center ${
        // Conditional styling for small screens (width < 640px)
        // Adding "flex" and "justify-center" classes to center the content horizontally
        theme === "sm" ? "flex justify-center" : ""
      }`}
    >
      {searchInput ? (
        // Render the searched items when searchInput is not empty
        searchItems.length > 0 ? (
          searchItems.map((curElem) => {
            const { id, title } = curElem;
            return (
              <div
                key={id}
                className={`border-2 p-5 rounded-xl justify-center w-full ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <div className="flex flex-row">
                  <h1 className="grow">{title}</h1>
                  <div className="flex flex-col space-y-5">
                    <button
                      onClick={() => {
                        deleteItem(id);
                      }}
                      className="bg-red-600 text-white px-2 py-1 rounded-md"
                    >
                      <DeleteButton
                        fill={theme === "dark" ? "white" : "black"}
                      />
                    </button>
                    <button
                      onClick={() => {
                        editItem(id);
                      }}
                      className="bg-green-500 text-white px-2 py-1 rounded-md"
                    >
                      <EditButton fill={theme === "dark" ? "white" : "black"} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center col-span-6 font-semibold text-xl items-center w-full">
            There are no items with this name found!
          </div>
        )
      ) : (
        // Render all data from local storage when searchInput is empty
        listItems.map((curElem) => {
          const { id, title } = curElem;
          return (
            <div
              key={id}
              className={`border-2 p-5 w-11/12 sm:w-96 rounded-xl justify-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <div className="flex flex-row">
                <h1 className="grow">{title}</h1>
                <div className="flex flex-col space-y-5">
                  <button
                    onClick={() => {
                      deleteItem(id);
                    }}
                    className="bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    <DeleteButton fill={theme === "dark" ? "white" : "black"} />
                  </button>
                  <button
                    onClick={() => {
                      editItem(id);
                    }}
                    className="bg-green-500 text-white px-2 py-1 rounded-md"
                  >
                    <EditButton fill={theme === "dark" ? "white" : "black"} />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default TodoList;
