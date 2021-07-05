import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import  HomeIcon  from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout }  from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logOut = () =>{
    dispatch(logout())
    auth.signOut()

  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="data:image/png;base64,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" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="search here" />
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccount} title="My network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption onClick ={logOut} avatar="https://lh3.googleusercontent.com/ogw/ADea4I5aNx4aP1I8gm0lDsnn4Mhd3PQwqJZbtK4pjYwh=s32-c-mo" title="Moir"/>
          
      </div>
     
    </div>
  );
}

export default Header;
