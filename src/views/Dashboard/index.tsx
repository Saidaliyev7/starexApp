import { ReactComponent as BoxIcon } from 'assets/images/icons/box_lg.svg';
import { ReactComponent as CartIcon } from 'assets/images/icons/cart_lg.svg';
import { ReactComponent as DeliveryIcon } from 'assets/images/icons/delivery_lg.svg';
import { ReactComponent as FinanceLetterIcon } from 'assets/images/icons/finance-letter_lg.svg';
import { ReactComponent as LocationIcon } from 'assets/images/icons/location_lg.svg';
import { ReactComponent as SettingsIcon } from 'assets/images/icons/settings_lg.svg';
import * as React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { Col, Row } from 'reactstrap';
import { ROUTES } from 'routes/consts';

// import { EColors } from 'styled/enums';
import { DashboardLinkCard } from './LinkCard';

{
    /* <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar
                    value={60}
                    text={'60%'}
                    styles={{
                        text: { fill: EColors.BLUE },
                        path: { stroke: EColors.YELLOW },
                        trail: { stroke: '#FFAB0320' },
                    }}
                />
            </div> */
}

export const Dashboard: React.FC = () => {
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
                        <p>Xaricdəki ünvanlarım</p>
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
