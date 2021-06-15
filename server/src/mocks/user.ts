import { ECurrency } from 'enums';
import { IUser } from 'models';

export const DUserData: IUser = {
    full_name: 'Numraddin Huseynov',
    customer_code: '429810',
    balances: [
        {
            id: 791,
            name: 'Balance (USD)',
            readable_amount: '$ 1.83',
            amount: '1.83',
            currency: ECurrency.USD,
            amount_in_azn: '3.13',
        },
        {
            id: 792,
            name: 'Balance (TRY)',
            readable_amount: '16.79 ₺',
            amount: '16.79',
            currency: ECurrency.TRY,
            amount_in_azn: '3.74',
        },
    ],
    last_30days: {
        name: 'Son 30 gün ərzində',
        readable_amount: '$ 226.42',
        amount: '226.42',
    },
    current_month: {
        name: 'Cari ay ərzində',
        readable_amount: '$ 11.10',
        amount: '11.10',
    },
    fin_code: '5KG2EB1',
    birth_date: '1993-05-09',
    profile: {
        is_order_modal_disabled: true,
        is_active_warehouse_modal_disabled: true,
        has_accepted_transportation_rules: false,
        registration_popup: null,
        has_signature: true,
    },
    active_warehouse: 1,
    social_contribution: '12.97',
    last_180_days_declaration_payments: '170.72',
};
