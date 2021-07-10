import './table.scss';

import { useIsTabletOrMobileV2 } from 'hooks';
import * as React from 'react';

import { ITableData } from './models';
import TableFilters from './TableFilters';
import TableSearch from './TableSearch';
import TableHead from './THead';

interface IProps {
    tableData: ITableData<any>;
    tableCheckedData?: any[];
    onSearchAddClick?: () => void;
    paginationComponent?: JSX.Element;
}

const Table: React.FC<IProps> = ({
    tableData,
    children,
    tableCheckedData,
    onSearchAddClick,
    paginationComponent,
}) => {
    const isTabletOrMobile = useIsTabletOrMobileV2();
    return (
        <>
            <div className="table-with-all-components-holder">
                {onSearchAddClick && <TableSearch onSearchAddClick={onSearchAddClick} />}
                <div className="table-component-holder">
                    {tableData?.selectboxData && (
                        <TableFilters
                            tableCheckData={tableCheckedData}
                            selectData={tableData?.selectboxData}
                            handleSelectChange={tableData?.handleSelectChange}
                        />
                    )}

                    {!isTabletOrMobile ? (
                        <>
                            <div className="table">
                                <table>
                                    <TableHead heads={tableData.thead} />
                                    {children}
                                </table>
                            </div>
                            {paginationComponent}
                        </>
                    ) : (
                        <>{children}</>
                    )}
                </div>
            </div>
        </>
    );
};

export default Table;
