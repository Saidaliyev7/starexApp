// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './chatStatus.scss';

import * as React from 'react';

const ChatStatus: React.FC = React.memo(() => {
    return (
        <>
            <div className="chat-status-holder">
                <div className="title">Yanlış gələn sifariş - ABŞ</div>
                <div className="status">
                    <div className="top">Status</div>
                    <div className="text">Qəbul olunub</div>
                </div>
                <div className="status">
                    <div className="top">Tarix</div>
                    <div className="text">17.07.2019</div>
                </div>
                <div className="btn-holder">
                    <button>Həll oldu</button>
                </div>
            </div>
        </>
    );
});

export default ChatStatus;
