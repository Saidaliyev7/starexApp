import './dashboard.scss';

import { ReactComponent as BoxIcon } from 'assets/images/icons/box_lg.svg';
import { ReactComponent as CartIcon } from 'assets/images/icons/cart_lg.svg';
import { ReactComponent as DeliveryIcon } from 'assets/images/icons/delivery_lg.svg';
import { ReactComponent as FinanceLetterIcon } from 'assets/images/icons/finance-letter_lg.svg';
import { ReactComponent as LocationIcon } from 'assets/images/icons/location_lg.svg';
import { ReactComponent as SettingsIcon } from 'assets/images/icons/settings_lg.svg';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { ROUTES } from 'routes/consts';
import styled from 'styled-components';
import { device } from 'styled/devices';
import { EColors } from 'styled/enums';

import { BalanceCardStyled, BalanceInfo, BalanceInfoHoverStyled } from './BalanceInfo';
import { DashboardLinkCard } from './LinkCard';

export const InfoCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    min-height: 122px;
    position: relative;

    &:hover ${BalanceCardStyled}, &:hover ${BalanceInfoHoverStyled} {
        opacity: 1;
        pointer-events: all;
    }

    & > .info-card__left-side {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 80px;
    }

    & .info-card__heading {
        color: ${EColors.GRAY};
        font-size: 14px;
        line-height: 17.71px;
    }
    & .info-card__amount {
        font-weight: 500;
        font-size: 22px;
        line-height: 27.83px;
        color: ${EColors.BLUE};
    }
    ${device.tablet}{
        margin-bottom:15px
    }
`;

export const Dashboard: React.FC = () => (
    <>
        <div
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                padding: 80,
                marginTop: 30,
                backgroundColor: '#A7A7A7',
                fontSize: 30,
                color: 'white',
            }}
        >
            BANNER
        </div>

        <div className="row-styled-responsive">
            <BalanceInfo />

            <Row className='dash-links-row' style={{ marginTop: '24px' }}>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.MY_ORDERS}>
                        <CartIcon />
                        <p>Sifari??l??r</p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.BOXES}>
                        <BoxIcon />
                        <p>Ba??lamalar</p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.FOREIGN_ADDRESSES}>
                        <LocationIcon />
                        <p>
                            Xaricd??ki <br /> ??nvanlar??m
                        </p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.COURIER}>
                        <DeliveryIcon />
                        <p>Kuryer</p>
                    </DashboardLinkCard>
                </Col>

                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.APPLICATIONS}>
                        <FinanceLetterIcon />
                        <p>M??raci??tl??r</p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.SETTINGS}>
                        <SettingsIcon />
                        <p>T??nziml??m??l??r</p>
                    </DashboardLinkCard>
                </Col>
            </Row>
        </div>
    </>
);
