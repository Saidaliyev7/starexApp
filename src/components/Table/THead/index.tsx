// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableHead.scss';

import * as React from 'react';

const TableHead: React.FC<{heads:string[]}> = ({heads}) => {
    return (
        <>
            <thead className='table-component-head'>
                <tr>
                    {
                        heads.map((head,index)=>(
                            <th key={index}>
                                {head}
                            </th>
                        ))
                    }     
                </tr>
            </thead>
        </>
    );
};

export default TableHead;
