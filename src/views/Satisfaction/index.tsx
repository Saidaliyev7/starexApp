import './satisfaction.scss';

import Radio from 'components/Radio';
import * as React from 'react';

export interface IRadio {
    id: number;
    title: string;
    radios: { name: string; id: number; isActive: boolean }[];
}
const satisfactionRadios: IRadio[] = [
    {
        id: 1,
        title: 'Probleminiz/ Çətinlik həll olundu mu?',
        radios: [
            {
                name: 'Bəli',
                id: 1,
                isActive: false,
            },
            {
                name: 'Xeyir',
                id: 2,
                isActive: false,
            },
        ],
    },
    {
        id: 2,
        title: 'Əməkdaşımızın xidmətindən nə dərəcədə razı qaldınız?',
        radios: [
            {
                name: 'Çox razı qaldım',
                id: 1,
                isActive: false,
            },
            {
                name: 'Razı qaldım',
                id: 2,
                isActive: false,
            },
            {
                name: 'Nə razı , nə də narazı qalmadım',
                id: 3,
                isActive: false,
            },
            {
                name: 'Narazı qaldım',
                id: 4,
                isActive: false,
            },
            {
                name: 'Çox narazı qaldım',
                id: 5,
                isActive: false,
            },
        ],
    },
];

const Satisfaction: React.FC = () => {
    const [radios, changeRadios] = React.useState<IRadio[]>(satisfactionRadios);

    const onRadioClick = (
        id: number,
        radioElement: { name: string; id: number; isActive: boolean },
    ) => {
        changeRadios((oldState) => {
            const newState = [...oldState].map((radio) => {
                if (radio.id === id) {
                    radio.radios = radio.radios.map((el) => {
                        el.id === radioElement.id ? (el.isActive = true) : (el.isActive = false);
                        return el;
                    });
                }
                return radio;
            });
            return newState;
        });
    };
    return (
        <>
            <div className="satisfaction-holder">
                <div className="content">
                    <div className="title">
                        Xidmət səviyyəsinin yüksəldilməsi məqsədiylə aşağıdakı formu doldurmağınızı
                        xahiş edirik.
                    </div>
                    {radios &&
                        radios.map((radio) => (
                            <Radio onClick={onRadioClick} key={radio.id} radio={radio} />
                        ))}
                    <div className="radio-holder textarea">
                        <div className="radio-title">Əlavə qeydiniz</div>
                        <div className="text-area">
                            <textarea  cols={30} rows={8}></textarea>
                        </div>
                    </div>
                    <div className="send-button">
                        <button>Göndər</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Satisfaction;
