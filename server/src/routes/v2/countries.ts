import { Router } from 'express';

export const CountriesRouter = Router();

CountriesRouter.get('/', (_, res) =>
    res.json([
        {
            code: 'TR',
            flag: 'http://localhost:8050/media/country/flag/1593519135_7889724_TR.png',
            display_name: 'Türkiyə',
            address_display_name: 'Türkiyə',
            user_addresses: [
                {
                    language: 'Türkçe',
                    data: [
                        {
                            title: 'Adres başlığı',
                            value: 'Starex',
                            extra: {},
                        },
                        {
                            title: 'Ad Soyad',
                            value: 'Numraddin Huseynov',
                            extra: {},
                        },
                        {
                            title: 'Adres 1',
                            value: 'Merkez mah. Degirmenbahce cad. no 26. İnci iş merkezi 429810.',
                            extra: {},
                        },
                        {
                            title: 'İl-Şehir',
                            value: 'Istanbul',
                            extra: {},
                        },
                        {
                            title: 'İlçe',
                            value: 'Bahçelievler',
                            extra: {},
                        },
                        {
                            title: 'Semt',
                            value: 'Yenibosna',
                            extra: {},
                        },
                        {
                            title: 'ZIP',
                            value: '34197',
                            extra: {},
                        },
                        {
                            title: 'Ülke',
                            value: 'Turkey',
                            extra: {},
                        },
                        {
                            title: 'TC kimlik',
                            value: '99674408434',
                            extra: {},
                        },
                        {
                            title: 'Mobil telefon',
                            value: '5454714371',
                            extra: {},
                        },
                    ],
                },
            ],
        },
        {
            code: 'US',
            flag: 'http://localhost:8050/media/country/flag/1593519148_662743_US.png',
            display_name: 'ABŞ',
            address_display_name: 'ABŞ',
            user_addresses: [
                {
                    language: 'English',
                    data: [
                        {
                            title: 'Name Surname',
                            value: 'Numraddin Huseynov',
                            extra: {},
                        },
                        {
                            title: 'Address 1',
                            value: '320 Cornell Dr Ste C3',
                            extra: {},
                        },
                        {
                            title: 'Address 2',
                            value: '429810 STAR EXPRESS',
                            extra: {},
                        },
                        {
                            title: 'City',
                            value: 'Wilmington',
                            extra: {},
                        },
                        {
                            title: 'Region',
                            value: 'DE',
                            extra: {},
                        },
                        {
                            title: 'Direction',
                            value: 'DE',
                            extra: {},
                        },
                        {
                            title: 'ZIP',
                            value: '19801-5783',
                            extra: {},
                        },
                        {
                            title: 'Country',
                            value: 'United States',
                            extra: {},
                        },
                        {
                            title: 'Phone',
                            value: '+1 (302) 476-81-93',
                            extra: {},
                        },
                    ],
                },
            ],
        },
        {
            code: 'CN',
            flag: 'http://localhost:8050/media/country/flag/1593759954_4653678_chin.png',
            display_name: 'Çin',
            address_display_name: 'Çin',
            user_addresses: [
                {
                    language: 'English',
                    data: [
                        {
                            title: 'Address title',
                            value: 'Starex',
                            extra: {},
                        },
                        {
                            title: 'Full name',
                            value: 'Numraddin Huseynov',
                            extra: {},
                        },
                        {
                            title: 'Address 1',
                            value:
                                'WING LOCK HOUSE 5FL/ ROOM C, 1-3 lock Road Tsim Sha Tsui  429810 Numraddin Huseynov',
                            extra: {},
                        },
                        {
                            title: 'City',
                            value: 'Hong Kong',
                            extra: {},
                        },
                        {
                            title: 'Region',
                            value: 'Kowloon',
                            extra: {},
                        },
                        {
                            title: 'Zip',
                            value: '999077',
                            extra: {},
                        },
                        {
                            title: 'Country',
                            value: 'Hong Kong',
                            extra: {},
                        },
                        {
                            title: 'Phone ',
                            value: '+ (852) 54918983',
                            extra: {},
                        },
                    ],
                },
                {
                    language: 'Chinese',
                    data: [
                        {
                            title: 'Address title',
                            value: 'Starex',
                            extra: {},
                        },
                        {
                            title: 'Full name',
                            value: 'Numraddin Huseynov',
                            extra: {},
                        },
                        {
                            title: 'Address 1',
                            value: '香港九龙尖沙咀骆克道1-3A永乐大楼5C 429810 Numraddin Huseynov',
                            extra: {},
                        },
                        {
                            title: 'City',
                            value: '香港',
                            extra: {},
                        },
                        {
                            title: 'Region',
                            value: '九龙尖',
                            extra: {},
                        },
                        {
                            title: 'Zip',
                            value: '999077',
                            extra: {},
                        },
                        {
                            title: 'Country',
                            value: '香港',
                            extra: {},
                        },
                        {
                            title: 'Phone ',
                            value: '+ (852) 54918983',
                            extra: {},
                        },
                    ],
                },
            ],
        },
    ]),
);
