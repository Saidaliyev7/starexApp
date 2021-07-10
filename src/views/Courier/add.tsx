import './courier.scss';

import Selectbox from 'components/Selectbox';
import Status from 'components/Status';
import * as React from 'react';

const CourierAdd: React.FC = () => {
    return (
        <>
            {/* <Status /> */}
            <div className="add-holder">
                <div className="content">
                    <div className="title">Kuryer sifarişi</div>

                    <ul className="inputs">
                        <li>
                            <div className="radio-holder">
                                <div className="radio-title">Bağlama</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Çatdırılacaq rayon</div>
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
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Tarif</div>
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
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Ünvan</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Ünvan - əlavə məlumat</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Təhvil alacaq şəxs</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Telefon</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="radio-holder textarea">
                        <div className="radio-title">Əlavə qeydiniz</div>
                        <div className="text-area">
                            <textarea cols={30} rows={8}></textarea>
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

export default CourierAdd;
