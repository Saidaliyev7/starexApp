export interface ITableData {
    selectboxData: ISelectbox[];
    thead: string[];
    tbodyData?: any;
    checkComponent: boolean;
    search: ITableSearch;
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
}

export const tableStaticData: ITableData = {
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

export const tableStaticDataParcel: ITableData = {
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

export const tableStaticDataCourier: ITableData = {
    search: {
        placeholder: 'Bağlama',
        isNewAdd: true,
        isNewAddText:'Kuryer sifariş et'
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
            codes:[
                '880158930',
                '880158930'
            ],
            status:'Sifariş yaradıldı',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 2,
            codes:[
                '880158930',
                '880158930'
            ],
            status:'Sifariş yaradıldı',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 3,
            codes:[
                '880158930',
            ],
            status:'Kuryerdə',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 4,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false,
        },
        {
            id: 5,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false
        },
        {
            id: 6,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false
        },
        {
            id: 7,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false
        },
        {
            id: 8,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false
        },
        {
            id: 9,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false
        },
        {
            id: 10,
            codes:[
                '880158930',
            ],
            status:'Təhvil verilib',
            where: 'Səbail rayonu',
            buyStatus: 'pending',
            priceAzn: '(7.69 )',
            name:'İsrafilbəyli Telli',
            checked: false
        },
    ],
};

