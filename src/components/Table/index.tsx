import './table.scss';

import * as React from 'react';

import Pagination from './Pagination';
import { ITableData } from './table.interface';
import TableFilters from './TableFilters';
import TableSearch from './TableSearch';
import TableHead from './THead';

const Table: React.FC<{ tableData: ITableData; children; tableCheckedData?,onSearchAddClick? }> = ({
    tableData,
    children,
    tableCheckedData,
    onSearchAddClick
}) => {
    return (
        <>
            <div className="table-with-all-components-holder">
            {tableData.search && <TableSearch tableSearch={tableData.search} onSearchAddClick={onSearchAddClick} />}
            <div className="table-component-holder">
                <TableFilters
                    tableCheckData={tableCheckedData}
                    selectData={tableData.selectboxData}
                    tableData={tableData}
                />
                <div className="table">
                    <table>
                        <TableHead heads={tableData.thead} />
                        {children}
                    </table>
                </div>
                <Pagination />
            </div>
            </div>
           
        </>
    );
};

export default Table;
