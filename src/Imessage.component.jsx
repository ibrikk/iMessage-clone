import React from 'react';
import './Imessage.styles.css';
import SideBar from './Sidebar.component';
import Chat from './Chat.component';


const Imessage = () => {
    return (
        <div className='imessage'>
            <SideBar />
            <Chat />
        </div>
    )
}

export default Imessage;
