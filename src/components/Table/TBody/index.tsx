import './tableBody.scss';

import * as React from 'react';

const TableBody: React.FC<{ children }> = React.memo(({ children }) => {
    return (
        <>
            <tbody>{children}</tbody>
        </>
    );
});

export default TableBody;
