import './tableFilters.scss';

import moment from 'moment';
import * as React from 'react';
import RangePicker from 'react-range-picker';

import { ISelectbox, ITableData } from '../table.interface';

const TableFilters: React.FC<{
    selectData: ISelectbox[];
    tableCheckData: any;
    tableData: ITableData;
}> = ({ selectData, tableCheckData, tableData }) => {
    const selectRef = React.useRef();
    const [checkedData, changeCheckedData] = React.useState(null);
    const [isAllPending, changeAllPending] = React.useState<boolean>(false);
    const [defaultValueForPicker, changePickerValue] = React.useState(null);
    const [select, changeSelect] = React.useState<{
        activeSelectData: ISelectbox;
        dropdownData: ISelectbox[];
    }>(null);

    React.useEffect(() => {
        changeSelect({
            activeSelectData: selectData.filter((el) => el.isActive === true)[0],
            dropdownData: selectData,
        });
    }, []);

    React.useEffect(() => {
        changeCheckedData(tableCheckData);
        const allPendings = tableCheckData.filter(
            (checkedData) => checkedData.buyStatus == 'pending',
        );
        const pendingsCheck = allPendings.length === tableCheckData.length;
        pendingsCheck ? changeAllPending(pendingsCheck) : changeAllPending(pendingsCheck);
    }, [tableCheckData]);

    const onSelectOpen = () => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;
        parentClasslist.contains('active')
            ? parentClasslist.remove('active')
            : parentClasslist.add('active');
    };
    const onSelectChange = (selectData: ISelectbox) => {
        const target = selectRef.current as HTMLElement;
        const parentClasslist = target.classList;
        parentClasslist.contains('active')
            ? parentClasslist.remove('active')
            : parentClasslist.add('active');
        selectData.isActive !== true &&
            changeSelect((oldState) => {
                const newStateData = oldState.dropdownData.map((el) => {
                    el.name === selectData.name ? (el.isActive = true) : (el.isActive = false);
                    return el;
                });
                return {
                    dropdownData: newStateData,
                    activeSelectData: selectData,
                };
            });
    };

    const placeholder = ({ startDate, endDate }) => {
        if (!startDate) {
            return (
                <div className="placeholder">
                    Tarix seçin
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
                        </svg>
                    </div>
                </div>
            );
        }
        return (
            <div className="placeholderWrap">
                <div className="placeholder">{moment(startDate).format('DD/MM/yyyy')}</div>
                <div className="separator">-</div>
                {endDate && (
                    <div className="placeholder">{moment(endDate).format('DD/MM/yyyy')}</div>
                )}
                <div className="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
                    </svg>
                </div>
            </div>
        );
    };

    const takeLastThirtyDays = () => {
        changePickerValue({ startDate: Date(), endDate: Date() });
    };

    //TODO onChange date send to upper component
    const onDateSelect = (...params) => {};

    return (
        <>
            <div className="table-filters-holder">
                <div className="upper">
                    <div className="selectbox-holder">
                        {select && (
                            <div className="selectbox" ref={selectRef}>
                                <div className="selectbox-top" onClick={onSelectOpen}>
                                    {select.activeSelectData.name}
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
                                        {select.dropdownData.map((el, index) => (
                                            <li
                                                key={index}
                                                onClick={() => onSelectChange(el)}
                                                className={el.isActive ? 'active' : ''}
                                            >
                                                {el.name} ({el.count})
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
                        )}

                        {tableData.isBalance && (
                            <div className="is-balance-type">
                                <ul>
                                    <li>
                                        <div className="icon active"></div>
                                        <div className="text">Mədaxil</div>
                                    </li>
                                    <li>
                                        <div className="icon"></div>
                                        <div className="text">Məxaric</div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="datepicker-holder">
                        <div className="last-days" onClick={takeLastThirtyDays}>
                            Son 30 gün
                        </div>
                        <div className="datepicker">
                            <RangePicker
                                onDateSelected={onDateSelect}
                                defaultBalue={defaultValueForPicker}
                                placeholder={placeholder}
                            />
                        </div>
                    </div>
                </div>

                {checkedData && checkedData.length > 0 && (
                    <div className="bottom">
                        <div className="left">
                            <div className="icon">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                                        fill="white"
                                    />
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M9.36982 5.27807C9.27447 5.1827 9.11986 5.1827 9.02449 5.27807L6.09899 8.2036L4.97447 7.07908C4.87912 6.98372 4.72452 6.98373 4.62914 7.07908C4.53378 7.17444 4.53378 7.32904 4.62914 7.42441L5.92632 8.72157C6.02165 8.81692 6.17637 8.81686 6.27165 8.72157L9.36982 5.6234C9.46519 5.52804 9.46518 5.37343 9.36982 5.27807Z"
                                            fill="#005FB5"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect
                                                width="4.88372"
                                                height="4.88372"
                                                fill="white"
                                                transform="translate(4.55762 4.55811)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="count">{checkedData.length}</div>
                        </div>
                        <div className="right">
                            {isAllPending ? (
                                <>
                                    <div className="all-pending">
                                        <button>Toplam Ödə</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <ul>
                                        <li>
                                            <div className="edit-icon">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.198 0.803C14.6802 0.285187 13.9917 0 13.2594 0C12.5272 0 11.8387 0.285187 11.3209 0.803L1.31082 10.8131C1.25135 10.8725 1.20729 10.9473 1.18479 11.0313L0.0175681 15.3875C-0.0274319 15.5554 0.0205994 15.7345 0.143506 15.8574C0.235943 15.9499 0.360224 16 0.487568 16C0.529537 16 0.57185 15.9946 0.613475 15.9834L4.96966 14.8162C5.05366 14.7937 5.12844 14.7497 5.18788 14.6902L15.1979 4.68013C15.7158 4.16231 16.0009 3.47388 16.0009 2.74159C16.0009 2.00925 15.7158 1.32081 15.198 0.803ZM10.9981 2.50213L11.9043 3.40834L3.24913 12.0634L2.34291 11.1572L10.9981 2.50213ZM1.17572 14.8253L1.90669 12.0972L3.90376 14.0943L1.17572 14.8253ZM4.84373 13.658L3.93726 12.7516L12.5924 4.09644L13.4988 5.00284L4.84373 13.658ZM14.5099 3.99197L14.187 4.31481L11.6862 1.814L12.0091 1.49116C12.343 1.15716 12.7871 0.973188 13.2594 0.973188C13.7318 0.973188 14.1759 1.15716 14.5099 1.49116C15.1993 2.18059 15.1993 3.3025 14.5099 3.99197Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text">Redaktə et</div>
                                        </li>
                                        <li>
                                            <div className="edit-icon">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0)">
                                                        <path
                                                            d="M10.2067 5.79639C9.99977 5.79639 9.83203 5.96413 9.83203 6.17109V13.2531C9.83203 13.4599 9.99977 13.6278 10.2067 13.6278C10.4137 13.6278 10.5814 13.4599 10.5814 13.2531V6.17109C10.5814 5.96413 10.4137 5.79639 10.2067 5.79639Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M5.78535 5.79639C5.57838 5.79639 5.41064 5.96413 5.41064 6.17109V13.2531C5.41064 13.4599 5.57838 13.6278 5.78535 13.6278C5.99232 13.6278 6.16006 13.4599 6.16006 13.2531V6.17109C6.16006 5.96413 5.99232 5.79639 5.78535 5.79639Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M2.56276 4.76287V13.9948C2.56276 14.5405 2.76285 15.0529 3.11238 15.4206C3.4603 15.7893 3.94449 15.9986 4.45122 15.9995H11.5408C12.0477 15.9986 12.5319 15.7893 12.8796 15.4206C13.2292 15.0529 13.4292 14.5405 13.4292 13.9948V4.76287C14.1241 4.57844 14.5743 3.90719 14.4813 3.19422C14.3883 2.4814 13.781 1.94818 13.062 1.94803H11.1435V1.47965C11.1457 1.08577 10.99 0.707551 10.7112 0.429302C10.4323 0.1512 10.0535 -0.00365918 9.65964 -0.000439048H6.33237C5.93848 -0.00365918 5.55968 0.1512 5.28085 0.429302C5.00201 0.707551 4.84627 1.08577 4.84847 1.47965V1.94803H2.93C2.21104 1.94818 1.60375 2.4814 1.51066 3.19422C1.41771 3.90719 1.86795 4.57844 2.56276 4.76287ZM11.5408 15.2501H4.45122C3.81056 15.2501 3.31217 14.6998 3.31217 13.9948V4.7958H12.6798V13.9948C12.6798 14.6998 12.1814 15.2501 11.5408 15.2501ZM5.59788 1.47965C5.59539 1.28454 5.67209 1.09675 5.81056 0.959014C5.94888 0.82128 6.13711 0.745607 6.33237 0.748973H9.65964C9.8549 0.745607 10.0431 0.82128 10.1814 0.959014C10.3199 1.0966 10.3966 1.28454 10.3941 1.47965V1.94803H5.59788V1.47965ZM2.93 2.69744H13.062C13.4345 2.69744 13.7365 2.99941 13.7365 3.37192C13.7365 3.74443 13.4345 4.04639 13.062 4.04639H2.93C2.55749 4.04639 2.25553 3.74443 2.25553 3.37192C2.25553 2.99941 2.55749 2.69744 2.93 2.69744Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M7.99629 5.79639C7.78932 5.79639 7.62158 5.96413 7.62158 6.17109V13.2531C7.62158 13.4599 7.78932 13.6278 7.99629 13.6278C8.20325 13.6278 8.37099 13.4599 8.37099 13.2531V6.17109C8.37099 5.96413 8.20325 5.79639 7.99629 5.79639Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect
                                                                width="16"
                                                                height="16"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="text">Redaktə et</div>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TableFilters;
