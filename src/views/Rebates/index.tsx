import Table from 'components/Table';
import { ITableData, tableStaticDataRebates } from 'components/Table/models';
import TableCard from 'components/Table/TableCard';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import { useIsTabletOrMobileV2 } from 'hooks';
import * as React from 'react';

const Rebates: React.FC = () => {
    const [tableData, changeTableData] = React.useState<ITableData<any>>(tableStaticDataRebates);
    const isTabletOrMobile = useIsTabletOrMobileV2();
    React.useEffect(() => {
        changeTableData(tableStaticDataRebates);
    }, []);

    return (
        <>
            <Table tableCheckedData={[]} tableData={tableData}>
                {
                    !isTabletOrMobile?(
                        <TableBody>
                        {tableData?.tbodyData &&
                            tableData?.tbodyData.map((data) => (
                                <TableTr isChecked={data.checked} key={data.id}>
                                    <TableTd>
                                        <div className="text">{data.code}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.priceAzn}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.where}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.weight}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.comingPrice}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.status}</div>
                                    </TableTd>
                                </TableTr>
                            ))}
                    </TableBody>
                    ): <>
                    {tableData?.tbodyData.map((data) => (
                        <TableCard   key={data.id}>

                            <div className="card-data-upper">
                                <div className="card-data">
                                    <div className="text">{data.code}</div>
                                </div>
                                <div className="card-data">
                                    <div className="text">{data.priceAzn}</div>
                                </div>
                                <div className="card-data">
                                    <div className="text">{data.where}</div>
                                </div>
                                <div className="card-data">
                                    <div className="text">{data.status}</div>
                                </div>
                            </div>
                            
                            <div className="price-card-holder">
                                <div className="upper">
                                    <div className="left">
                                        <div className="title">Çəki</div>
                                        <div className="text">{data.weight}</div>
                                    </div>
                                    <div className="right">
                                        <div className="title">Çatdırılma qiyməti</div>
                                        <div className="text">
                                            <p>{data.comingPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TableCard>
                    ))}
                    <div className="pay-all"></div>
                </>
                }
               
            </Table>
        </>
    );
};

export default Rebates;
