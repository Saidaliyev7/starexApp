import { ReactComponent as BoxIcon } from 'assets/images/icons/box_lg.svg';
import { ReactComponent as CartIcon } from 'assets/images/icons/cart_lg.svg';
import { ReactComponent as DeliveryIcon } from 'assets/images/icons/delivery_lg.svg';
import { ReactComponent as DollarFilledIcon } from 'assets/images/icons/dollar_filled.svg';
import { ReactComponent as FinanceLetterIcon } from 'assets/images/icons/finance-letter_lg.svg';
import { ReactComponent as InfoIcon } from 'assets/images/icons/info.svg';
import { ReactComponent as LocationIcon } from 'assets/images/icons/location_lg.svg';
import { ReactComponent as PlusFilledIcon } from 'assets/images/icons/plus_filled.svg';
import { ReactComponent as SettingsIcon } from 'assets/images/icons/settings_lg.svg';
import { ReactComponent as TRYFilledIcon } from 'assets/images/icons/try_filled.svg';
import { ECurrency } from 'enums';
import { useUserInfo } from 'hooks';
import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { ROUTES } from 'routes/consts';
import styled from 'styled-components';
import { EColors } from 'styled/enums';

import { DashboardLinkCard } from './LinkCard';

const BalanceCardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${EColors.BLUE};
    border-radius: 4px;
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
    cursor: pointer;
    > svg {
        margin-left: 14px;
    }
`;

const BalanceInfoHoverStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    padding: 14px;
    background-color: ${EColors.BLUE};
    color: white;
    display: flex;
    align-items: center;
    z-index: 1;
    min-height: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
`;

const InfoCard = styled.div`
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
`;

const BalanceCard: React.FC = React.memo(() => {
    const { push } = useHistory();
    return (
        <BalanceCardStyled onClick={() => push(ROUTES.BALANCE)}>
            <span>Balansı Artır</span>
            <PlusFilledIcon />
        </BalanceCardStyled>
    );
});

export const Dashboard: React.FC = () => {
    const { user } = useUserInfo();
    return (
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
            <Row style={{ marginTop: 24 }}>
                <Col xs="3">
                    <InfoCard>
                        <div className="info-card__left-side">
                            <p className="info-card__heading">
                                Cari Ay <br />
                                Ərzində
                            </p>
                            <p className="info-card__amount">{user.current_month.amount} $</p>
                        </div>
                        <div style={{ width: 64, height: 64 }}>
                            <CircularProgressbar
                                value={60}
                                text={'60%'}
                                styles={{
                                    text: {
                                        fill: EColors.BLUE,
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                    },
                                    path: { stroke: EColors.YELLOW },
                                    trail: { stroke: '#FFAB0320' },
                                }}
                            />
                        </div>
                    </InfoCard>
                </Col>
                <Col xs="3">
                    <InfoCard>
                        <div className="info-card__left-side">
                            <p className="info-card__heading">
                                BALANS
                                <br />
                                USD
                            </p>
                            <p className="info-card__amount">
                                {user.balances.find((x) => x.currency === ECurrency.USD)?.amount}
                            </p>
                        </div>
                        <DollarFilledIcon />
                        <BalanceCard />
                    </InfoCard>
                </Col>
                <Col xs="3">
                    <InfoCard>
                        <div className="info-card__left-side">
                            <p className="info-card__heading">
                                BALANS
                                <br />
                                TRY
                            </p>
                            <p className="info-card__amount">
                                {user.balances.find((x) => x.currency === ECurrency.TRY)?.amount}
                            </p>
                        </div>
                        <TRYFilledIcon />
                        <BalanceCard />
                    </InfoCard>
                </Col>
                <Col xs="3">
                    <InfoCard>
                        <div className="info-card__left-side">
                            <p className="info-card__heading">
                                Son 6 ay Çatdırılma
                                <br />
                                Ödənişi
                            </p>
                            <p className="info-card__amount">
                                {user.last_180_days_declaration_payments} $
                            </p>
                        </div>
                        <InfoIcon />
                        <BalanceInfoHoverStyled>
                            Əgər son 6 ay ərzində (bağlamaların xaricdən daşınması üçün) ödədiyiniz
                            məbləğ $150-dən çoxdursa Siz Starexin Gold müştərisi olursunuz. Bununla
                            sizin növbəti 3 ay ərzində xarici anbarda sistemə işlənən bütün
                            bağlamalarınıza 15% endirim tətbiq olunur.
                        </BalanceInfoHoverStyled>
                    </InfoCard>
                </Col>
            </Row>
            <Row style={{ marginTop: '24px' }}>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.MY_ORDERS}>
                        <CartIcon />
                        <p>Sifarişlər</p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.BOXES}>
                        <BoxIcon />
                        <p>Bağlamalar</p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.FOREIGN_ADDRESSES}>
                        <LocationIcon />
                        <p>
                            Xaricdəki <br /> ünvanlarım
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
                        <p>Müraciətlər</p>
                    </DashboardLinkCard>
                </Col>
                <Col xs="4" style={{ marginBottom: 20 }}>
                    <DashboardLinkCard to={ROUTES.SETTINGS}>
                        <SettingsIcon />
                        <p>Tənzimləmələr</p>
                    </DashboardLinkCard>
                </Col>
            </Row>
        </>
    );
};
