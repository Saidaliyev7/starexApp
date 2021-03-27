import { ReactComponent as BoxIcon } from 'assets/images/icons/box.svg';
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';
import { ReactComponent as DeliveryIcon } from 'assets/images/icons/delivery.svg';
import { ReactComponent as DollarCircleIcon } from 'assets/images/icons/dollar-circle.svg';
import { ReactComponent as FinanceLetterIcon } from 'assets/images/icons/finance-letter.svg';
import { ReactComponent as LocationIcon } from 'assets/images/icons/location.svg';
import { ReactComponent as LogoutIcon } from 'assets/images/icons/logout.svg';
import { ReactComponent as QueueIcon } from 'assets/images/icons/queue.svg';
import { ReactComponent as ReturnBoxIcon } from 'assets/images/icons/return-box.svg';
import { ReactComponent as SettingsIcon } from 'assets/images/icons/settings.svg';
import { ReactComponent as UserIcon } from 'assets/images/icons/user.svg';
import { ReactComponent as ProfileIcon } from 'assets/images/profile.svg';
import { useUserInfo } from 'hooks';
import * as React from 'react';
import { ROUTES } from 'routes/consts';
import styled from 'styled-components';
import { EColors } from 'styled/enums';

import { SidebarMenuItem } from './MenuItem';

const SidebarStyled = styled.nav`
    color: white;
    background-color: ${EColors.BLUE};
    flex: 0 0 336px;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
`;

const UserInfoStyled = styled.div`
    display: flex;
    align-items: center;
    margin-top: 36px;
    margin-bottom: 55px;
    & > svg {
        margin-right: 25px;
    }

    .user-info__details {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        font-size: 18px;
        line-height: 14px;

        h4 {
            margin-bottom: 18px;
        }
    }
`;

export const Sidebar: React.FC = () => {
    const { user } = useUserInfo();

    return (
        <SidebarStyled>
            <UserInfoStyled>
                <ProfileIcon />
                <div className="user-info__details">
                    <h4>{user.full_name.toLowerCase()}</h4>
                    <span>#{user.customer_code}</span>
                </div>
            </UserInfoStyled>
            <ul>
                <SidebarMenuItem path={ROUTES.MAIN}>
                    <UserIcon />
                    <span>Şəxsi kabinetim</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.FOREIGN_ADDRESSES}>
                    <LocationIcon />
                    <span>Xaricdəki ünvanlarım</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.MY_ORDERS}>
                    <CartIcon />
                    <span>Sifarişlərim</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.BOXES}>
                    <BoxIcon />
                    <span>Bağlamalar</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.COURIER}>
                    <DeliveryIcon />
                    <span>Kuryer</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.REBATES}>
                    <ReturnBoxIcon />
                    <span>İadeler</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.BALANCE}>
                    <DollarCircleIcon />
                    <span>Balans</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.APPLICATIONS}>
                    <FinanceLetterIcon />
                    <span>Müraciətlər</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.ONLINE_QUEUE}>
                    <QueueIcon />
                    <span>Onlayn Növbə</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.SETTINGS}>
                    <SettingsIcon />
                    <span>Tənzimləmələr</span>
                </SidebarMenuItem>
                <SidebarMenuItem path={ROUTES.LOGOUT}>
                    <LogoutIcon />
                    <span>Çıxış</span>
                </SidebarMenuItem>
            </ul>
        </SidebarStyled>
    );
};
