import styled from 'styled-components';

export const FormInput = styled.input`
    outline: transparent;
    font-size: 18px;
    padding: 16px 20px 15px;
    border: 1px solid #bebebe;
    border-radius: 4px;

    &::placeholder {
        color: #898989;
    }

    &[type='number'] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }
`;
