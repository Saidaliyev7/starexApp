import { Router } from 'express';

export const TicketsRouter = Router();

TicketsRouter.get('/categories', (_, res) =>
    res.json({
        categories: [
            {
                id: 11,
                title: 'Sifariş haqqında məlumat',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 13,
                title: 'Tapılmayan bağlama',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 1,
                title: 'Hesabımda mənə məxsus olmayan bağlama',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 2,
                title: 'Sifarişin alınması',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 4,
                title: 'Bağlamanın gecikməsi',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 5,
                title: 'Yanlış gələn sifariş',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 6,
                title: 'İade',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 7,
                title: 'Balansla bağlı',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 8,
                title: 'Digər',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 9,
                title: 'Təklif və iradlar',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 10,
                title: 'Kuryer',
                notify_message: null,
                attachment_titles: null,
            },
            {
                id: 3,
                title: 'Sistemə salınmayan bağlama',
                notify_message:
                    '<p><strong>M&uuml;raciətinizi tez bir zamanda araşdırmağımız</strong> &uuml;&ccedil;&uuml;n&nbsp;zəhmət olmasa aşağıdakı şəkilləri bizə g&ouml;ndərin:</p>\r\n\r\n<ul>\r\n\t<li>təslimat məlumatları (bağlamanın nə zaman, kimə təhvil verdiyi şəkildə g&ouml;r&uuml;nməlidir)</li>\r\n\t<li>alış məlumatları (məhsulu alarkən qeyd etdiyiniz &uuml;nvan b&ouml;lməsi şəkildə g&ouml;r&uuml;nməlidir)</li>\r\n</ul>',
                attachment_titles: ['təslimat məlumatları', 'alış məlumatları'],
            },
        ],
        countries: [
            {
                CN: 'China',
            },
            {
                TR: 'Turkey',
            },
            {
                US: 'United States',
            },
            {
                DE: 'Germany',
            },
        ],
    }),
);
