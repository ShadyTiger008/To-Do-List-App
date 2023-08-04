import React, { useEffect, useState } from "react";
import { AddButton, DarkMode, LightMode, SearchIcon, SunIcon } from "./Icons";
import TodoList from "./components/TodoList";
import InputData from "./components/InputData";
import DateTime from "./components/DateTime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const getLocalData = () => {
  const lists = localStorage.getItem("task_data");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const getThemeData = () => {
  const applicableTheme = localStorage.getItem("PageTheme");
  if (applicableTheme) {
    return applicableTheme;
  } else {
    return "light";
  }
};

function App() {
  const [inputData, setInputData] = useState("");
  const [listItems, setListItems] = useState(getLocalData());
  const [formattedDate, setFormattedDate] = useState("");
  const [isEdited, setIsEdited] = useState(null);
  const [toggleButton, setToggleButton] = useState(false);
  const [theme, setTheme] = useState(getThemeData());
  const [searchInput, setSearchInput] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("PageTheme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      var today = new Date();
      const day = today.toLocaleString("en-US", { weekday: "long" });
      const month = today.toLocaleString("en-US", { month: "long" });
      const date = today.getDate();

      const formattedDateString = `${day}, ${month} ${date}`;
      setFormattedDate(formattedDateString);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem("task_data", JSON.stringify(listItems));
  }, [listItems]);

  const addItem = () => {
    if (!inputData) {
      alert("Please enter a task");
    } else if (inputData && toggleButton) {
      setListItems((prevItems) =>
        prevItems.map((curElem) =>
          curElem.id === isEdited ? { ...curElem, title: inputData } : curElem
        )
      );
      setInputData("");
      setIsEdited(null);
      setToggleButton(false);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        title: inputData,
      };
      setListItems((prevItems) => [...prevItems, newData]);
      setInputData("");
      setToggleButton(false);
    }
  };

  const deleteItem = (index) => {
    setListItems((prevItems) =>
      prevItems.filter((curElem) => curElem.id !== index)
    );
  };

  const editItem = (index) => {
    const editableItem = listItems.find((curElem) => curElem.id === index);
    setIsEdited(index);
    setInputData(editableItem.title);
    setToggleButton(true);
  };

  const removeAll = () => {
    setListItems([]);
  };

  const searchByname = () => {
    if (!searchInput) {
      setSearchItems([]); // Reset searchItems when the search input is empty
    } else {
      const filteredData = listItems.filter((curElem) => {
        return curElem.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchItems(filteredData);
    }
  };

  return (
    <>
      <main
        className={`px-5 flex flex-col justify-center ${
          theme === "dark" ? "dark" : ""
        } min-h-screen h-full ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <Navbar
          theme={theme}
          searchInput={searchInput}
          searchByname={searchByname}
          SearchIcon={SearchIcon}
          handleThemeSwitch={handleThemeSwitch}
          DarkMode={DarkMode}
          LightMode={LightMode}
          setSearchInput={setSearchInput}
        />
        {/* Date and Time  */}
        <DateTime
          theme={theme}
          SunIcon={SunIcon}
          formattedDate={formattedDate}
          removeAll={removeAll}
        />
        {/* <TodoList/> */}
        {/* input section  */}
        <InputData
          theme={theme}
          addItem={addItem}
          AddButton={AddButton}
          inputData={inputData}
          setInputData={setInputData}
        />
        {/* Todo display section  */}
        <TodoList
          theme={theme}
          listItems={listItems}
          searchInput={searchInput}
          searchItems={searchItems}
          deleteItem={deleteItem}
          editItem={editItem}
        />
        <Footer theme={theme} />
      </main>
    </>
  );
}

export default App;
