import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full dark:bg-gray-800 dark:text-white text-center">
      <p className="bg-white py-2 dark:bg-gray-800 dark:text-white">
        &copy; {new Date().getFullYear()} Shady Coder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
