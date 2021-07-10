import './notification.scss';

import { useIsTabletOrMobileV2 } from 'hooks';
import * as React from 'react';
import { INotification } from 'views/Notifications';

const Notification: React.FC<{notification:INotification,onClickNotification}> = ({notification,onClickNotification}) => {
    const isTabletOrMobile = useIsTabletOrMobileV2();
    return (
     <>
     <div onClick={()=>onClickNotification(notification)} className="notification-holder">
        <div className={notification.isReaded?'icon is-readed':'icon'}>

        </div>
        <div className="text">
            {notification.text}
        </div>
        <div className="time">
            {notification.time}
        </div>
     </div>
     </>
    );
};

export default Notification;
