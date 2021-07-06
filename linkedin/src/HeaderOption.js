import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header__option">
      {Icon && <Icon className="header__option__icon" />}
      {avatar && (
        <Avatar className="header__option__icon" >
          
        </Avatar>
      )}

      <h3 className="header__option__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
