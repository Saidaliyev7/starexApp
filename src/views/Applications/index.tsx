import Chat from 'components/Chat';
import Table from 'components/Table';
import { ITableData, tableStaticDataApplications } from 'components/Table/models';
import TableCard from 'components/Table/TableCard';
import TableBody from 'components/Table/TBody';
import TableTd from 'components/Table/TBody/Td';
import TableTr from 'components/Table/TBody/Tr';
import { useIsTabletOrMobileV2 } from 'hooks';
import * as React from 'react';

import ApplicationForm from './ApplicationForm';

const Applications: React.FC = () => {
    const [tableData, changeTableData] = React.useState<ITableData<any>>(
        tableStaticDataApplications,
    );
    const [isNewApplication, changeApplication] = React.useState<boolean>(false);
    const isTabletOrMobile = useIsTabletOrMobileV2();
    React.useEffect(() => {
        changeTableData(tableStaticDataApplications);
    }, []);

    const onSarchAdd = (isAdd: boolean) => {
        changeApplication(isAdd);
    };

    return (
        <>
            {!isNewApplication ? (
                <Table
                    onSearchAddClick={() => onSarchAdd(true)}
                    tableCheckedData={[]}
                    tableData={tableData}
                >
                    {
                        !isTabletOrMobile? <TableBody>
                        {tableData?.tbodyData &&
                            tableData?.tbodyData.map((data) => (
                                <TableTr isChecked={data.checked} key={data.id}>
                                    <TableTd>
                                        <div className="image">
                                            {/* <img src={`data:image/jpeg;base64,${data.img}`} alt="" /> */}
                                            <svg
                                                width="14"
                                                height="15"
                                                viewBox="0 0 14 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0)">
                                                    <path
                                                        d="M7 14.0933C10.866 14.0933 14 10.9384 14 7.04665C14 3.15489 10.866 0 7 0C3.13401 0 0 3.15489 0 7.04665C0 10.9384 3.13401 14.0933 7 14.0933Z"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M6.69629 7.04676H14.0006C14.0006 6.41075 13.9164 5.79461 13.7595 5.2085H6.69629V7.04676Z"
                                                        fill="#D80027"
                                                    />
                                                    <path
                                                        d="M6.69629 3.37001H12.9732C12.5447 2.66611 11.9968 2.04394 11.358 1.53174H6.69629V3.37001Z"
                                                        fill="#D80027"
                                                    />
                                                    <path
                                                        d="M6.99997 14.0934C8.6474 14.0934 10.1616 13.5202 11.3574 12.5615H2.64258C3.83832 13.5202 5.35253 14.0934 6.99997 14.0934Z"
                                                        fill="#D80027"
                                                    />
                                                    <path
                                                        d="M1.02748 10.723H12.9727C13.3167 10.158 13.5835 9.54027 13.7589 8.88477H0.241211C0.416676 9.54027 0.683469 10.158 1.02748 10.723Z"
                                                        fill="#D80027"
                                                    />
                                                    <path
                                                        d="M3.24253 1.10043H3.88043L3.28707 1.53438L3.51373 2.23654L2.92039 1.80259L2.32706 2.23654L2.52284 1.62995C2.00041 2.06803 1.54252 2.58128 1.16517 3.15316H1.36957L0.991867 3.42938C0.933023 3.5282 0.876586 3.62858 0.8225 3.73046L1.00286 4.28926L0.666367 4.04315C0.582723 4.22155 0.506215 4.40396 0.437445 4.59018L0.636152 5.20588H1.36957L0.776207 5.63983L1.00286 6.34199L0.409527 5.90804L0.0541133 6.16799C0.0185391 6.45586 0 6.74907 0 7.04665H7C7 3.15492 7 2.69611 7 0C5.61717 0 4.32811 0.403806 3.24253 1.10043ZM3.51373 6.34199L2.92039 5.90804L2.32706 6.34199L2.55371 5.63983L1.96036 5.20588H2.69377L2.92039 4.50372L3.14702 5.20588H3.88043L3.28707 5.63983L3.51373 6.34199ZM3.28707 3.5871L3.51373 4.28926L2.92039 3.85532L2.32706 4.28926L2.55371 3.5871L1.96036 3.15316H2.69377L2.92039 2.451L3.14702 3.15316H3.88043L3.28707 3.5871ZM6.02459 6.34199L5.43126 5.90804L4.83793 6.34199L5.06458 5.63983L4.47122 5.20588H5.20464L5.43126 4.50372L5.65789 5.20588H6.3913L5.79794 5.63983L6.02459 6.34199ZM5.79794 3.5871L6.02459 4.28926L5.43126 3.85532L4.83793 4.28926L5.06458 3.5871L4.47122 3.15316H5.20464L5.43126 2.451L5.65789 3.15316H6.3913L5.79794 3.5871ZM5.79794 1.53438L6.02459 2.23654L5.43126 1.80259L4.83793 2.23654L5.06458 1.53438L4.47122 1.10043H5.20464L5.43126 0.398273L5.65789 1.10043H6.3913L5.79794 1.53438Z"
                                                        fill="#0052B4"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect
                                                            width="14"
                                                            height="14.0933"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="text">{data.category}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.country}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="text">{data.time}</div>
                                    </TableTd>
                                    <TableTd>
                                        <div
                                            className={
                                                data.status === 'Qəbul edildi'
                                                    ? 'text status-active'
                                                    : 'text'
                                            }
                                        >
                                            {data.status}
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="detailed-view">Detallı Bax</div>
                                    </TableTd>
                                </TableTr>
                            ))}
                    </TableBody>:<>
                    {tableData?.tbodyData.map((data) => (
                        <TableCard   key={data.id}>
                         
                            <div className="card-data-upper" >
                                <div className="card-data">
                                    <div className="image">
                                        <svg
                                            width="14"
                                            height="15"
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M7 14.0933C10.866 14.0933 14 10.9384 14 7.04665C14 3.15489 10.866 0 7 0C3.13401 0 0 3.15489 0 7.04665C0 10.9384 3.13401 14.0933 7 14.0933Z"
                                                    fill="#F0F0F0"
                                                />
                                                <path
                                                    d="M6.69629 7.04676H14.0006C14.0006 6.41075 13.9164 5.79461 13.7595 5.2085H6.69629V7.04676Z"
                                                    fill="#D80027"
                                                />
                                                <path
                                                    d="M6.69629 3.37001H12.9732C12.5447 2.66611 11.9968 2.04394 11.358 1.53174H6.69629V3.37001Z"
                                                    fill="#D80027"
                                                />
                                                <path
                                                    d="M6.99997 14.0934C8.6474 14.0934 10.1616 13.5202 11.3574 12.5615H2.64258C3.83832 13.5202 5.35253 14.0934 6.99997 14.0934Z"
                                                    fill="#D80027"
                                                />
                                                <path
                                                    d="M1.02748 10.723H12.9727C13.3167 10.158 13.5835 9.54027 13.7589 8.88477H0.241211C0.416676 9.54027 0.683469 10.158 1.02748 10.723Z"
                                                    fill="#D80027"
                                                />
                                                <path
                                                    d="M3.24253 1.10043H3.88043L3.28707 1.53438L3.51373 2.23654L2.92039 1.80259L2.32706 2.23654L2.52284 1.62995C2.00041 2.06803 1.54252 2.58128 1.16517 3.15316H1.36957L0.991867 3.42938C0.933023 3.5282 0.876586 3.62858 0.8225 3.73046L1.00286 4.28926L0.666367 4.04315C0.582723 4.22155 0.506215 4.40396 0.437445 4.59018L0.636152 5.20588H1.36957L0.776207 5.63983L1.00286 6.34199L0.409527 5.90804L0.0541133 6.16799C0.0185391 6.45586 0 6.74907 0 7.04665H7C7 3.15492 7 2.69611 7 0C5.61717 0 4.32811 0.403806 3.24253 1.10043ZM3.51373 6.34199L2.92039 5.90804L2.32706 6.34199L2.55371 5.63983L1.96036 5.20588H2.69377L2.92039 4.50372L3.14702 5.20588H3.88043L3.28707 5.63983L3.51373 6.34199ZM3.28707 3.5871L3.51373 4.28926L2.92039 3.85532L2.32706 4.28926L2.55371 3.5871L1.96036 3.15316H2.69377L2.92039 2.451L3.14702 3.15316H3.88043L3.28707 3.5871ZM6.02459 6.34199L5.43126 5.90804L4.83793 6.34199L5.06458 5.63983L4.47122 5.20588H5.20464L5.43126 4.50372L5.65789 5.20588H6.3913L5.79794 5.63983L6.02459 6.34199ZM5.79794 3.5871L6.02459 4.28926L5.43126 3.85532L4.83793 4.28926L5.06458 3.5871L4.47122 3.15316H5.20464L5.43126 2.451L5.65789 3.15316H6.3913L5.79794 3.5871ZM5.79794 1.53438L6.02459 2.23654L5.43126 1.80259L4.83793 2.23654L5.06458 1.53438L4.47122 1.10043H5.20464L5.43126 0.398273L5.65789 1.10043H6.3913L5.79794 1.53438Z"
                                                    fill="#0052B4"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width="14"
                                                        height="14.0933"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="text">{data.category}</div>
                                </div>
                                <div className="card-data">
                                    <div className="text">{data.country}</div>
                                </div>
                                <div className="card-data">
                                    <div className="text">{data.time}</div>
                                </div>
                                <div className="card-data">
                                <div
                                            className={
                                                data.status === 'Qəbul edildi'
                                                    ? 'text status-active'
                                                    : 'text'
                                            }
                                        >
                                            {data.status}
                                        </div>
                                </div>
                            </div>

                        </TableCard>
                    ))}
                    <div className="pay-all"></div>
                </>
                    }
                   
                </Table>
            ) : (
                <>
                  <ApplicationForm />
                    {
                        false&&   <Chat></Chat>
                    }
                </>
              
            )}
        </>
    );
};

export default Applications;
