import React from 'react'
import './HeaderOption.css';

function HeaderOptions({Icon, title }) {
    return (
        <div className="header__option">
            {Icon && <Icon className="header__option__icon"/>}

            <h3 className="header__option__title">{title}</h3>
            
        </div>
    )
}

export default HeaderOptions
