import React, { Component } from 'react';
import s from "./Friends.module.css";
import Friend from './Friend/Friend';

const Friends = (props) => {
    
    let friendsList = props.friends
        .map(el => <Friend name={el.name} id={el.id} />);

    return (
        <div className={s.friends}>
            {friendsList}
        </div>
    );
}

export default Friends;