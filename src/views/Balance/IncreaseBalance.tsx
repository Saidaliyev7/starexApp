import './increase-balance.scss';
import './balance.scss';

import { ReactComponent as CardIcon } from 'assets/images/icons/card.svg';
import { ReactComponent as ProfitCardIcon } from 'assets/images/icons/profit_card.svg';
import { ReactComponent as TerminalIcon } from 'assets/images/icons/terminal.svg';
import clsx from 'classnames';
import Button, { EButtonSize } from 'components/Button';
import { FormElement, FormInput, FormLabel } from 'components/Form';
import { Modal } from 'components/Modal';
import { EErrorMessages } from 'enums';
import { useSearchParams, useUserInfo } from 'hooks';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { ROUTES } from 'routes/consts';
import { paymentService } from 'services/payment';

const IncreaseBalance: React.FC = () => {
    const [searchParams, changeSearchParams] = useSearchParams<{ currency: 'USD' | 'TL' }>({
        currency: 'USD',
    });

    const { user } = useUserInfo();
    const { push } = useHistory();

    const [amount, changeAmount] = React.useState<number>();

    const [error, changeError] = React.useState<string>();

    //#region Modal
    const [activeModal, changeActiveModal] = React.useState<'gift_card' | 'e_manat'>(null);

    const closeModal = React.useCallback(() => changeActiveModal(null), []);
    //#endregion

    React.useEffect(() => {
        changeError(null);
    }, [amount]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!amount) {
            changeError(EErrorMessages.REQUIRED);
        }

        paymentService
            .getPaymentPayTR(amount, searchParams.currency)
            .then((res) => push(`${ROUTES.BALANCE_PAY_TR}?token=${res.token}`));
    };

    return (
        <>
            <Row className="balance-increase-container">
                <Col lg="8">
                    <div className="balance-increase-holder">
                        <h2>Balansı Artır</h2>

                        <div className="balance-increase-holder__currency-container">
                            <div
                                className={clsx(
                                    'balance-increase-holder__currency-container--item',
                                    {
                                        'balance-increase-holder__currency-container--item__selected':
                                            searchParams.currency === 'TL',
                                    },
                                )}
                                onClick={() => changeSearchParams({ currency: 'TL' })}
                            >
                                TL
                            </div>
                            <div
                                className={clsx(
                                    'balance-increase-holder__currency-container--item',
                                    {
                                        'balance-increase-holder__currency-container--item__selected':
                                            searchParams.currency === 'USD',
                                    },
                                )}
                                onClick={() => changeSearchParams({ currency: 'USD' })}
                            >
                                USD
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="balance-increase-holder__form">
                            <FormElement error={error}>
                                <FormLabel>Məbləğ {searchParams.currency}</FormLabel>
                                <FormInput
                                    value={amount}
                                    onChange={(event) =>
                                        changeAmount((event.target.value as unknown) as number)
                                    }
                                    type="number"
                                    placeholder="20"
                                    min="1"
                                />
                            </FormElement>

                            <button className="balance-increase-holder__form__submit">
                                Balansı Artır
                            </button>
                        </form>
                    </div>
                </Col>
                <Col lg="4" className="increase-balance-options">
                    <div
                        className="increase-balance-options--item"
                        onClick={() => changeActiveModal('e_manat')}
                    >
                        <div className="icon">
                            <TerminalIcon />
                        </div>
                        <div className="text">
                            E-manat terminalları vasitəsilə <br />
                            balansınızı artıra bilərsiniz
                        </div>
                    </div>
                    <div
                        className="increase-balance-options--item"
                        onClick={() => changeActiveModal('gift_card')}
                    >
                        <div className="icon">
                            <ProfitCardIcon />
                        </div>
                        <div className="text">
                            Balansınızı Hədiyyə Kartı <br />
                            vasitəsilə artıra bilərsiniz
                        </div>
                    </div>
                    <div className="increase-balance-options--item">
                        <div className="icon">
                            <CardIcon />
                        </div>
                        <div className="text">
                            Balansınızı Ofisimizə <br />
                            yaxınlaşaraq artıra bilərsiniz
                        </div>
                    </div>
                </Col>
            </Row>
            <Modal
                open={activeModal === 'gift_card'}
                onClose={closeModal}
                classNames={{ modal: 'increase-balance-modal' }}
            >
                <div className="increase-balance-modal__content">
                    <h3 className="increase-balance-modal__content--heading">Hədiyyə Kartı</h3>
                    <p className="increase-balance-modal__content--descrption">
                        Hədiyyə kartı ilə balansınızı artırmaq üçün aşağıdakı formadan istifadə edə
                        bilərsiniz. Kart üzərindəki nömrəni verilən xanaya yazıb təsdiqləyin
                    </p>
                    <FormElement>
                        <FormInput
                            type="number"
                            min="0"
                            placeholder="1234567890"
                            style={{ minWidth: 312, marginTop: 40 }}
                        />
                    </FormElement>
                    <Button
                        size={EButtonSize.LG}
                        style={{ width: '100%', maxWidth: 312, marginTop: 12 }}
                    >
                        Təsdiqlə
                    </Button>
                </div>
            </Modal>
            <Modal
                open={activeModal === 'e_manat'}
                onClose={closeModal}
                classNames={{ modal: 'increase-balance-modal' }}
            >
                <div className="increase-balance-modal__content">
                    <h3 className="increase-balance-modal__content--heading">E-manat</h3>
                    <p className="increase-balance-modal__content--descrption">
                        E-manat terminalları vasitəsilə balansınızı artıra bilərsiniz. Bunun üçün
                        E-manat terminalına yaxınlaşırsınız, &apos;digər&apos; bölməsinə daxil
                        olaraq &apos;Starex&apos;-i seçirsiniz.{' '}
                        <span style={{ color: '#005AFF' }}>&apos;{user.customer_code}&apos; </span>
                        müştəri kodunuzu yığaraq &apos;davam et&apos; düyməsini sıxırsınız.
                        İstədiyiniz məbləği daxil edib təsdiq edirsiniz. Əməliyyatı bitirdikdən
                        sonra pul dərhal şəxsi kabinetdəki balansınızda görünəcək.
                    </p>
                </div>
            </Modal>
        </>
    );
};

export default IncreaseBalance;
