import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>robert kelly</h2>
        <h4> rkelly@universal.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed youw</p>
          <p className="sidebar__statNumber">2,545</p>

        </div>
        <div className="sidebar__stat">
        <p>views on post</p>
          <p className="sidebar__statNumber">2,545</p>
            
            </div>
      </div>
      <div className="sidebar__bottom">
        <p>recent</p>
      </div>
    </div>
  );
}

export default Sidebar;