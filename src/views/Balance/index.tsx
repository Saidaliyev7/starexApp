import './balance.scss';

import { ReactComponent as CardIcon } from 'assets/images/icons/card.svg';
import { ReactComponent as ProfitCardIcon } from 'assets/images/icons/profit_card.svg';
import { ReactComponent as TerminalIcon } from 'assets/images/icons/terminal.svg';
import { APIDataRender } from 'components/APIDataRender';
import Table from 'components/Table';
import Pagination from 'components/Table/Pagination';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import { useAPIData } from 'hooks';
import { IPagination, IPaymentTransaction } from 'models';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { paymentService } from 'services/payment';
import { getPaymentTransactionsTableData } from 'utils';
import { BalanceInfo } from 'views/Dashboard/BalanceInfo';

import { BalanceLinkCard } from '../Dashboard/LinkCard';

const Balance: React.FC = () => {
    const [transactions, changeTransactions] = useAPIData<IPagination<IPaymentTransaction>>();
    const [page, changePage] = React.useState<number>(1);

    React.useEffect(() => {
        changeTransactions(() => paymentService.getTransactions(page));
    }, [page]);

    return (
        <>
            <div className="balance-holder">
                <BalanceInfo />
                <Row style={{ marginTop: 24 }}>
                    <Col xs="3">
                        <BalanceLinkCard className="balance-card">
                            <div className="icon">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M22.3958 4.1665H2.60415C1.16875 4.1665 0 5.33525 0 6.7707V18.2291C0 19.6645 1.16875 20.8332 2.60415 20.8332H22.3958C23.8312 20.8332 24.9999 19.6645 24.9999 18.2291V6.7707C25 5.33525 23.8312 4.1665 22.3958 4.1665ZM23.9583 18.229C23.9583 19.0905 23.2573 19.7915 22.3958 19.7915H2.60415C1.74268 19.7915 1.04165 19.0905 1.04165 18.229V6.7707C1.04165 5.90923 1.74268 5.2082 2.60415 5.2082H22.3958C23.2573 5.2082 23.9583 5.90923 23.9583 6.7707V18.229H23.9583Z"
                                            fill="#005AFF"
                                        />
                                        <path
                                            d="M24.4792 7.2915H0.52085C0.23335 7.2915 0 7.52485 0 7.81235V10.9374C0 11.2249 0.23335 11.4582 0.52085 11.4582H24.4792C24.7667 11.4582 25 11.2249 25 10.9374V7.81235C25 7.52485 24.7667 7.2915 24.4792 7.2915ZM23.9583 10.4165H1.04165V8.33315H23.9583V10.4165H23.9583Z"
                                            fill="#005AFF"
                                        />
                                        <path
                                            d="M9.89585 14.5835H3.64585C3.35835 14.5835 3.125 14.8168 3.125 15.1043C3.125 15.3918 3.35835 15.6251 3.64585 15.6251H9.89585C10.1834 15.6251 10.4167 15.3918 10.4167 15.1043C10.4167 14.8168 10.1834 14.5835 9.89585 14.5835Z"
                                            fill="#005AFF"
                                        />
                                        <path
                                            d="M9.89585 16.6665H3.64585C3.35835 16.6665 3.125 16.8999 3.125 17.1874C3.125 17.4749 3.35835 17.7082 3.64585 17.7082H9.89585C10.1834 17.7082 10.4167 17.4749 10.4167 17.1874C10.4167 16.8999 10.1834 16.6665 9.89585 16.6665Z"
                                            fill="#005AFF"
                                        />
                                        <path
                                            d="M20.3122 13.5415H19.2705C18.409 13.5415 17.708 14.2425 17.708 15.104V16.1457C17.708 17.0071 18.409 17.7082 19.2705 17.7082H20.3122C21.1736 17.7082 21.8747 17.0071 21.8747 16.1457V15.104C21.8747 14.2426 21.1736 13.5415 20.3122 13.5415ZM20.833 16.1457C20.833 16.4332 20.5997 16.6666 20.3122 16.6666H19.2705C18.983 16.6666 18.7497 16.4332 18.7497 16.1457V15.1041C18.7497 14.8166 18.983 14.5832 19.2705 14.5832H20.3122C20.5997 14.5832 20.833 14.8166 20.833 15.1041V16.1457Z"
                                            fill="#005AFF"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="25" height="25" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="text">
                                Balansınızı Bank kartı ilə <br /> artıra bilərsiniz
                            </div>
                        </BalanceLinkCard>
                    </Col>
                    <Col xs="3">
                        <BalanceLinkCard className="balance-card">
                            <div className="icon">
                                <CardIcon />
                            </div>
                            <div className="text">
                                Balansınızı Ofisimizə <br />
                                yaxınlaşaraq artıra bilərsiniz
                            </div>
                        </BalanceLinkCard>
                    </Col>
                    <Col xs="3">
                        <BalanceLinkCard className="balance-card">
                            <div className="icon">
                                <TerminalIcon />
                            </div>
                            <div className="text">
                                E-manat terminalları vasitəsilə <br />
                                balansınızı artıra bilərsiniz
                            </div>
                        </BalanceLinkCard>
                    </Col>
                    <Col xs="3">
                        <BalanceLinkCard className="balance-card">
                            <div className="icon">
                                <ProfitCardIcon />
                            </div>
                            <div className="text">
                                Balansınızı Hədiyyə Kartı <br />
                                vasitəsilə artıra bilərsiniz
                            </div>
                        </BalanceLinkCard>
                    </Col>
                </Row>
                <APIDataRender
                    branch={transactions}
                    deps={[]}
                    successRender={(data) => {
                        const transactionsTableData = getPaymentTransactionsTableData(data.results);
                        return (
                            <Table
                                tableCheckedData={[]}
                                tableData={transactionsTableData}
                                paginationComponent={
                                    <Pagination
                                        count={data.count}
                                        pages={data.pages}
                                        currentPage={page}
                                        onChange={changePage}
                                    />
                                }
                            >
                                <TableBody>
                                    {transactionsTableData?.tbodyData &&
                                        transactionsTableData?.tbodyData.map(
                                            (transaction: IPaymentTransaction) => (
                                                <TableTr key={transaction.created_at}>
                                                    <TableTd>
                                                        <div className="text">
                                                            {
                                                                transaction.get_payment_purpose_display
                                                            }
                                                        </div>
                                                    </TableTd>
                                                    <TableTd>
                                                        <div
                                                            className={
                                                                transaction.entry_type === 'debit'
                                                                    ? 'is-coming active'
                                                                    : 'is-coming'
                                                            }
                                                        ></div>
                                                        <div className="text">{`${transaction.amount} $`}</div>
                                                    </TableTd>
                                                    <TableTd>
                                                        <div className="text">
                                                            {transaction.created_at}
                                                        </div>
                                                    </TableTd>
                                                </TableTr>
                                            ),
                                        )}
                                </TableBody>
                            </Table>
                        );
                    }}
                />
            </div>
        </>
    );
};

export default Balance;
