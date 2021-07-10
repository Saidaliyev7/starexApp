import { useSearchParams } from 'hooks';
import * as React from 'react';
import styled from 'styled-components';

const PayTR = styled.iframe`
    width: 100%;
    height: calc(100vh - 200px);
    margin-top: 40px;
`;

const BalancePayTR: React.FC = () => {
    const [{ token }] = useSearchParams<{ token: string }>();

    return <PayTR src={`https://www.paytr.com/odeme/guvenli/${token}`} />;
};

export default BalancePayTR;
