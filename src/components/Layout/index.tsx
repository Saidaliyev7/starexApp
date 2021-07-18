import './layout.scss';

import { ReactComponent as CheckIcon } from 'assets/images/icons/check.svg';
import { ReactComponent as HamburgerIcon } from 'assets/images/icons/hamburger.svg';
import { ReactComponent as LogoIcon } from 'assets/images/icons/logo.svg';
import { ReactComponent as NewAddIcon } from 'assets/images/icons/new_add.svg';
import { ReactComponent as NotificationIcon } from 'assets/images/icons/notification.svg';
import { ReactComponent as SettingIcon } from 'assets/images/icons/setting.svg';
import { ReactComponent as WritingIcon } from 'assets/images/icons/writing.svg';
import Button, { EButtonSize, EButtonView } from 'components/Button';
import { Sidebar } from 'components/Sidebar';
import { useAPIData, useIsTabletOrMobileV2 } from 'hooks';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { notificationService } from 'services/notification';
import styled, { css } from 'styled-components';
import { device } from 'styled/devices';
import { EColors } from 'styled/enums';
import { INotification, notifications } from 'views/Notifications';

const LayoutStyled = styled.div`
    display: flex;
    .dashboard__content {
        width: calc(100% - 336px);
        min-height: 100vh;
        position: relative;
        background-color: #f8f8f8;
    }
    @media (max-width: 1040px) {
        .dashboard__content {
            width: 100%;
        }
    }
`;

const HeaderStyled = styled.div`
    justify-content: flex-end;
    display: flex;
    padding: 20px 50px;
    background-color: white;
    align-items: center;

    ${device.tablet} {
        padding: 20px;
        justify-content: space-between;
    }
`;

const NotificationStyled = styled.div<{ hasUnreadMessage: boolean; isMobile: boolean }>`
    display: flex;
    align-items: center;
    margin-right: 40px;

    ${device.tablet} {
        margin-right: 0;
    }

    ${(props) =>
        !props.isMobile &&
        css`
            & > .notification__divider {
                width: 29px;
                transform: rotate(90deg);
                height: 1px;
                background-color: #e4e4e4;
                margin: 0 20px;
            }
        `}
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
    padding: 0 60px;
    ${device.tablet} {
        padding: 0 20px;
    }
`;

export const Layout: React.FC = ({ children }) => {
    const [notificationCount, changeNotificationCount] = useAPIData<{ unread_count: number }>();
    const [sidebarVisible, changeSidebarVisible] = React.useState<boolean>(false);
    const [notificationBarVisible, changeNotificationBarVisibility] = React.useState<boolean>(
        false,
    );
    const [notificationAllVisible, changeNotificationAllVisible] = React.useState<boolean>(false);
    const isTabletOrMobile = useIsTabletOrMobileV2();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [allNotifications] = React.useState<INotification[]>(notifications);
    React.useEffect(() => {
        changeNotificationCount(notificationService.getNotificationsCount);
    }, []);

    const onSideBarOpen = () => {
        changeSidebarVisible(true);
        setTimeout(() => {
            document.querySelector('nav').classList.add('active');
            document.querySelector('body').classList.add('overflow-hidden');
        }, 0);
    };
    const onCloseMobileMenu = () => {
        if (isTabletOrMobile) {
            changeSidebarVisible(false);
            document.querySelector('nav').classList.remove('active');
            document.querySelector('body').classList.remove('overflow-hidden');
        }
    };
    return (
        <LayoutStyled>
            <Sidebar isOpen={sidebarVisible} />
            <div className="dashboard__content" onClick={onCloseMobileMenu}>
                <div className="dashboard__content__header">
                    <HeaderStyled>
                        {!isTabletOrMobile ? (
                            <>
                                <Button
                                    style={{ width: 139, marginRight: 20 }}
                                    size={EButtonSize.MEDIUM}
                                >
                                    Sifariş Et
                                </Button>
                                <Link to={'/declare'}>
                                    <Button
                                        style={{ width: 139 }}
                                        view={EButtonView.SECONDARY}
                                        size={EButtonSize.MEDIUM}
                                    >
                                        Bəyan Et
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <HamburgerIcon onClick={onSideBarOpen} />
                                <LogoIcon />
                                <NewAddIcon />
                                <WritingIcon />
                            </>
                        )}
                        <div className="notification-bar-holder">
                            {!isTabletOrMobile ? (
                                <NotificationStyled
                                    onClick={() =>
                                        changeNotificationBarVisibility(!notificationBarVisible)
                                    }
                                    hasUnreadMessage={notificationCount.data?.unread_count > 0}
                                    isMobile={isTabletOrMobile}
                                >
                                    <div className="notification__divider" />
                                    <div className="notification__icon">
                                        <NotificationIcon />
                                    </div>
                                </NotificationStyled>
                            ) : (
                                <Link to="/notifications">
                                    <NotificationStyled
                                        hasUnreadMessage={notificationCount.data?.unread_count > 0}
                                        isMobile={isTabletOrMobile}
                                    >
                                        <div className="notification__divider" />
                                        <div className="notification__icon">
                                            <NotificationIcon />
                                        </div>
                                    </NotificationStyled>
                                </Link>
                            )}

                            {notificationBarVisible && (
                                <div className="notification-list">
                                    <div className="name-holder">
                                        <div className="name">Bildirişlər</div>
                                        <div className="icon">
                                            <div
                                                className="img"
                                                onClick={() =>
                                                    changeNotificationAllVisible(
                                                        !notificationAllVisible,
                                                    )
                                                }
                                            >
                                                <SettingIcon />
                                            </div>

                                            {notificationAllVisible && (
                                                <div className="read-all">
                                                    <div className="check-icon">
                                                        <CheckIcon />
                                                    </div>
                                                    <div className="text">
                                                        Hamısını oxunmuş olaraq işarələ
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="notifications">
                                        <ul>
                                            {allNotifications.map((not) => (
                                                <li key={not.id}>
                                                    <div
                                                        className={
                                                            not.isReaded ? 'readed icon' : 'icon'
                                                        }
                                                    ></div>
                                                    <div className="text-holder">
                                                        <div className="text">{not.text}</div>
                                                        <div className="date">{not.time}</div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="button">
                                        <Link to="/notifications">
                                            <button>Bütün Bildirişlər</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </HeaderStyled>
                </div>
                <DashboardContent>{children}</DashboardContent>
            </div>
        </LayoutStyled>
    );
};

Layout.displayName = 'Layout';
