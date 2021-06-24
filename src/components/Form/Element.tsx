import * as React from 'react';
import styled from 'styled-components';

const FormElementStyled = styled.div`
    display: flex;
    flex-direction: column;

    > .form-element__error {
        color: #d80027;
        font-size: 12px;
        margin-top: 10px;
    }
`;

export const FormElement: React.FC<{ error?: string }> = ({ error, children }) => (
    <FormElementStyled>
        {children}
        {error && <p className="form-element__error">{error}</p>}
    </FormElementStyled>
);
