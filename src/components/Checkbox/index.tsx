import './checkbox.scss';

import * as React from 'react';

const Checkbox: React.FC<{message:string}> = ({message}) => {
    const [checkIsActive, changeCheck] = React.useState<boolean>(false);
    const onCheck = () => {
        checkIsActive ? changeCheck(false) : changeCheck(true);
    };
    return (
        <>
            <div
                className={checkIsActive ? 'checkbox-holder active' : 'checkIsActive'}
                onClick={onCheck}
            >
                <div className="check"></div>
                <div className="message">{message}</div>
            </div>
        </>
    );
};

export default Checkbox;
