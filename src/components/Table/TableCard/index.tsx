// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableCard.scss';

import * as React from 'react';

const TableCard: React.FC<{ children }> = React.memo(({ children }) => {
    return (
        <>
            <div className="table-card-holder" >{children}</div>
        </>
    );
});

export default TableCard;
