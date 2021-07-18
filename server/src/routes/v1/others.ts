import { Router } from 'express';

export const OthersRouter = Router();

OthersRouter.get('/return-declarations-menu/', (_, res) =>
    res.json({
        all: 0,
        data: [
            {
                name: 'İadə yaradıldı',
                id: 19,
                is_paid: true,
                count: 0,
            },
            {
                name: 'Təyinat ölkəsinə göndərildi',
                id: 20,
                is_paid: false,
                count: 0,
            },
            {
                name: 'Təyinat ölkəsinə çatdı',
                id: 21,
                is_paid: true,
                count: 0,
            },
            {
                name: 'Təyinat ölkəsinə kuryerə təhvil verildi',
                id: 22,
                is_paid: false,
                count: 0,
            },
            {
                name: 'Mağaza tərəfindən təhvil alındı',
                id: 23,
                is_paid: false,
                count: 0,
            },
            {
                name: 'Mağaza tərəfindən geri göndərildi',
                id: 24,
                is_paid: false,
                count: 0,
            },
            {
                name: 'Mağaza tərəfindən qəbul olundu',
                id: 25,
                is_paid: false,
                count: 0,
            },
        ],
    }),
);

OthersRouter.get('/product-types', (_, res) =>
    res.json({
        count: 1181,
        pages: 12,
        next: 'http://localhost:8050/api/v1/product-types/?country=TR&page=2',
        previous: null,
        results: [
            {
                id: 1204,
                name: 'AGIZLIK',
                country: 'TR',
            },
            {
                id: 678,
                name: 'AKTIVATOR',
                country: 'TR',
            },
            {
                id: 599,
                name: 'ALÜMİNYUM FOLYO',
                country: 'TR',
            },
            {
                id: 454,
                name: 'ANAHTARLIK',
                country: 'TR',
            },
            {
                id: 582,
                name: 'AYAKKABI KUTUSU',
                country: 'TR',
            },
            {
                id: 1283,
                name: 'Aerobik Band',
                country: 'TR',
            },
            {
                id: 801,
                name: 'Agac',
                country: 'TR',
            },
            {
                id: 770,
                name: 'Agda seti',
                country: 'TR',
            },
            {
                id: 1325,
                name: 'Ahsap Freze Uc Seti',
                country: 'TR',
            },
            {
                id: 220,
                name: 'Aksesuar',
                country: 'TR',
            },
            {
                id: 963,
                name: 'Aktarıcı',
                country: 'TR',
            },
            {
                id: 1392,
                name: 'Akıllı Takip Gps',
                country: 'TR',
            },
            {
                id: 597,
                name: 'Alez',
                country: 'TR',
            },
            {
                id: 931,
                name: 'Alfabe Seti',
                country: 'TR',
            },
            {
                id: 1218,
                name: 'Aloe nem terapisi',
                country: 'TR',
            },
            {
                id: 130,
                name: 'Amortisör',
                country: 'TR',
            },
            {
                id: 583,
                name: 'Ampul',
                country: 'TR',
            },
            {
                id: 127,
                name: 'Anakart',
                country: 'TR',
            },
            {
                id: 754,
                name: 'Antreman Konisi',
                country: 'TR',
            },
            {
                id: 50,
                name: 'Araba Aksesuarı',
                country: 'TR',
            },
            {
                id: 1350,
                name: 'Arac Teyp',
                country: 'TR',
            },
            {
                id: 1349,
                name: 'Araz Teyp',
                country: 'TR',
            },
            {
                id: 590,
                name: 'Araç Tutucu',
                country: 'TR',
            },
            {
                id: 1403,
                name: 'Arinma Seti',
                country: 'TR',
            },
            {
                id: 298,
                name: 'Artikulator',
                country: 'TR',
            },
            {
                id: 1415,
                name: 'Asa',
                country: 'TR',
            },
            {
                id: 267,
                name: 'Aski',
                country: 'TR',
            },
            {
                id: 1285,
                name: 'Astronot',
                country: 'TR',
            },
            {
                id: 36,
                name: 'Ateş ölçer',
                country: 'TR',
            },
            {
                id: 985,
                name: 'Ateşleyici Tetik',
                country: 'TR',
            },
            {
                id: 69,
                name: 'Atkı',
                country: 'TR',
            },
            {
                id: 891,
                name: 'Atlama İpi',
                country: 'TR',
            },
            {
                id: 343,
                name: 'Atlas',
                country: 'TR',
            },
            {
                id: 199,
                name: 'Atlet',
                country: 'TR',
            },
            {
                id: 761,
                name: 'Avakado Yaprağı',
                country: 'TR',
            },
            {
                id: 186,
                name: 'Avize',
                country: 'TR',
            },
            {
                id: 141,
                name: 'Ayak Törpüsü',
                country: 'TR',
            },
            {
                id: 6,
                name: 'Ayakkabı',
                country: 'TR',
            },
            {
                id: 838,
                name: 'Ayakkabı Bağcık',
                country: 'TR',
            },
            {
                id: 149,
                name: 'Ayakkabı Yıkama Filesi',
                country: 'TR',
            },
            {
                id: 231,
                name: 'Ayakkabı yıkama filesi',
                country: 'TR',
            },
            {
                id: 1221,
                name: 'Aydınlatma',
                country: 'TR',
            },
            {
                id: 17,
                name: 'Ayna',
                country: 'TR',
            },
            {
                id: 907,
                name: 'Açlık Otu',
                country: 'TR',
            },
            {
                id: 417,
                name: 'BAHCE ESYALARI',
                country: 'TR',
            },
            {
                id: 894,
                name: 'BALIK YAGI',
                country: 'TR',
            },
            {
                id: 280,
                name: 'BANYO FİLESİ',
                country: 'TR',
            },
            {
                id: 230,
                name: 'BEBEK BEZI',
                country: 'TR',
            },
            {
                id: 279,
                name: 'BEBEK MALZEMELERİ',
                country: 'TR',
            },
            {
                id: 243,
                name: 'BILEKLIK',
                country: 'TR',
            },
            {
                id: 271,
                name: 'BOXER',
                country: 'TR',
            },
            {
                id: 1229,
                name: 'Babet',
                country: 'TR',
            },
            {
                id: 1202,
                name: 'Babynest',
                country: 'TR',
            },
            {
                id: 143,
                name: 'Bacak Şekillendirici',
                country: 'TR',
            },
            {
                id: 1215,
                name: 'Badminton Raketi',
                country: 'TR',
            },
            {
                id: 529,
                name: 'Bag',
                country: 'TR',
            },
            {
                id: 876,
                name: 'Bagaj Havuzu',
                country: 'TR',
            },
            {
                id: 242,
                name: 'Baharat',
                country: 'TR',
            },
            {
                id: 603,
                name: 'Bakım Seti',
                country: 'TR',
            },
            {
                id: 653,
                name: 'Balikci malzemesi',
                country: 'TR',
            },
            {
                id: 185,
                name: 'Bandana',
                country: 'TR',
            },
            {
                id: 233,
                name: 'Banyo Aksessuarlari',
                country: 'TR',
            },
            {
                id: 236,
                name: 'Bardak',
                country: 'TR',
            },
            {
                id: 1201,
                name: 'Bardak Altlığı',
                country: 'TR',
            },
            {
                id: 925,
                name: 'Basketbol Potası',
                country: 'TR',
            },
            {
                id: 748,
                name: 'Baskül',
                country: 'TR',
            },
            {
                id: 92,
                name: 'Battaniye',
                country: 'TR',
            },
            {
                id: 340,
                name: 'Bavul',
                country: 'TR',
            },
            {
                id: 1031,
                name: 'Başak Demeti',
                country: 'TR',
            },
            {
                id: 245,
                name: 'Bebeb arabasi',
                country: 'TR',
            },
            {
                id: 121,
                name: 'Bebek Bezi',
                country: 'TR',
            },
            {
                id: 68,
                name: 'Bebek Elbisesi',
                country: 'TR',
            },
            {
                id: 857,
                name: 'Bebek Kundak',
                country: 'TR',
            },
            {
                id: 886,
                name: 'Bebek Tayt',
                country: 'TR',
            },
            {
                id: 899,
                name: 'Bebek Taşıma',
                country: 'TR',
            },
            {
                id: 5,
                name: 'Bebek arabası',
                country: 'TR',
            },
            {
                id: 120,
                name: 'Bebek bakımı',
                country: 'TR',
            },
            {
                id: 942,
                name: 'Bebek banyo seti',
                country: 'TR',
            },
            {
                id: 902,
                name: 'Bebek takim',
                country: 'TR',
            },
            {
                id: 146,
                name: 'Bebek Önlüğü',
                country: 'TR',
            },
            {
                id: 131,
                name: 'Bel Yastığı/Sırt Minderi',
                country: 'TR',
            },
            {
                id: 866,
                name: 'Bel Şekillendirici',
                country: 'TR',
            },
            {
                id: 219,
                name: 'Bere',
                country: 'TR',
            },
            {
                id: 549,
                name: 'Bermuda',
                country: 'TR',
            },
            {
                id: 1351,
                name: 'Besik',
                country: 'TR',
            },
            {
                id: 725,
                name: 'Besin Desteği',
                country: 'TR',
            },
            {
                id: 1333,
                name: 'Beslenme Kabı',
                country: 'TR',
            },
            {
                id: 1196,
                name: 'Beyzbol Sopası',
                country: 'TR',
            },
            {
                id: 613,
                name: 'Bez',
                country: 'TR',
            },
            {
                id: 152,
                name: 'Biberon',
                country: 'TR',
            },
            {
                id: 1002,
                name: 'Biblo',
                country: 'TR',
            },
            {
                id: 16,
                name: 'Bijuteri',
                country: 'TR',
            },
            {
                id: 638,
                name: 'Bikini Altı',
                country: 'TR',
            },
            {
                id: 503,
                name: 'Bikini ustu',
                country: 'TR',
            },
            {
                id: 598,
                name: 'Bileyici',
                country: 'TR',
            },
            {
                id: 176,
                name: 'Bilgisayar',
                country: 'TR',
            },
            {
                id: 171,
                name: 'Bilgisayar Aksesuarı',
                country: 'TR',
            },
            {
                id: 215,
                name: 'Bilinmir(Malin deqiq tesviri yazilmalidir)',
                country: 'TR',
            },
            {
                id: 1150,
                name: 'Bisiklet Aksesuarları',
                country: 'TR',
            },
            {
                id: 1389,
                name: 'Bisiklet tasiyici',
                country: 'TR',
            },
        ],
    }),
);

OthersRouter.get('/returndeclarations', (_, res) =>
    res.json({
        total: 1,
        data: [
            {
                tracking_code: '1203123',
                product_type: '2',
                seller: 'Salam',
                weight: '2.3',
                delivery_cost_in_azn: '12.04',
                status: 19,
            },
        ],
        pages: 1,
    }),
);

OthersRouter.get('/get-notifications', (_, res) => res.json({ unread_count: 1 }));
