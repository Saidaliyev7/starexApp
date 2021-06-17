
import { ReactComponent as DollarFilledIcon } from 'assets/images/icons/dollar_filled.svg';
import { ReactComponent as InfoIcon } from 'assets/images/icons/info.svg';
import { ReactComponent as TRYFilledIcon } from 'assets/images/icons/try_filled.svg';
import Table from 'components/Table';
import { ITableData, tableStaticDataBalance } from 'components/Table/table.interface';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Col, Row } from 'reactstrap';
import { EColors } from 'styled/enums';

import {BalanceCard,BalanceInfoHoverStyled,InfoCard} from '../Dashboard/'

const Balance: React.FC = () => {
    const [tableData, changeTableData] = React.useState<ITableData>(tableStaticDataBalance);
    const [tableCheckData, changeTableCheckData] = React.useState<any>([]);
    React.useEffect(() => {
        changeTableData(tableStaticDataBalance);
    }, []);

    return (
        <>
            <Row style={{ marginTop: 24 }}>
                <Col xs="3">
                    <InfoCard>
                        <div className="info-card__left-side">
                            <p className="info-card__heading">
                                Cari Ay <br />
                                Ərzində
                            </p>
                            <p className="info-card__amount">55 $</p>
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
                                50
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
                                50
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
                             50 $
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

            <Table tableCheckedData={tableCheckData} tableData={tableData}>
                <TableBody>
                    {tableData?.tbodyData &&
                        tableData?.tbodyData.map((data) => (
                            <TableTr isChecked={data.checked} key={data.id}>
                                <TableTd>
                                    <div className="text">{data.action}</div>
                                </TableTd>
                                <TableTd>
                                    <div className="text">{data.cost}</div>
                                </TableTd>
                                <TableTd>
                                    <div className="text">{data.date}</div>
                                </TableTd>
                            </TableTr>
                        ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Balance;
