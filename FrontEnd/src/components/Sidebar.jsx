import React from "react";
import Navbarr from "./Navbarr"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbarr />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
