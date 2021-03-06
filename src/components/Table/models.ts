export interface ITableData<T> {
    selectboxData?: ISelectbox[];
    thead: string[];
    tbodyData?: T | any;
    checkComponent: boolean;
    search?: ITableSearch;
    handleSelectChange?: (id: number) => void;
}

export interface ITableSearch {
    placeholder: string;
    isNewAdd: boolean;
    isNewAddText?: string;
}
export interface ISelectbox {
    name: string;
    count: number;
    isActive: boolean;
    id?: number;
}

export enum EApplicationStatus {
    'Qəbul edildi' = 1,
    'Bağlandı' = 2,
}

export const tableStaticData: ITableData<any> = {
    search: {
        placeholder: 'Sifariş kodu',
        isNewAdd: false,
    },
    checkComponent: true,
    selectboxData: [
        {
            name: 'Bütün bağlamalar',
            count: 10,
            isActive: true,
        },
        {
            name: 'Öncədən Bəyan Et',
            count: 3,
            isActive: false,
        },
        {
            name: 'Tamamlanmamış',
            count: 0,
            isActive: false,
        },
        {
            name: 'Xarici anbardadır',
            count: 2,
            isActive: false,
        },
        {
            name: 'Yoldadır',
            count: 5,
            isActive: false,
        },
        {
            name: 'Yerli anbardadır',
            count: 6,
            isActive: false,
        },
        {
            name: 'Təhvil verildi',
            count: 8,
            isActive: false,
        },
    ],
    thead: [
        'İzləmə kodu',
        'Məhsul',
        'Çatdırılma qiyməti',
        'Çəki',
        'Status',
        'Detallı Bax',
        'Ödəmə',
    ],
    tbodyData: [
        {
            id: 1,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 2,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: 'pending',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 3,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: '',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 4,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 5,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: 'pending',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 6,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: '',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 7,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 8,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: 'pending',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 9,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: '',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 10,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            status: 'Yoldadır',
            buyStatus: '',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
    ],
};

export const tableStaticDataParcel: ITableData<any> = {
    search: {
        placeholder: 'İzləmə nömrəsi',
        isNewAdd: false,
    },
    checkComponent: true,
    selectboxData: [
        {
            name: 'Bütün bağlamalar',
            count: 10,
            isActive: true,
        },
        {
            name: 'Öncədən Bəyan Et',
            count: 3,
            isActive: false,
        },
        {
            name: 'Tamamlanmamış',
            count: 0,
            isActive: false,
        },
        {
            name: 'Xarici anbardadır',
            count: 2,
            isActive: false,
        },
        {
            name: 'Yoldadır',
            count: 5,
            isActive: false,
        },
        {
            name: 'Yerli anbardadır',
            count: 6,
            isActive: false,
        },
        {
            name: 'Təhvil verildi',
            count: 8,
            isActive: false,
        },
    ],
    thead: ['İzləmə kodu', 'Məhsul', 'Çatdırılma qiyməti', 'Çəki', 'Anbar', 'Detallı Bax', 'Ödəmə'],
    tbodyData: [
        {
            id: 1,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Gənclik',
            buyStatus: 'pending',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 2,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Gənclik',
            buyStatus: 'pending',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 3,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Gənclik',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 4,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Gənclik',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 5,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Gənclik',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 6,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Xalqlar',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 7,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Xalqlar',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 8,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Xalqlar',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 9,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Xalqlar',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
        {
            id: 10,
            code: '880158930',
            product: 'T-shirt',
            weight: '0.15 kg',
            where: 'Bakı-Xalqlar',
            buyStatus: 'paid',
            price: '4.50 $',
            priceAzn: '(7.69 )',
            checked: false,
        },
    ],
};

export const tableStaticDataCourier: ITableData<any> = {
    search: {
        placeholder: 'Bağlama',
        isNewAdd: true,
        isNewAddText: 'Kuryer sifariş et',
    },
    checkComponent: true,
    selectboxData: [
        {
            name: 'Bütün kuryer sifarişləri',
            count: 10,
            isActive: true,
        },
        {
            name: 'Öncədən Bəyan Et',
            count: 3,
            isActive: false,
        },
        {
            name: 'Tamamlanmamış',
            count: 0,
            isActive: false,
        },
        {
            name: 'Xarici anbardadır',
            count: 2,
            isActive: false,
        },
        {
            name: 'Yoldadır',
            count: 5,
            isActive: false,
        },
        {
            name: 'Yerli anbardadır',
            count: 6,
            isActive: false,
        },
        {
            name: 'Təhvil verildi',
            count: 8,
            isActive: false,
        },
    ],
    thead: ['Status', 'Bağlama', 'Kuryer qiyməti', 'Rayon', 'Təhvil alan', 'Detallı Bax', 'Ödəmə'],
    tbodyData: [
        {
            id: 1,
            codes: ['880158930', '880158930'],
            status: 'Sifariş yaradıldı',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 2,
            codes: ['880158930', '880158930'],
            status: 'Sifariş yaradıldı',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 3,
            codes: ['880158930'],
            status: 'Kuryerdə',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 4,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 5,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 6,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 7,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 8,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 9,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 10,
            codes: ['880158930'],
            status: 'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name: 'İsrafilbəyli Telli',
            checked: false,
        },
    ],
};

export const tableStaticDataRebates: ITableData<any> = {
    checkComponent: false,
    selectboxData: [
        {
            name: 'Bütün iadələr',
            count: 10,
            isActive: true,
        },
        {
            name: 'İadə yaradıldı',
            count: 3,
            isActive: false,
        },
        {
            name: 'Təyinat ölkəsinə göndərildi',
            count: 0,
            isActive: false,
        },
        {
            name: 'Təyinat ölkəsinə çatdı',
            count: 2,
            isActive: false,
        },
        {
            name: 'Təyinat ölkəsinə kuryerə təhvil verildi',
            count: 5,
            isActive: false,
        },
        {
            name: 'Mağaza tərəfindən təhvil alındı',
            count: 6,
            isActive: false,
        },
        {
            name: 'Mağaza tərəfindən geri göndərildi',
            count: 8,
            isActive: false,
        },
        {
            name: 'Mağaza tərəfindən qəbul olundu',
            count: 8,
            isActive: false,
        },
    ],
    thead: [
        'İzləmə kodu',
        'Məhsulun tipi',
        'Mağaza',
        'Çəki',
        'Çatdırılma qiyməti',
        'İadənin statusu',
    ],
    tbodyData: [
        {
            id: 1,
            code: '880158930',
            weight: '0.48 kg',
            where: 'Trendyol',
            status: 'Ölçünün kiçik olması',
            priceAzn: '1.50',
            comingPrice: '1.50',
        },
    ],
};

export const tableStaticDataApplications: ITableData<any> = {
    search: {
        placeholder: 'Bəyannamə',
        isNewAdd: true,
        isNewAddText: 'Onlayn müraciət et',
    },
    checkComponent: false,
    selectboxData: [
        {
            name: 'Bütün müraciətlər',
            count: 10,
            isActive: true,
        },
        {
            name: 'İadə yaradıldı',
            count: 3,
            isActive: false,
        },
        {
            name: 'Təyinat ölkəsinə göndərildi',
            count: 0,
            isActive: false,
        },
        {
            name: 'Təyinat ölkəsinə çatdı',
            count: 2,
            isActive: false,
        },
        {
            name: 'Təyinat ölkəsinə kuryerə təhvil verildi',
            count: 5,
            isActive: false,
        },
        {
            name: 'Mağaza tərəfindən təhvil alındı',
            count: 6,
            isActive: false,
        },
        {
            name: 'Mağaza tərəfindən geri göndərildi',
            count: 8,
            isActive: false,
        },
        {
            name: 'Mağaza tərəfindən qəbul olundu',
            count: 8,
            isActive: false,
        },
    ],
    thead: ['Kateqoriya', 'Ölkə', 'Tarix', 'Status', 'Detallı bax'],
    tbodyData: [
        {
            id: 1,
            category: 'Hesabımda mənə məxsus olmayan bağlama',
            country: 'Türkiyə',
            time: '21.07.2020, 15:45',
            status: 'Qəbul edildi',
        },
        {
            id: 1,
            category: 'Hesabımda mənə məxsus olmayan bağlama',
            country: 'Türkiyə',
            time: '21.07.2020, 15:45',
            status: 'Bağlandı',
        },
    ],
};

export const tableStaticDataBalance: ITableData<any> = {
    checkComponent: false,
    selectboxData: [
        {
            name: 'Bütün əməliyyatlar',
            count: 10,
            isActive: true,
        },
    ],
    thead: ['İzləmə kodu', 'Məbləğ', 'Tarix'],
    tbodyData: [
        {
            id: 1,
            action: 'Sifariş ödənişi',
            cost: '66.89 $',
            date: '10.05.2020, 10:00',
            isComing: false,
        },
        {
            id: 2,
            action: 'Sifariş ödənişi',
            cost: '66.89 $',
            date: '10.05.2020, 10:00',
            isComing: false,
        },
        {
            id: 3,
            action: 'Sifariş ödənişi',
            cost: '66.89 $',
            date: '10.05.2020, 10:00',
            isComing: true,
        },
        {
            id: 4,
            action: 'Sifariş ödənişi',
            cost: '66.89 $',
            date: '10.05.2020, 10:00',
            isComing: false,
        },
        {
            id: 5,
            action: 'Sifariş ödənişi',
            cost: '66.89 $',
            date: '10.05.2020, 10:00',
        },
    ],
};
