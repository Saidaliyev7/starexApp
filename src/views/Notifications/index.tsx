import './notifications.scss';

import Notification from 'components/Notification';
import * as React from 'react';

export interface INotification {
    id: number;
    text: string;
    isReaded: boolean;
    time:string,
}

export const notifications: INotification[] = [
    {
        id: 1,
        text: '#86753890 nömrəli bağlama mağazadan sifariş verildi.',
        isReaded: true,
        time:'21.10.2020'
    },
    {
        id: 2,
        text: '#86753890 nömrəli bağlama mağazadan sifariş verildi.',
        isReaded: false,
        time:'21.10.2020'
    },
];

const Notifications: React.FC = () => {
    const [allNotifications, changeNotifications] = React.useState<INotification[]>(notifications);

    const readNotification =(notification:INotification)=>{
        changeNotifications((oldState)=>{
            const newState=[...oldState].map(not=>{
                notification.isReaded==false?not.id===notification.id?not.isReaded=true:null:null;
                return not
            })

            return newState;
            
        })
    }
    const readAllNotifications=()=>{
        changeNotifications((oldState)=>{
            const newState=[...oldState].map(not=>{
                not.isReaded===false?not.isReaded=true:null;
                return not
            })

            return newState;
            
        })
    }
    return (
        <>
            <div className="notifications-holder">
                <div className="top" onClick={readAllNotifications}>
                    <div className="icon">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M11.8243 1.7695C11.59 1.53517 11.2101 1.53517 10.9757 1.7695L3.78737 8.95794L1.02428 6.19485C0.789973 5.96052 0.410098 5.96054 0.175746 6.19485C-0.058582 6.42915 -0.058582 6.80903 0.175746 7.04335L3.36311 10.2307C3.59734 10.465 3.9775 10.4648 4.21164 10.2307L11.8243 2.61803C12.0586 2.38372 12.0586 2.00382 11.8243 1.7695Z"
                                    fill="#005AFF"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="text">Hamısını oxunmuş olaraq göstər</div>
                </div>
                <div className="bottom">
                    <ul>
                        {allNotifications &&
                            allNotifications.map((not) => (
                                <li key={not.id}>
                                    <Notification onClickNotification={readNotification} notification={not} />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Notifications;
