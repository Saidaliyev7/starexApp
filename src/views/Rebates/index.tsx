import { APIDataRender } from 'components/APIDataRender';
import Table from 'components/Table';
import Pagination from 'components/Table/Pagination';
import TableCard from 'components/Table/TableCard';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import { useAPIData, useIsTabletOrMobileV2 } from 'hooks';
import { IRebateList } from 'models';
import * as React from 'react';
import { rebatesService } from 'services/rebates';
import { getRebatesTableData, isSuccess } from 'utils';

const Rebates: React.FC = () => {
    const [rebatesMenu, changeRebatesMenu] = useAPIData<{
        all: number;
        data: { name: string; id: number; count: number }[];
    }>();
    const [selectedStatus, changeSelectedStatus] = React.useState<number>();
    const [rebates, changeRebates] = useAPIData<IRebateList>();
    const [page, changePage] = React.useState<number>(1);
    const isTabletOrMobile = useIsTabletOrMobileV2();
    React.useEffect(() => {
        changeRebatesMenu(() => rebatesService.getRebatesMenu());
    }, []);

    React.useEffect(() => {
        changeRebates(() => rebatesService.getRebates(page, selectedStatus));
    }, [page, selectedStatus]);

    return (
        isSuccess(rebatesMenu) && (
            <APIDataRender
                branch={rebates}
                deps={[rebatesMenu]}
                successRender={(rebateList) => {
                    const tableData = getRebatesTableData(rebateList.data, [
                        {
                            name: 'Bütün iadələr',
                            count: rebatesMenu.data.all,
                            isActive: !selectedStatus,
                            id: null,
                        },
                        ...rebatesMenu.data.data.map((x) => ({
                            ...x,
                            isActive: selectedStatus === x.id,
                        })),
                    ]);
                    return (
                        <Table
                            tableCheckedData={[]}
                            tableData={{
                                ...tableData,
                                handleSelectChange: (id) => changeSelectedStatus(id),
                            }}
                            paginationComponent={
                                <Pagination
                                    count={rebateList.total}
                                    pages={rebateList.pages}
                                    currentPage={page}
                                    onChange={changePage}
                                />
                            }
                        >
                            {!isTabletOrMobile ? (
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
                            ) : (
                                <>
                                    {tableData?.tbodyData.map((data) => (
                                        <TableCard key={data.id}>
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
                                                        <div className="title">
                                                            Çatdırılma qiyməti
                                                        </div>
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
                            )}
                        </Table>
                    );
                }}
            />
        )
    );
};

export default Rebates;
