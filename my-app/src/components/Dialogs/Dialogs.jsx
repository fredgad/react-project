import React, { Component } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, addMessageTextActionCreator } from '../../redux/state';


const Dialogs = (props) => {
    let dialogsElements = props.correspond.dialogs
        .map(el => <DialogItem name={el.name} id={el.id} />);
    let messagesElements = props.correspond.messages
        .map(el => <Message message={el.messages} id={el.id} />);

    let sendMessage = React.createRef();

    return (
        <div className={s.dialogsPage}>
            <textarea ref={sendMessage} value={props.messageText} onInput={() => {
                props.dispatch(addMessageTextActionCreator(sendMessage))
            }} />
            <button onClick={() => {
                props.dispatch(sendMessageActionCreator(sendMessage))
            }}>Sand message</button>

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;