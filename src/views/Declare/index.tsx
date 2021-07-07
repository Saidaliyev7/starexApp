import './declare.scss';

import DeclareBottom from 'components/Declare/DeclareBottom';
import * as React from 'react';

import DeclareTop from './DeclareTop';

const Declare: React.FC = () => {
    return (
        <>
            <div className="declare-holder">
                <div className="content">
                        <DeclareTop />
                        <DeclareBottom />
                </div>
            </div>
        </>
    );
};

export default Declare;
