import { IPagination, IPaymentTransaction } from 'models';

export const DPaymentTransactions: IPagination<IPaymentTransaction> = {
    count: 144,
    pages: 15,
    next: 'http://localhost:8050/api/v1/payment/transactions/?page=2',
    previous: null,
    results: [
        {
            payment_purpose: 'ed_1',
            get_payment_purpose_display: 'Çatdırılma Ödənişi',
            amount: '3.38',
            currency: 'USD',
            get_amount_preview: '$ 3.38',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '08.12.2020 16:14',
        },
        {
            payment_purpose: 'ed_1',
            get_payment_purpose_display: 'Çatdırılma Ödənişi',
            amount: '2.62',
            currency: 'USD',
            get_amount_preview: '$ 2.62',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '08.12.2020 16:14',
        },
        {
            payment_purpose: 'ed_1',
            get_payment_purpose_display: 'Çatdırılma Ödənişi',
            amount: '9.35',
            currency: 'USD',
            get_amount_preview: '$ 9.35',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '08.12.2020 16:14',
        },
        {
            payment_purpose: 'ed_1',
            get_payment_purpose_display: 'Çatdırılma Ödənişi',
            amount: '7.59',
            currency: 'USD',
            get_amount_preview: '$ 7.59',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '08.12.2020 16:14',
        },
        {
            payment_purpose: 'ed_1',
            get_payment_purpose_display: 'Çatdırılma Ödənişi',
            amount: '2.62',
            currency: 'USD',
            get_amount_preview: '$ 2.62',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '08.12.2020 16:14',
        },
        {
            payment_purpose: 'balance',
            get_payment_purpose_display: 'Balans artırılması',
            amount: '27.00',
            currency: 'USD',
            get_amount_preview: '$ 27.00',
            entry_type: 'debit',
            get_entry_type_display: 'Debit',
            created_at: '08.12.2020 16:12',
        },
        {
            payment_purpose: 'eo_1',
            get_payment_purpose_display: 'Sifariş Ödənişi',
            amount: '19.52',
            currency: 'TRY',
            get_amount_preview: '19.52 ₺',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '03.12.2020 09:07',
        },
        {
            payment_purpose: 'eo_1',
            get_payment_purpose_display: 'Sifariş Ödənişi',
            amount: '293.69',
            currency: 'TRY',
            get_amount_preview: '293.69 ₺',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '02.12.2020 23:02',
        },
        {
            payment_purpose: 'balance',
            get_payment_purpose_display: 'Balans artırılması',
            amount: '330.00',
            currency: 'TRY',
            get_amount_preview: '330.00 ₺',
            entry_type: 'debit',
            get_entry_type_display: 'Debit',
            created_at: '02.12.2020 22:58',
        },
        {
            payment_purpose: 'ed_1',
            get_payment_purpose_display: 'Çatdırılma Ödənişi',
            amount: '4.12',
            currency: 'USD',
            get_amount_preview: '$ 4.12',
            entry_type: 'credit',
            get_entry_type_display: 'Credit',
            created_at: '29.11.2020 23:25',
        },
    ],
};