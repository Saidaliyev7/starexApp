import './application.scss';

import FileSelect from 'components/FileSelect';
import Selectbox from 'components/Selectbox';
import * as React from 'react';

const ApplicationForm: React.FC = () => {
    return (
        <>
            <div className="add-holder application">
                <div className="content">
                    <div className="title">Müraciət Et</div>

                    <ul className="inputs">
                        
                        <li >
                            <div className="radio-holder">
                                <div className="radio-title">Kateqoriya</div>
                                <div className="input">
                                    <Selectbox
                                        selectData={{
                                            dropdownData: [
                                                {
                                                    name: 'tst',
                                                    isActive: false,
                                                },
                                                {
                                                    name: 'tstasd',
                                                    isActive: false,
                                                },
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className="radio-holder">
                                <div className="radio-title">Ölkə</div>
                                <div className="input">
                                    <Selectbox
                                        selectData={{
                                            dropdownData: [
                                                {
                                                    name: 'tst',
                                                    isActive: false,
                                                },
                                                {
                                                    name: 'tstasd',
                                                    isActive: false,
                                                },
                                            ],
                                        }}
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
                        Müraciətinizi tez bir zamanda araşdırmağımız üçün zəhmət olmasa aşağıdakı şəkilləri bizə göndərin:
                        </div>
                    </div>
                    <div className="radio-holder">
                        <div className="radio-title">Teslimat məlumatları</div>
                        <FileSelect message='*bağlamanın nə zaman, kimə təhvil verdiyi şəkildə görünməlidir' />
                    </div>
                    <div className="radio-holder">
                        <div className="radio-title">Alış məlumatları</div>
                        <FileSelect message='*məhsulu alarkən qeyd etdiyiniz ünvan bölməsi şəkildə görünməlidir' />
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
