// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableTr.scss';

import * as React from 'react';

const TableTr: React.FC<{ children,isChecked:boolean }> = ({ children,isChecked }) => {

    return (
        <>
            <tr className={isChecked?'checked':''}>
                {children}
            </tr>
        </>
    );
};

export default TableTr;
