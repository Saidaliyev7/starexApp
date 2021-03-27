import { ECurrency } from 'enums';
import { IUser } from 'models';

export const DUserData: IUser = {
    full_name: 'Mehebbet Huseynov',
    customer_code: '438904',
    balances: [
        {
            id: 282723,
            name: 'Balance (TRY)',
            readable_amount: '0 ₺',
            amount: '0.00',
            currency: ECurrency.TRY,
            amount_in_azn: '0.00',
        },
        {
            id: 282722,
            name: 'Balance (USD)',
            readable_amount: '$ 0',
            amount: '0.00',
            currency: ECurrency.USD,
            amount_in_azn: '0.00',
        },
    ],
    last_30days: {
        name: 'Son 30 gün ərzində',
        readable_amount: '$ 0',
        amount: '0.00',
    },
    current_month: {
        name: 'Cari ay ərzində',
        readable_amount: '$ 0',
        amount: '0.00',
    },
    fin_code: '3332221',
    birth_date: '2021-02-10',
    profile: {
        is_order_modal_disabled: false,
        is_active_warehouse_modal_disabled: false,
        has_accepted_transportation_rules: false,
        registration_popup: null,
        has_signature: false,
    },
    active_warehouse: 4,
    social_contribution: '0.00',
    last_180_days_declaration_payments: '0.00',
};
