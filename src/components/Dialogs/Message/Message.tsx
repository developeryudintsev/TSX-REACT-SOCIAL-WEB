import React from 'react';
import s from "./../Dialogs.module.css";

type iMessage = {
    name: string
}

const Message = (props: iMessage) => {
    return <div className={s.message}>{props.name}</div>
}

export default Message;