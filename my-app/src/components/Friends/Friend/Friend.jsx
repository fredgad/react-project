import React, { Component } from 'react';
import s from "./Friend.module.css";
import {NavLink} from 'react-router-dom';   

const Friend = (props) => {
    return (
        <div className={s.x}>
            <NavLink to={`/Friends/${props.id}`}>{props.name}</NavLink> 
        </div>
    );
}

export default Friend;