import './application.scss';

import FileSelect from 'components/FileSelect';
import Selectbox from 'components/Selectbox';
import * as React from 'react';

import { useApplicationCategories } from './hooks';

const ApplicationForm: React.FC = () => {
    const { categories } = useApplicationCategories();
    const [category, changeCategory] = React.useState<number | string>(categories.categories[0].id);
    const [country, changeCountry] = React.useState<string>();

    return (
        <>
            <div className="add-holder application">
                <div className="content">
                    <div className="title">Müraciət Et</div>

                    <ul className="inputs">
                        <li>
                            <div className="radio-holder">
                                <div className="radio-title">Kateqoriya</div>
                                <div className="input">
                                    <Selectbox
                                        placeHolder="Kateqoriya seçin"
                                        selectData={{
                                            dropdownData: categories.categories.map((x) => ({
                                                isActive: category === x.id,
                                                name: x.title,
                                                id: x.id,
                                            })),
                                        }}
                                        onChange={changeCategory}
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="radio-holder">
                                <div className="radio-title">Ölkə</div>
                                <div className="input">
                                    <Selectbox
                                        placeHolder="Ölkə seçin"
                                        selectData={{
                                            dropdownData: categories.countries.map((x) => ({
                                                isActive: country === Object.keys(x)[0],
                                                name: Object.values(x)[0],
                                                id: Object.keys(x)[0],
                                            })),
                                        }}
                                        onChange={(id) => changeCountry(id.toString())}
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="radio-holder textarea">
                        <div className="radio-title">Mesaj</div>
                        <div className="text-area">
                            <textarea cols={30} rows={8}></textarea>
                        </div>
                        <div className="message">
                            Müraciətinizi tez bir zamanda araşdırmağımız üçün zəhmət olmasa
                            aşağıdakı şəkilləri bizə göndərin:
                        </div>
                    </div>
                    <div className="radio-holder">
                        <div className="radio-title">Teslimat məlumatları</div>
                        <FileSelect message="*bağlamanın nə zaman, kimə təhvil verdiyi şəkildə görünməlidir" />
                    </div>
                    <div className="radio-holder">
                        <div className="radio-title">Alış məlumatları</div>
                        <FileSelect message="*məhsulu alarkən qeyd etdiyiniz ünvan bölməsi şəkildə görünməlidir" />
                    </div>

                    <div className="send-button">
                        <button>Göndər</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplicationForm;
