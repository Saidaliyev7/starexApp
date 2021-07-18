import { EAPIProcessStatus, ECountry, ECurrency } from 'enums';

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

export interface IApplication {
    id: number;
    creator: string;
    no: string;
    created_at: string;
    country: ECountry;
    problem_country: ECountry;
    problem_category: number;
    status: string;
    updated_at: string;
    is_deletable: boolean;
    can_answer: boolean;
    messages: IApplicationMessage[];
}

export interface IApplicationMessage {
    id: number;
    author: string;
    is_from_admin: boolean;
    body: string;
    created_at: string;
    attachments: IApplicationMessageAttachment[];
    updated_at: string;
}

export interface IApplicationMessageAttachment {
    file: string;
    name: string;
}

export interface IApplicationCategory {
    id: number;
    title: string;
}

export interface IApplicationCountry {
    [x: string]: string;
}

export interface IApplicationCategories {
    categories: IApplicationCategory[];
    countries: IApplicationCountry[];
}

export interface IApplicationStatus {
    id: number;
    status: string;
    count: number;
}

export interface ICountryInfo {
    code: ECountry;
    flag: string;
    display_name: string;
    address_display_name: string;
    user_addresses: IUserAddress[];
}

export interface IUserAddress {
    language: string;
    data: { title: string; value: string }[];
}

export interface IRebate {
    tracking_code: string;
    product_type: string;
    seller: string;
    weight: string;
    delivery_cost_in_azn: string;
    status: string;
}

export interface IRebateList {
    total: number;
    data: IRebate[];
    pages: number;
}

export interface ICourier {
    id: number;
    declaration: ICourierDeclaration;
    tariff: number;
    address: number;
    cobox: string;
    region: number;
    tel: string;
    recipient: string;
    note: string;
    courier_cost: string;
    courier_cost_preview: string;
    courier_cost_currency: string;
    courier_cost_in_azn: string;
    discounted_cost: string;
    discounted_cost_currency: string;
    discounted_cost_in_azn: string;
    discount_price_preview: string;
    discount_enabled: boolean;
    status: number;
    status_name: string;
    is_paid: boolean;
    is_deletable: boolean;
    is_editable: boolean;
    is_payable: boolean;
    tariff_name: string;
    region_name: string;
    discounts: Array<any>;
    azerpost_tracking_number: string;
}

export interface ICourierDeclaration {
    id: number;
    tracking_code: string;
    shop: string;
}

export interface ICourierList {
    total: number;
    data: ICourier[];
    pages: number;
}

export interface IDeclarationProductType {
    id: number;
    name: string;
    country: string;
}
