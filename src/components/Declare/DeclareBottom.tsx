import './declareBottom.scss';

import FileSelect from 'components/FileSelect';
import MultiSelect from 'components/MultiSelect';
import * as React from 'react';

const DeclareBottom: React.FC = () => {
    return (
        <>
            <div className="declare-bottom-holder">
                <div className="content">
                    <div className="title">Müraciət Et</div>

                    <ul className="inputs">
                        <li>
                            <div className="radio-holder">
                                <div className="radio-title">Mağaza</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>

                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Kateqoriya</div>
                                <div className="input">
                                    <MultiSelect
                                        placeHolder="Kateqoriya seçin"
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
                                <div className="radio-title">Məhsulun qiyməti</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Miqdar</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Sənəd</div>
                                <FileSelect  />
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Kargo takip numarası </div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div className="radio-holder">
                                <div className="radio-title">Sipariş numarası</div>
                                <div className="input">
                                    <input type="text" />
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="radio-holder textarea">
                        <div className="radio-title">Şərh</div>
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

export default DeclareBottom;
