import './increase-balance.scss';
import './balance.scss';

import { ReactComponent as CardIcon } from 'assets/images/icons/card.svg';
import { ReactComponent as ProfitCardIcon } from 'assets/images/icons/profit_card.svg';
import { ReactComponent as TerminalIcon } from 'assets/images/icons/terminal.svg';
import * as clsx from 'classnames';
import { FormElement, FormInput, FormLabel } from 'components/Form';
import { EErrorMessages } from 'enums';
import { useSearchParams } from 'hooks';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { ROUTES } from 'routes/consts';
import { paymentService } from 'services/payment';
import { BalanceLinkCard } from 'views/Dashboard/LinkCard';

const IncreaseBalance: React.FC = () => {
    const [searchParams, changeSearchParams] = useSearchParams<{ currency: 'USD' | 'TL' }>({
        currency: 'USD',
    });

    const { push } = useHistory();

    const [amount, changeAmount] = React.useState<number>();

    const [error, changeError] = React.useState<string>();

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
        <Row className="balance-increase-container">
            <Col lg="6">
                <div className="balance-increase-holder">
                    <h2>Balansı Artır</h2>

                    <div className="balance-increase-holder__currency-container">
                        <div
                            className={clsx('balance-increase-holder__currency-container--item', {
                                'balance-increase-holder__currency-container--item__selected':
                                    searchParams.currency === 'TL',
                            })}
                            onClick={() => changeSearchParams({ currency: 'TL' })}
                        >
                            TL
                        </div>
                        <div
                            className={clsx('balance-increase-holder__currency-container--item', {
                                'balance-increase-holder__currency-container--item__selected':
                                    searchParams.currency === 'USD',
                            })}
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
                            />
                        </FormElement>

                        <button className="balance-increase-holder__form__submit">
                            Balansı Artır
                        </button>
                    </form>
                </div>
            </Col>
            <Col lg="6">
                <BalanceLinkCard className="balance-card">
                    <div className="icon">
                        <CardIcon />
                    </div>
                    <div className="text">
                        Balansınızı Ofisimizə <br />
                        yaxınlaşaraq artıra bilərsiniz
                    </div>
                </BalanceLinkCard>
                <BalanceLinkCard className="balance-card">
                    <div className="icon">
                        <TerminalIcon />
                    </div>
                    <div className="text">
                        E-manat terminalları vasitəsilə <br />
                        balansınızı artıra bilərsiniz
                    </div>
                </BalanceLinkCard>
                <BalanceLinkCard className="balance-card">
                    <div className="icon">
                        <ProfitCardIcon />
                    </div>
                    <div className="text">
                        Balansınızı Hədiyyə Kartı <br />
                        vasitəsilə artıra bilərsiniz
                    </div>
                </BalanceLinkCard>
            </Col>
        </Row>
    );
};

export default IncreaseBalance;
