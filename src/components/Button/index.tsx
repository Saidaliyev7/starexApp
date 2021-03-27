import styled, { css } from 'styled-components';
import { EColors } from 'styled/enums';

export enum EButtonView {
    PRIMARY,
    SECONDARY,
}

export enum EButtonSize {
    MEDIUM,
    LG,
}

interface IProps {
    view?: EButtonView;
    size?: EButtonSize;
}

const Button = styled.button<IProps>`
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 400;
    ${(props) => css`
        background-color: ${props.view === EButtonView.SECONDARY ? EColors.YELLOW : EColors.BLUE};
        padding: ${props.size === EButtonSize.MEDIUM ? '12px 0' : '16px 0 15px 0'};
    `}
    cursor: pointer;
    outline: transparent;
`;

export default Button;
