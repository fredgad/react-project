import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=> {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postData={props.postData} 
                     areaText={props.areaText} 
                     dispatch={props.dispatch} 
                     addText={props.addText} />
        </div> 
    );
}
    
export default Profile;