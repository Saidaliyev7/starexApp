import './tableTr.scss';

import * as React from 'react';

const TableTr: React.FC<{
    children;
    isChecked: boolean;
}> = React.memo(({ children, isChecked }) => (
    <tr className={isChecked ? 'checked' : ''}>{children}</tr>
));

export default TableTr;
