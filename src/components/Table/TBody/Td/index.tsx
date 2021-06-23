import './tableTd.scss';

import * as React from 'react';

const TableTd: React.FC<{ children: any; onClick? }> = React.memo(({ children, onClick }) => {
    return (
        <>
            <td onClick={onClick}>
                <div className="td-holder">{children}</div>
            </td>
        </>
    );
});

export default TableTd;
