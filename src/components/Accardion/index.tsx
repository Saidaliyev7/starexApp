
import './accardion.scss';

import * as React from 'react';

import AccardionTop from './AccardionTop';



const Accardion: React.FC = React.memo(() => {
    return (
        <>
        <div className="accardion-holder">
        <AccardionTop />
        </div>
           
        </>
    );
});

export default Accardion;
