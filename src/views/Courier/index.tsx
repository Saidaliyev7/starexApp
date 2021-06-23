import Table from 'components/Table';
import { ITableData, tableStaticDataCourier } from 'components/Table/models';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import * as React from 'react';

const Courier: React.FC = () => {
    const [tableData, changeTableData] = React.useState<ITableData<any>>(tableStaticDataCourier);
    const [tableCheckData, changeTableCheckData] = React.useState<any>([]);
    React.useEffect(() => {
        changeTableData(tableStaticDataCourier);
    }, []);

    const onTdClick = (data) => {
        if (tableCheckData.length === 0) {
            cahngeTableCheckData(data);
        } else if (tableCheckData[0].buyStatus === data.buyStatus) {
            cahngeTableCheckData(data);
        }
    };

    const cahngeTableCheckData = (data) => {
        changeTableData((oldState) => {
            const newStateData = oldState.tbodyData.map((el) => {
                el.id === data.id ? (el.checked = !el.checked) : null;
                return el;
            });
            changeTableCheckData(newStateData.filter((data) => data.checked));
            const newState = {
                ...oldState,
                tbodyData: newStateData,
            };
            return newState;
        });
    };

    return (
        <>
            <Table tableCheckedData={tableCheckData} tableData={tableData}>
                <TableBody>
                    {tableData?.tbodyData &&
                        tableData?.tbodyData.map((data) => (
                            <TableTr isChecked={data.checked} key={data.id}>
                                <TableTd
                                    onClick={
                                        tableData.checkComponent &&
                                        (data.buyStatus === 'pending' || data.buyStatus === '')
                                            ? () => onTdClick(data)
                                            : null
                                    }
                                >
                                    <div className="image">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="checked-td"
                                        >
                                            <path
                                                d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                                                fill="#005AFF"
                                            />
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M9.36982 5.27807C9.27447 5.1827 9.11986 5.1827 9.02449 5.27807L6.09899 8.2036L4.97447 7.07908C4.87912 6.98372 4.72452 6.98373 4.62914 7.07908C4.53378 7.17444 4.53378 7.32904 4.62914 7.42441L5.92632 8.72157C6.02165 8.81692 6.17637 8.81686 6.27165 8.72157L9.36982 5.6234C9.46519 5.52804 9.46518 5.37343 9.36982 5.27807Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width="4.88372"
                                                        height="4.88372"
                                                        fill="white"
                                                        transform="translate(4.55762 4.55811)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        {/* <img src={`data:image/jpeg;base64,${data.img}`} alt="" /> */}
                                    </div>
                                    <div className="text">{data.status}</div>
                                </TableTd>
                                <TableTd>
                                    <div className="all-texts">
                                        {data.codes.map((code, index) => (
                                            <div key={index} className="text">
                                                {code}
                                            </div>
                                        ))}
                                    </div>
                                </TableTd>
                                <TableTd>
                                    <div className="text">
                                        <p>{data.priceAzn}</p>
                                    </div>
                                </TableTd>
                                <TableTd>
                                    <div className="text">{data.where}</div>
                                </TableTd>
                                <TableTd>
                                    <div className="text">{data.name}</div>
                                </TableTd>
                                <TableTd>
                                    <div className="detailed-view">Detallı Bax</div>
                                </TableTd>
                                <TableTd>
                                    <div className="buy-status">
                                        {data.buyStatus === 'paid' ? (
                                            <div className="status paid">Ödənilib</div>
                                        ) : data.buyStatus === 'pending' ? (
                                            <div className="status pending">Ödə</div>
                                        ) : (
                                            <div className="status">Çəki təyin edilməyib</div>
                                        )}
                                    </div>
                                </TableTd>
                            </TableTr>
                        ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Courier;
