// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableTd.scss';

import * as React from 'react';

const TableTd: React.FC<{ children: any,onClick? }> = ({ children,onClick }) => {
    return (
        <>
            <td onClick={onClick}>
                <div className="td-holder">
                    {children}
                </div>
            </td>
        </>
    );
};

export default TableTd;
