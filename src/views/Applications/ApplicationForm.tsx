import './application.scss';

import clsx from 'classnames';
import FileSelect from 'components/FileSelect';
import Selectbox from 'components/Selectbox';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes/consts';
import { applicationService } from 'services/application';

import { useApplicationCategories } from './hooks';

const ApplicationForm: React.FC = () => {
    const { categories } = useApplicationCategories();
    const { push } = useHistory();
    const [category, changeCategory] = React.useState<number | string>();
    const [categoryError, changeCategoryError] = React.useState<string>();
    const [country, changeCountry] = React.useState<string>();
    const [countryError, changeCountryError] = React.useState<string>();
    const [message, changeMessage] = React.useState<string>();
    const [messageError, changeMessageError] = React.useState<string>();
    const [firstFileInput, changeFirstFileInput] = React.useState<FileList | File[]>();
    const [firstFileInputError, changeFirstFileInputError] = React.useState<string>();
    const [secondFileInput, changeSecondFileInput] = React.useState<FileList | File[]>();
    const [secondFileInputError, changeSecondFileInputError] = React.useState<string>();

    const handleInputChange = (
        value: any,
        func: (value: any) => void,
        changeError: (value: string) => void,
    ) => {
        func(value);
        changeError(null);
    };

    const validateInput = (value: any, changeError: (error: string) => void) => {
        if (!value) {
            changeError('Bu xana məcburidir.');

            return false;
        }

        return true;
    };

    const onSubmit = () => {
        const validations = [
            validateInput(message, changeMessageError),
            validateInput(category, changeCategoryError),
            validateInput(country, changeCountryError),
            validateInput(firstFileInput, changeFirstFileInputError),
            validateInput(secondFileInput, changeSecondFileInputError),
        ];

        if (validations.every(Boolean)) {
            const formData = new FormData();
            const data = {
                problem_category: category,
                problem_country: country && country.toUpperCase(),
                body: message,
            };

            for (const key in data) {
                formData.append(key, data[key]);
            }

            if (firstFileInput.length) {
                [...(firstFileInput as Array<File>)].forEach((attachment1) => {
                    formData.append('attachments', attachment1);
                });
            }
            if (secondFileInput.length) {
                [...(secondFileInput as Array<File>)].forEach((attachment2) => {
                    formData.append('attachments', attachment2);
                });
            }

            applicationService
                .createTicket(formData)
                .then((res) => push(ROUTES.APPLICATION_CHAT.replace(':id', res.id)));
        }
    };

    return (
        <>
            <div className="add-holder application">
                <div className="content">
                    <div className="title">Müraciət Et</div>

                    <ul className="inputs">
                        <li>
                            <div className="radio-holder">
                                <div
                                    className={clsx('radio-title', {
                                        'radio-title--error': !!categoryError,
                                    })}
                                >
                                    Kateqoriya
                                </div>
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
                                        onChange={(id: number | string) =>
                                            handleInputChange(
                                                id,
                                                changeCategory,
                                                changeCategoryError,
                                            )
                                        }
                                        error={categoryError}
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="radio-holder">
                                <div
                                    className={clsx('radio-title', {
                                        'radio-title--error': !!countryError,
                                    })}
                                >
                                    Ölkə
                                </div>
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
                                        onChange={(id: number | string) =>
                                            handleInputChange(
                                                id.toString(),
                                                changeCountry,
                                                changeCountryError,
                                            )
                                        }
                                        error={countryError}
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="radio-holder textarea">
                        <div
                            className={clsx('radio-title', {
                                'radio-title--error': !!messageError,
                            })}
                        >
                            Mesaj
                        </div>
                        <div className="text-area">
                            <textarea
                                onChange={(event) =>
                                    handleInputChange(
                                        event.target.value,
                                        changeMessage,
                                        changeMessageError,
                                    )
                                }
                                cols={30}
                                rows={8}
                                className={messageError ? 'text-area--error' : ''}
                            ></textarea>
                        </div>
                        <div className="message">
                            Müraciətinizi tez bir zamanda araşdırmağımız üçün zəhmət olmasa
                            aşağıdakı şəkilləri bizə göndərin:
                        </div>
                    </div>
                    <div className="radio-holder">
                        <div
                            className={clsx('radio-title', {
                                'radio-title--error': !!firstFileInputError,
                            })}
                        >
                            Teslimat məlumatları
                        </div>
                        <FileSelect
                            onChange={(fileList) =>
                                handleInputChange(
                                    fileList,
                                    changeFirstFileInput,
                                    changeFirstFileInputError,
                                )
                            }
                            message="*bağlamanın nə zaman, kimə təhvil verdiyi şəkildə görünməlidir"
                            error={firstFileInputError}
                        />
                    </div>
                    <div className="radio-holder">
                        <div
                            className={clsx('radio-title', {
                                'radio-title--error': !!secondFileInputError,
                            })}
                        >
                            Alış məlumatları
                        </div>
                        <FileSelect
                            onChange={(fileList) =>
                                handleInputChange(
                                    fileList,
                                    changeSecondFileInput,
                                    changeSecondFileInputError,
                                )
                            }
                            message="*məhsulu alarkən qeyd etdiyiniz ünvan bölməsi şəkildə görünməlidir"
                            error={secondFileInputError}
                        />
                    </div>

                    <div className="send-button">
                        <button onClick={onSubmit}>Göndər</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplicationForm;
