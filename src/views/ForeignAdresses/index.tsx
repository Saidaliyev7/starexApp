import './foreignAdresses.scss'

import Accardion from 'components/Accardion'
import * as React from 'react';

const ForeignAdresses: React.FC = () => {
    return <>
        <div className="foreign-adresses-holder">
            <div className="top">
                <div className="forbidden">
                Daşınması qadağan olunan məhsullar
                </div>
            </div>
            <div className="bottom">
                    <Accardion />
            </div>
        </div>
    </>;
};

export default ForeignAdresses;
