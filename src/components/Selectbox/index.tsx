import './selectbox.scss';

import * as React from 'react';

const Selectbox: React.FC<{ selectData: any; onClick? }> = ({ selectData, onClick }) => {
    const selectRef = React.useRef();
    const [selectTop,changeSelectTop]=React.useState<string>(null)
    const [select, changeSelect] = React.useState();
    const onSelectOpen = () => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;
        parentClasslist.contains('active')
            ? parentClasslist.remove('active')
            : parentClasslist.add('active');
    };

    const onSelectChange = (el) => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;
        parentClasslist.contains('active')
            ? parentClasslist.remove('active')
            : parentClasslist.add('active');
            changeSelectTop(el.name);
    };

    return (
        <>
            <div className="selectbox-holder select-component">
                <div className="selectbox" ref={selectRef}>
                    <div className="selectbox-top" onClick={onSelectOpen}>
                        {selectTop}
                        <div className="icon">
                            <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M6.23922 9.92184L11.9 4.29462C12.0333 4.16213 12.0333 3.94964 11.9 3.81714C11.7668 3.68465 11.553 3.68465 11.4197 3.81714L6.00031 9.20438L0.580918 3.81714C0.447634 3.68465 0.233876 3.68465 0.100592 3.81714C0.0352068 3.88214 3.02136e-09 3.96964 4.04098e-09 4.05463C5.06059e-09 4.13963 0.032692 4.22712 0.100592 4.29212L5.76141 9.91934C5.89218 10.0518 6.10845 10.0518 6.23922 9.92184Z"
                                        fill="#005AFF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect
                                            width="11.9288"
                                            height="12"
                                            fill="white"
                                            transform="translate(12 0.904297) rotate(90)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="selectbox-bottom">
                        <ul>
                            {selectData.dropdownData.map((el, index) => (
                                <li
                                    key={index}
                                    onClick={() => onSelectChange(el)}
                                    className={el.isActive ? 'active' : ''}
                                >
                                    {el.name}
                                    {el.isActive && (
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
                                                    fill="#005AFF"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Selectbox;
