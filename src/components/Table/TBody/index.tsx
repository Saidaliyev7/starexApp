// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableBody.scss';

import * as React from 'react';

const TableBody: React.FC<{ children }> = ({ children }) => {
    return (
        <>
            <tbody>
                {children}
            </tbody>
        </>
    );
};

export default TableBody;
