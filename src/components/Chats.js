import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();

    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    return (
       <div className='chats-page'>
           <div className='nav-bar'>
               <div className='logo-tab'>WeChat</div>
               <div onClick={handleLogout} className='logout-tab'>Logout</div>
           </div>
           <ChatEngine 
                height='calc(100vh - 66px)'
                projectId='1727a09b-37e3-4473-8026-37d6530f4705'
                userName='.'
                userSecret='.'
           />
       </div>
    );
};

export default Chats;
