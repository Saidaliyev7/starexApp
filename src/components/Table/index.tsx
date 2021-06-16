import './table.scss';

import * as React from 'react';

import { ITableData } from './table.interface';
import TableFilters from './TableFilters';
import TableSearch from './TableSearch';
import TableHead from './THead';

const Table: React.FC<{ tableData: ITableData; children,tableCheckedData? }> = ({ tableData, children,tableCheckedData }) => {
    return (
        <>
            <TableSearch  placeholder={tableData.searchPlaceHolder} />
            <div className="table-component-holder">
                <TableFilters tableCheckData={tableCheckedData} selectData={tableData.selectboxData} />
                <div className="table">
                    <table>
                        <TableHead heads={tableData.thead} />
                        {children}
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;
