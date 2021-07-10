// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './chat.scss';

import { IApplication } from 'models';
import * as React from 'react';

import ChatInput from './ChatInput';
import ChatStatus from './ChatStatus';

const Chat: React.FC<{
    application: IApplication;
    onChange: (data: FormData) => void;
}> = React.memo(({ application, onChange }) => {
    return (
        <>
            <div className="chat-holder">
                <div className="left">
                    <ChatInput
                        messages={application.messages}
                        onChange={onChange}
                        canAnswer={application.can_answer}
                    />
                </div>
                <div className="right">
                    <ChatStatus application={application} />
                </div>
            </div>
        </>
    );
});

Chat.displayName = 'ApplicationChat';

export default Chat;
