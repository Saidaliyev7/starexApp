import './declareBottom.scss';

import clsx from 'classnames';
import Checkbox from 'components/Checkbox';
import FileSelect from 'components/FileSelect';
import MultiSelect from 'components/MultiSelect';
import { useSearchParams } from 'hooks';
import { IDeclarationProductType, IPagination } from 'models';
import * as React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { declarationService } from 'services/declaration';

const DeclareBottom: React.FC<{ inputsData?: any }> = () => {
    const formMethods = useForm({ reValidateMode: 'onChange' });
    const [searchParams] = useSearchParams<{ ctry: string }>({ ctry: 'TR' });
    const [productTypes, changeProductTypes] = React.useState<IPagination<IDeclarationProductType>>(
        { results: [], pages: 1, count: 0, next: null, previous: null },
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [productTypesPage, changeProductTypesPage] = React.useState<number>(1);
    const observer = React.useRef<IntersectionObserver>();

    const getProductTypes = () => {
        setIsLoading(true);
        declarationService
            .getProductTypes(searchParams.ctry, productTypesPage)
            .then(changeProductTypes)
            .then(() => changeProductTypesPage((p) => p++))
            .finally(() => setIsLoading(false));
    };

    React.useEffect(() => {
        getProductTypes();
    }, []);

    const lastItemRef = React.useCallback(
        (node) => {
            debugger;
            if (isLoading) return;
            if (observer.current) observer.current?.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (
                    entries[0].isIntersecting &&
                    productTypes.next &&
                    productTypesPage < productTypes.pages
                ) {
                    getProductTypes();
                }
            });

            if (node) observer.current.observe(node);
        },
        [isLoading, productTypesPage, productTypes],
    );

    const onSubmit = formMethods.handleSubmit((data) => {
        const formData = new FormData();
        for (const key in data) {
            if (key === 'types') {
                data[key].forEach((cat) => {
                    formData.append(key, cat.id);
                });
            } else {
                formData.append(key, data[key]);
            }
        }

        if (data.attachment.length) {
            formData.append('attachment', data.attachment[0]);
        }

        formData.append('country', searchParams.ctry);

        declarationService.createDeclaration(formData);
    });

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={onSubmit} className="declare-bottom-holder">
                <div className="content">
                    <div className="title">Müraciət Et</div>

                    <ul className="inputs">
                        <li>
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors?.shop,
                                })}
                            >
                                <div className="radio-title">Mağaza</div>
                                <div className="input">
                                    <input
                                        type="text"
                                        placeholder="Mağaza adı"
                                        {...formMethods.register('shop', {
                                            required: 'Bu xana məcburidir.',
                                        })}
                                    />
                                </div>
                            </div>
                        </li>

                        <li className="flex-basis-50">
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors?.types,
                                })}
                            >
                                <div className="radio-title">Kateqoriya</div>
                                <div className="input">
                                    <Controller
                                        name="types"
                                        control={formMethods.control}
                                        defaultValue={productTypes.results}
                                        render={({ field: { value, onChange } }) => (
                                            <MultiSelect
                                                placeholder="Kateqoriya seçin"
                                                options={productTypes.results}
                                                value={value}
                                                onChange={onChange}
                                                lastItemRef={lastItemRef}
                                            />
                                        )}
                                        rules={{
                                            required: 'Bu xana məcburidir.',
                                        }}
                                    />
                                </div>
                                <Checkbox message="Tərkibində maye var" />
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors
                                        ?.product_price,
                                })}
                            >
                                <div className="radio-title">Məhsulun qiyməti</div>
                                <div className="input">
                                    <input
                                        type="number"
                                        min="1"
                                        {...formMethods.register('product_price', {
                                            required: 'Bu xana məcburidir.',
                                            min: 1,
                                        })}
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors
                                        ?.quantity,
                                })}
                            >
                                <div className="radio-title">Miqdar</div>
                                <div className="input">
                                    <input
                                        min="1"
                                        type="number"
                                        {...formMethods.register('quantity', {
                                            required: 'Bu xana məcburidir.',
                                            min: 1,
                                        })}
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors
                                        ?.attachment,
                                })}
                            >
                                <div className="radio-title">Sənəd</div>
                                <Controller
                                    name="attachment"
                                    control={formMethods.control}
                                    defaultValue={[]}
                                    render={({ field: { value, onChange } }) => (
                                        <FileSelect
                                            type={false}
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                    rules={{
                                        required: 'Bu xana məcburidir.',
                                    }}
                                />
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors
                                        ?.delivery_code,
                                })}
                            >
                                <div className="radio-title">Kargo takip numarası </div>
                                <div className="input">
                                    <input
                                        type="text"
                                        {...formMethods.register('delivery_code', {
                                            required: 'Bu xana məcburidir.',
                                        })}
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="flex-basis-50">
                            <div
                                className={clsx('radio-holder', {
                                    'radio-holder--error': !!formMethods.formState?.errors
                                        ?.ty_order_number,
                                })}
                            >
                                <div className="radio-title">Sipariş numarası</div>
                                <div className="input">
                                    <input
                                        type="text"
                                        {...formMethods.register('ty_order_number', {
                                            required: 'Bu xana məcburidir.',
                                        })}
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="radio-holder textarea">
                        <div className="radio-title">Şərh</div>
                        <div className="text-area">
                            <textarea
                                cols={30}
                                rows={8}
                                {...formMethods.register('comment')}
                            ></textarea>
                        </div>
                        <Checkbox message="Daşınma şərtlərini qəbul edirəm." />
                    </div>

                    <div className="send-button">
                        <button>Göndər</button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default DeclareBottom;
