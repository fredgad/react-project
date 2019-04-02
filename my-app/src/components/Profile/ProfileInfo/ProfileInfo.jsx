import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props)=> {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://images.jg-cdn.com/image/a2873ded-ec3f-4f46-803f-52b4f48b37a5.jpg?template=fundraisingpagegalleryxl" alt="Avatar"/>
            </div>
            <div>
                ava + description
            </div>
        </div> 
    );
}
    
export default ProfileInfo;