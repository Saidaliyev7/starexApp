import { ReactComponent as NotificationIcon } from 'assets/images/icons/notification.svg';
import Button, { EButtonSize, EButtonView } from 'components/Button';
import { Sidebar } from 'components/Sidebar';
import { useAPIData, useIsTabletOrMobile } from 'hooks';
import * as React from 'react';
import { notificationService } from 'services/notification';
import styled, { css } from 'styled-components';
import { device } from 'styled/devices';
import { EColors } from 'styled/enums';

const LayoutStyled = styled.div`
    display: flex;
    .dashboard__content {
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: #f8f8f8;
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
    padding: 0 30px;
`;

export const Layout: React.FC = ({ children }) => {
    const [notificationCount, changeNotificationCount] = useAPIData<{ unread_count: number }>();
    const [sidebarVisible, changeSidebarVisible] = React.useState<boolean>(false);
    const isTabletOrMobile = useIsTabletOrMobile();
    React.useEffect(() => {
        changeNotificationCount(notificationService.getNotificationsCount);
    }, []);

    return (
        <LayoutStyled>
            <Sidebar isOpen={sidebarVisible} />
            <div className="dashboard__content">
                <div className="dashboard__content__header">
                    <HeaderStyled>
                        {!isTabletOrMobile && (
                            <>
                                <Button
                                    style={{ width: 139, marginRight: 20 }}
                                    size={EButtonSize.MEDIUM}
                                >
                                    Sifariş Et
                                </Button>
                                <Button
                                    style={{ width: 139 }}
                                    view={EButtonView.SECONDARY}
                                    size={EButtonSize.MEDIUM}
                                >
                                    Bəyan Et
                                </Button>
                            </>
                        )}
                        <NotificationStyled
                            hasUnreadMessage={notificationCount.data?.unread_count > 0}
                            isMobile={isTabletOrMobile}
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
