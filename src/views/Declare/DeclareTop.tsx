import { ReactComponent as TurkeyIcon } from 'assets/images/countries/turkey.svg';
import { countries, ICountry } from 'components/Accardion/AccardionTop';
import { useIsTabletOrMobileV2 } from 'hooks';
import * as React from 'react';

const DeclareTop: React.FC = () => {
    const selectTop = React.useRef();
    const [allCountries, changeCountries] = React.useState<ICountry[]>(countries);
    const [selectActive, changeSelectActive] = React.useState<ICountry>({
        id: 1,
        name: 'TÜRKİYƏ',
        icon: TurkeyIcon,
        isActive: true,
    });

    const isTabletOrMobile = useIsTabletOrMobileV2();

    const onAccardionSelect = (country: ICountry) => {
        !country.isActive && changeCountryState(country);
    };

    const changeCountryState = (country: ICountry) => {
        changeCountries((oldState) => {
            const newState = [...oldState].map((cntry) => {
                cntry.name == country.name ? (cntry.isActive = true) : (cntry.isActive = false);
                return cntry;
            });
            return newState;
        });
    };

    const openSelect = () => {
        const element = selectTop.current as HTMLDivElement;
        const classListElement = element.classList;
        classListElement.contains('active')
            ? classListElement.remove('active')
            : classListElement.add('active');
    };
    const selectItem = (country: ICountry) => {
        const element = selectTop.current as HTMLDivElement;
        const classListElement = element.classList;
        setTimeout(() => {
            classListElement.remove('active');
        }, 0);

        changeSelectActive(country);
        !country.isActive && changeCountryState(country);
    };
    return (
        <>
            <div className="declare-top-holder">
                <div className="title">Ölkəni Seçin</div>
                {!isTabletOrMobile ? (
                    <ul className='languages'>
                        {allCountries.map((country, index) => (
                            <li
                                key={index}
                                onClick={() => onAccardionSelect(country)}
                                className={country.isActive ? 'active' : ''}
                            >
                                <div className="icon">
                                    <country.icon />
                                </div>
                                <div className="text">{country.name}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <div className="accardion-select" ref={selectTop} onClick={openSelect}>
                            <div className="select-top">
                                <div className="icon">
                                    <selectActive.icon />
                                </div>
                                <div className="name">{selectActive.name}</div>
                                <div className="down-icon">
                                    <svg
                                        width="14"
                                        height="8"
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L6.95953 6.95953L12.9191 1"
                                            stroke="#434343"
                                            strokeWidth="0.66217"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="select-bottom">
                                <ul>
                                    {allCountries.map((country) => (
                                        <li
                                            key={country.id}
                                            onClick={() => selectItem(country)}
                                            className={country.isActive ? 'active' : ''}
                                        >
                                            <div className="name-holder">
                                                <div className="icon">
                                                    <country.icon />
                                                </div>
                                                <div className="name">{country.name}</div>
                                            </div>
                                            {country.isActive && (
                                                <div className="active-icon">
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
                                                        ></path>
                                                    </svg>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default DeclareTop;
