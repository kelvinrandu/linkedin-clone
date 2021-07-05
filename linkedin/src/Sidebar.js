import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { selectUser }  from "./features/userSlice";
import { useSelector } from "react-redux";


function Sidebar() {
  const user = useSelector(selectUser);
  

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
        <Avatar src={user.photoUrl}className="sidebar_avatar" >
          {user.email[0]}
          </Avatar>
        <h2>{user.displayName}</h2>
        <h4> {user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed </p>
          <p className="sidebar__statNumber">2,545</p>

        </div>
        <div className="sidebar__stat">
        <p>views </p>
          <p className="sidebar__statNumber">2,545</p>
            
            </div>
      </div>
      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItem('reactjs')}
        {recentItem('nextjs')}
        {recentItem('software')}
        {recentItem('mutation')}
        {recentItem('design thinking')}
      </div>
    </div>
  );
}

export default Sidebar;
