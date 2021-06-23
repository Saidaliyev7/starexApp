// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './chat.scss';

import * as React from 'react';

import ChatInput from './ChatInput';
import ChatStatus from './ChatStatus';

const Chat: React.FC = React.memo(() => {
    return (
        <>
            <div className="chat-holder">
                <div className="left">
                    <ChatInput />
                </div>
                <div className="right">
                    <ChatStatus />
                </div>
            </div>
        </>
    );
});

export default Chat;
