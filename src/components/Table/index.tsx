import './table.scss';

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
    return (
        <>
            <div className="table-with-all-components-holder">
                {tableData.search && (
                    <TableSearch
                        tableSearch={tableData.search}
                        onSearchAddClick={onSearchAddClick}
                    />
                )}
                <div className="table-component-holder">
                    {tableData?.selectboxData && (
                        <TableFilters
                            tableCheckData={tableCheckedData}
                            selectData={tableData?.selectboxData}
                        />
                    )}
                    <div className="table">
                        <table>
                            <TableHead heads={tableData.thead} />
                            {children}
                        </table>
                    </div>
                    {paginationComponent}
                </div>
            </div>
        </>
    );
};

export default Table;
