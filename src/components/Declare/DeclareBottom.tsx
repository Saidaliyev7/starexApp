import './declareBottom.scss';

import FileSelect from 'components/FileSelect';
import MultiSelect from 'components/MultiSelect';
import * as React from 'react';
import Checkbox from 'components/Checkbox';

const DeclareBottom: React.FC<{inputsData?:any}> = ({inputsData}) => {
    return (
        <>
            <div className="declare-bottom-holder">
                <div className="content">
                    <div className="title">Müraciət Et</div>

                    <ul className="inputs">
                        <li>
                            <div className="radio-holder">
                                <div className="radio-title">{inputsData.inputs[0].title}</div>
                                <div className="input">
                                    <input type="text" placeholder={inputsData.inputs[0].placeHolder} />
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
                                <Checkbox message='Tərkibində maye var' />
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
                                <FileSelect type={false}  />
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
                        <Checkbox message='Daşınma şərtlərini qəbul edirəm.' />
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
