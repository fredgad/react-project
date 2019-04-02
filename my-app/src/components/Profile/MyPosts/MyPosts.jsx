import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, addTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
    let postsElements = props.postData
        .map(el => <Post message={el.message} likes={el.likes} />).reverse();


    let areaInput = React.createRef();

    return (
        <div className={s.posts}>

            <textarea ref={areaInput} value={props.areaText} onInput={()=> {
                props.dispatch(addTextActionCreator(areaInput));
                // areaInput.current.value = props.areaText;
            }}/>

            <button onClick={()=> { 
                props.dispatch(addPostActionCreator(areaInput));
            }}> 

                Опубликовать
            </button>

            {postsElements}
        </div>
    );
}

export default MyPosts;