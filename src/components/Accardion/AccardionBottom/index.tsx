import './accardionBottom.scss';

import { ReactComponent as ClipboardIcon } from 'assets/images/icons/clipboard.svg';
import * as React from 'react';

const accardionInfo: {
    title: string;
    content: string;
}[] = [
    {
        title: 'Adres başlığı',
        content: 'Starex',
    },
    {
        title: 'Ad Soyad',
        content: 'Telli İsrafilbayli',
    },
    {
        title: 'Adres 1',
        content: 'Merkez mah. Degirmenbahce cad. no 26. İnci iş merkezi 740732.',
    },
    {
        title: 'İl-Şehir',
        content: 'İstanbul',
    },
];

const AccardionTop: React.FC = React.memo(() => {
    const [bottomData]=React.useState(accardionInfo);

    const copyToClipboard=(content:string)=>{
        navigator.clipboard.writeText(content);
    }
    return (
        <>
            <div className="accardion-bottom-holder">
                <ul>
                    {
                        bottomData.map((res,index)=>(
                            <li key={index}>
                                <div className="title">
                                    {res.title}
                                </div>
                                <div className="content">
                                    {res.content}
                                </div>
                                <div className="clipboard" onClick={()=>copyToClipboard(res.content)} >
                                    <ClipboardIcon />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
});

export default AccardionTop;
