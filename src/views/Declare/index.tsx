import './declare.scss';

import DeclareBottom from 'components/Declare/DeclareBottom';
import * as React from 'react';

import DeclareTop from './DeclareTop';


const inputData={
    languageId:1,
    inputs:[
        {
            placeHolder:'Mağazanın adı',
            title:'Mağaza'
        },

    ]
}


const Declare: React.FC = () => {
    return (
        <>
            <div className="declare-holder">
                <div className="content">
                        <DeclareTop />
                        <DeclareBottom inputsData={inputData} />
                </div>
            </div>
        </>
    );
};

export default Declare;
