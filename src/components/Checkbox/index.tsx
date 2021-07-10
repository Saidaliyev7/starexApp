import './checkbox.scss';

import * as React from 'react';

const Checkbox: React.FC<{ message: string }> = ({ message }) => {
    const [checkIsActive, changeCheck] = React.useState<boolean>(false);
    const onCheck = () => {
        checkIsActive ? changeCheck(false) : changeCheck(true);
    };
    return (
        <>
            <div
                className={checkIsActive ? 'checkbox-holder active' : 'checkbox-holder'}
                onClick={onCheck}
            >
                <div className="check">
                    <div className="icon">
                        <svg
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.8243 0.254848C11.59 0.0205195 11.2101 0.0205195 10.9757 0.254848L3.78737 7.44329L1.02428 4.6802C0.789972 4.44587 0.410097 4.4459 0.175746 4.6802C-0.058582 4.91451 -0.058582 5.29438 0.175746 5.52871L3.3631 8.71602C3.59734 8.95033 3.97749 8.95016 4.21164 8.71602L11.8243 1.10338C12.0586 0.869074 12.0586 0.489176 11.8243 0.254848Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="message-box">{message}</div>
            </div>
        </>
    );
};

export default Checkbox;
