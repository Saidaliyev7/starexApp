import './accardionBottom.scss';

import { ReactComponent as ClipboardIcon } from 'assets/images/icons/clipboard.svg';
import { useCountries, useSearchParams } from 'hooks';
import * as React from 'react';

const AccardionTop: React.FC = React.memo(() => {
    const [searchParams] = useSearchParams<{ ctry: string }>({ ctry: 'TR' });
    const { countries } = useCountries();
    const [bottomData, changeBottomData] = React.useState(
        countries.find((x) => x.code === searchParams.ctry),
    );

    const copyToClipboard = (content: string) => {
        navigator.clipboard.writeText(content);
    };

    React.useEffect(() => {
        changeBottomData(countries.find((x) => x.code === searchParams.ctry));
    }, [searchParams]);

    return (
        <>
            <div className="accardion-bottom-holder">
                <ul>
                    {bottomData.user_addresses[0].data.map((res, index) => (
                        <li key={index}>
                            <div className="title">{res.title}</div>
                            <div className="content">{res.value}</div>
                            <div className="clipboard" onClick={() => copyToClipboard(res.value)}>
                                <ClipboardIcon />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
});

export default AccardionTop;
