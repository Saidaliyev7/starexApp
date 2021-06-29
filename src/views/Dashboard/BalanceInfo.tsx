import { ReactComponent as DollarFilledIcon } from 'assets/images/icons/dollar_filled.svg';
import { ReactComponent as InfoIcon } from 'assets/images/icons/info.svg';
import { ReactComponent as PlusFilledIcon } from 'assets/images/icons/plus_filled.svg';
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

import { InfoCard } from '.';

export const BalanceCardStyled = styled.div`
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

export const BalanceInfoHoverStyled = styled.div`
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

export const BalanceCard: React.FC = React.memo(() => {
    const { push } = useHistory();
    return (
        <BalanceCardStyled onClick={() => push(ROUTES.BALANCE)}>
            <span>Balansı Artır</span>
            <PlusFilledIcon />
        </BalanceCardStyled>
    );
});

export const BalanceInfo: React.FC = () => {
    const { user } = useUserInfo();

    return (
        <Row style={{ marginTop: 24 }}>
            <Col lg="3" md='12'>
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
            <Col lg="3" md='12'>
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
            <Col lg="3" md='12'>
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
            <Col lg="3" md='12'>
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
    );
};
