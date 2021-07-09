import { EAPIProcessStatus, ECurrency } from 'enums';

export interface IUser {
    full_name: string;
    customer_code: string;
    balances: IUserBalance[];
    last_30days: IUserLastMonthAmount;
    current_month: IUserCurrentMonthAmount;
    fin_code: string;
    birth_date: string;
    profile: IUserProfile;
    active_warehouse: number;
    social_contribution: string;
    last_180_days_declaration_payments: string;
}

export interface IUserBalance {
    id: number;
    name: string;
    readable_amount: string;
    amount: string;
    currency: ECurrency;
    amount_in_azn: string;
}

export interface IUserLastMonthAmount {
    name: string;
    readable_amount: string;
    amount: string;
}

export interface IUserCurrentMonthAmount {
    name: string;
    readable_amount: string;
    amount: string;
}

export interface IUserProfile {
    is_order_modal_disabled: boolean;
    is_active_warehouse_modal_disabled: boolean;
    has_accepted_transportation_rules: boolean;
    registration_popup: string;
    has_signature: boolean;
}

export interface IAPIData<T> {
    error: any;
    status: EAPIProcessStatus;
    data: T | null | undefined;
}

export interface IPaymentTransaction {
    payment_purpose: string;
    get_payment_purpose_display: string;
    amount: string;
    currency: string;
    get_amount_preview: string;
    entry_type: 'credit' | 'debit';
    get_entry_type_display: 'Credit' | 'Debit';
    created_at: string;
}

export interface IPaymentPayTR {
    paytr_url: string;
    token: string;
}

export interface IPagination<T> {
    count: number;
    pages: number;
    next?: string;
    previous?: string;
    results: T[];
}

export interface IInfoResponse {
    success: boolean;
    message: string;
}
