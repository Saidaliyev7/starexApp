import './accardion.scss';

import * as React from 'react';

import AccardionBottom from './AccardionBottom';
import AccardionTop from './AccardionTop';

const Accardion: React.FC = React.memo(() => {
    return (
        <>
            <div className="accardion-holder">
                <AccardionTop />
                <AccardionBottom />
            </div>
        </>
    );
});

export default Accardion;
