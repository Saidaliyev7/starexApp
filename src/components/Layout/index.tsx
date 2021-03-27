import { ReactComponent as NotificationIcon } from 'assets/images/icons/notification.svg';
import Button, { EButtonSize, EButtonView } from 'components/Button';
import { Sidebar } from 'components/Sidebar';
import { useAPIData } from 'hooks';
import * as React from 'react';
import { notificationService } from 'services/notification';
import styled, { css } from 'styled-components';
import { EColors } from 'styled/enums';

const LayoutStyled = styled.div`
    display: flex;
    height: 100vh;
    .dashboard__content {
        width: 100%;
        background-color: #e5e5e5;
    }
`;

const HeaderStyled = styled.div`
    justify-content: flex-end;
    display: flex;
    padding: 20px 50px;
    background-color: white;
    align-items: center;
`;

const NotificationStyled = styled.div<{ hasUnreadMessage: boolean }>`
    display: flex;
    align-items: center;
    margin-right: 40px;
    & > .notification__divider {
        width: 29px;
        transform: rotate(90deg);
        height: 1px;
        background-color: #e4e4e4;
        margin: 0 20px;
    }
    & > .notification__icon {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }
    ${(props) =>
        props.hasUnreadMessage &&
        css`
            & > .notification__icon::before {
                content: '';
                position: absolute;
                top: 0;
                right: -2px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: ${EColors.YELLOW};
            }
        `}
`;

const DashboardContent = styled.div`
    padding: 0 30px;
`;

export const Layout: React.FC = ({ children }) => {
    const [notificationCount, changeNotificationCount] = useAPIData<{ unread_count: number }>();

    React.useEffect(() => {
        changeNotificationCount(notificationService.getNotificationsCount);
    }, []);

    return (
        <LayoutStyled>
            <Sidebar />
            <div className="dashboard__content">
                <div className="dashboard__content__header">
                    <HeaderStyled>
                        <Button style={{ width: 139, marginRight: 20 }} size={EButtonSize.MEDIUM}>
                            Sifariş Et
                        </Button>
                        <Button
                            style={{ width: 139 }}
                            view={EButtonView.SECONDARY}
                            size={EButtonSize.MEDIUM}
                        >
                            Bəyan Et
                        </Button>
                        <NotificationStyled
                            hasUnreadMessage={notificationCount.data?.unread_count > 0}
                        >
                            <div className="notification__divider" />
                            <div className="notification__icon">
                                <NotificationIcon />
                            </div>
                        </NotificationStyled>
                    </HeaderStyled>
                </div>
                <DashboardContent>{children}</DashboardContent>
            </div>
        </LayoutStyled>
    );
};

Layout.displayName = 'Layout';
