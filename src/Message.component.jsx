import React, {forwardRef } from 'react';
import './Message.styles.css';
import Avatar from '@material-ui/core/Avatar';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const Message = forwardRef(({id, contents: {
    timestamp, displayName, email, message, photo, uid }
}, ref) => {

    const user = useSelector(selectUser);
    return (
        <div ref={ref} className={`message ${user.email === email && 'message__sender'}`}>
            <Avatar className='message__photo' src={photo} />
            <p>{message}</p>
            <small> {new Date(timestamp?.toDate()).toLocaleString()} </small>
        </div>
    );
});

export default Message;
