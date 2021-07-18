import './multiSelectbox.scss';

import { useOnClickOutside } from 'hooks';
import * as React from 'react';

export interface IMultiSelectboxItem {
    id: string | number;
    name: string;
}

const Selectbox: React.FC<{
    options: IMultiSelectboxItem[];
    onChange?: (value: IMultiSelectboxItem[]) => void;
    value?: IMultiSelectboxItem[];
    placeholder?: string;
    lastItemRef?: any;
}> = ({ options, onChange, value, placeholder, lastItemRef }) => {
    const selectRef = React.useRef();
    const [dropdownData, changeDropdownDatas] = React.useState(value || []);
    const onSelectOpen = () => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;
        parentClasslist.toggle('active');
    };

    useOnClickOutside(selectRef, () => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;
        parentClasslist.remove('active');
    });

    const onSelectChange = (el) => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;

        parentClasslist.toggle('active');

        if (dropdownData.includes(el)) {
            removeClicked(el);
        } else {
            changeDropdownDatas((oldState) => {
                const newState = [...oldState];
                newState.push(el);
                return newState;
            });
        }
    };

    const removeAllSelectDatas = () => {
        changeDropdownDatas([]);
    };

    const removeClicked = (el) => {
        changeDropdownDatas((oldState) => {
            const newState = [...oldState].filter((element) => element.name !== el.name);
            return newState;
        });
    };

    React.useEffect(() => {
        onChange?.(dropdownData);
    }, [dropdownData]);

    return (
        <>
            <div className="selectbox-holder multi-select">
                <div className="selectbox" ref={selectRef}>
                    <div className="selectbox-top">
                        {dropdownData && dropdownData.length > 0 ? (
                            <ul className="multi-select-list">
                                {dropdownData.map((el, index) => (
                                    <>
                                        {index + 1 !== dropdownData.length ? (
                                            <li key={el.name}>
                                                <div className="dropdown-top">
                                                    {el.name}

                                                    <div
                                                        onClick={() => removeClicked(el)}
                                                        className="remove-icon"
                                                    >
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 15 15"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10.6068 9.89947L7.77842 7.07109L10.6069 4.24264C10.802 4.04752 10.802 3.7307 10.6068 3.53551C10.4117 3.34039 10.0949 3.34039 9.89974 3.53551L7.07129 6.36396L4.24284 3.53551C4.04772 3.34039 3.7309 3.34039 3.53578 3.53551C3.34059 3.7307 3.34059 4.04752 3.53571 4.24264L6.36416 7.07109L3.53578 9.89947C3.34059 10.0947 3.34059 10.4115 3.53571 10.6066C3.7309 10.8018 4.04772 10.8018 4.24291 10.6066L7.07129 7.77822L9.89967 10.6066C10.0949 10.8018 10.4117 10.8018 10.6069 10.6066C10.802 10.4115 10.802 10.0947 10.6068 9.89947Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </li>
                                        ) : (
                                            <li ref={lastItemRef} key={el.name}>
                                                <div className="dropdown-top">
                                                    {el.name}

                                                    <div
                                                        onClick={() => removeClicked(el)}
                                                        className="remove-icon"
                                                    >
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 15 15"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10.6068 9.89947L7.77842 7.07109L10.6069 4.24264C10.802 4.04752 10.802 3.7307 10.6068 3.53551C10.4117 3.34039 10.0949 3.34039 9.89974 3.53551L7.07129 6.36396L4.24284 3.53551C4.04772 3.34039 3.7309 3.34039 3.53578 3.53551C3.34059 3.7307 3.34059 4.04752 3.53571 4.24264L6.36416 7.07109L3.53578 9.89947C3.34059 10.0947 3.34059 10.4115 3.53571 10.6066C3.7309 10.8018 4.04772 10.8018 4.24291 10.6066L7.07129 7.77822L9.89967 10.6066C10.0949 10.8018 10.4117 10.8018 10.6069 10.6066C10.802 10.4115 10.802 10.0947 10.6068 9.89947Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </>
                                ))}
                            </ul>
                        ) : (
                            placeholder && <div className="placeholder">{placeholder}</div>
                        )}
                        <div className="remove-all-icon" onClick={removeAllSelectDatas}>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6068 9.89947L7.77842 7.07109L10.6069 4.24264C10.802 4.04752 10.802 3.7307 10.6068 3.53551C10.4117 3.34039 10.0949 3.34039 9.89974 3.53551L7.07129 6.36396L4.24284 3.53551C4.04772 3.34039 3.7309 3.34039 3.53578 3.53551C3.34059 3.7307 3.34059 4.04752 3.53571 4.24264L6.36416 7.07109L3.53578 9.89947C3.34059 10.0947 3.34059 10.4115 3.53571 10.6066C3.7309 10.8018 4.04772 10.8018 4.24291 10.6066L7.07129 7.77822L9.89967 10.6066C10.0949 10.8018 10.4117 10.8018 10.6069 10.6066C10.802 10.4115 10.802 10.0947 10.6068 9.89947Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div className="icon" onClick={onSelectOpen}>
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
                            {options.map((el, index) => (
                                <li
                                    key={index}
                                    onClick={() => onSelectChange(el)}
                                    className={dropdownData.includes(el) ? 'active' : ''}
                                >
                                    {el.name}
                                    {dropdownData.includes(el) && (
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
