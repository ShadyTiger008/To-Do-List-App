import React from "react";
import { DeleteButton, EditButton } from "../Icons";

const TodoList = ({ theme, listItems, searchInput, searchItems, deleteItem, editItem }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5 pb-20">
      {searchInput ? (
        // Render the searched items when searchInput is not empty
        searchItems.length > 0 ? (
          searchItems.map((curElem) => {
            const { id, title } = curElem;
            return (
              <div
                key={id}
                className={`border-2 p-5 w-96 rounded-xl ${
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
          <div className="text-center col-span-6 font-semibold text-xl items-center">
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
              className={`border-2 p-5 w-96 rounded-xl ${
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
