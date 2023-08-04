import React from "react";

const Navbar = ({
  theme,
  searchInput,
  searchByname,
  SearchIcon,
  handleThemeSwitch,
  DarkMode,
  LightMode,
  setSearchInput
}) => {
  return (
    <nav className="flex flex-col sm:flex-row py-5 items-center justify-center">
      <h1
        className={`grow font-Borel font-bold text-3xl py-2 sm:py-0 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        To Do List
      </h1>
      <div className="flex flex-row">
        <div
          className={`flex flex-row border-2 items-center px-3 py-2 rounded-md ${
            theme === "dark"
              ? "border-white bg-slate-600 text-white"
              : "border-black bg-gray-100 text-black"
          }`}
        >
          <input
            type="text"
            placeholder="Search ....."
            className={`outline-none flex-grow px-3 ${
              theme === "dark"
                ? "border-white bg-slate-600 text-white"
                : "border-black bg-gray-100 text-black"
            }`}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button onClick={searchByname}>
            <SearchIcon fill={theme === "dark" ? "white" : "black"} />
          </button>
        </div>

        <button
          onClick={handleThemeSwitch}
          className={`text-white mx-5 sm:mx-2 hover:scale-90 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          {theme === "dark" ? <LightMode /> : <DarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
