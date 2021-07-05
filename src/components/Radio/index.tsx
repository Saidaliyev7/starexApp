import './radio.scss';

import * as React from 'react';
import { IRadio } from 'views/Satisfaction';

const Radio: React.FC<{ radio: IRadio; onClick }> = ({ radio, onClick }) => {
    return (
        <>
            <div className="radio-holder">
                <div className="radio-title">{radio.title}</div>
                <div className="radios">
                    <ul>
                        {radio.radios &&
                            radio.radios.map((radioElement) => (
                                <li
                                    onClick={() =>
                                        !radioElement.isActive
                                            ? onClick(radio.id, radioElement)
                                            : null
                                    }
                                    className={radioElement.isActive ? ' active' : ''}
                                    key={radioElement.id}
                                >
                                    <div className="icon">
                                        <div className="active-icon"></div>
                                    </div>
                                    <div className="name">{radioElement.name}</div>
                                </li>
                            ))}
                    </ul>
                </div>
               
            </div>
        </>
    );
};

export default Radio;
