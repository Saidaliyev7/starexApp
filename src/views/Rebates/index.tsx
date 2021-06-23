import Table from 'components/Table';
import { ITableData, tableStaticDataRebates } from 'components/Table/table.interface';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import * as React from 'react';

const Rebates: React.FC = () => {
    const [tableData, changeTableData] = React.useState<ITableData>(tableStaticDataRebates);
    const [tableCheckData, changeTableCheckData] = React.useState<any>([]);
    React.useEffect(() => {
        changeTableData(tableStaticDataRebates);
    }, []);

    return (
        <>
            <Table tableCheckedData={tableCheckData} tableData={tableData}>
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
            </Table>
        </>
    );
};

export default Rebates;
