import './accardionTop.scss';

import { ReactComponent as ChinaIcon } from 'assets/images/countries/china.svg';
import { ReactComponent as GermanyIcon } from 'assets/images/countries/germany.svg';
import { ReactComponent as TurkeyIcon } from 'assets/images/countries/turkey.svg';
import { ReactComponent as UsaIcon } from 'assets/images/countries/usa.svg';
import * as React from 'react';

interface ICountry{
    id:number,
    name: string;
    icon: any;
    isActive: boolean;
}

const countries: ICountry[] = [
    {
        id:1,
        name: 'TÜRKİYƏ',
        icon: TurkeyIcon,
        isActive: true,
    },
    {
        id:2,
        name: 'ABŞ',
        icon: UsaIcon,
        isActive: false,
    },
    {
        id:3,
        name: 'ÇİN',
        icon: ChinaIcon,
        isActive: false,
    },
    {
        id:4,
        name: 'ALMANİYA',
        icon: GermanyIcon,
        isActive: false,
    },
];

const AccardionTop: React.FC = React.memo(() => {
    const [allCountries, changeCountries] = React.useState<ICountry[]>(countries);

    const onAccardionSelect=(country:ICountry)=>{
        !country.isActive&& changeCountries(oldState=>{
            const newState=[...oldState].map(cntry=>{
                cntry.name==country.name?cntry.isActive=true:cntry.isActive=false;
                return cntry
            })
            return newState;
        })
    }

    return (
        <>
            <div className="accardion-top-holder">
                <div className="languages">
                    <ul>
                        {allCountries.map((country,index) => (
                            <li key={index} onClick={()=>onAccardionSelect(country)} className={country.isActive&&'active'}>
                                <div className="icon">
                                    <country.icon />
                                </div>
                                <div className="text">{country.name}</div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    );
});

export default AccardionTop;
