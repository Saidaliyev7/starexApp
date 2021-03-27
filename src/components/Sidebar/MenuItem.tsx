import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { EColors } from 'styled/enums';

interface IProps {
    path: string;
    exact?: boolean;
    dataTestId?: string;
}

const LinkStyled = styled(NavLink)`
    display: flex;
    text-decoration: none !important;
    color: inherit;
    align-items: center;
    margin-top: 30px;
    transition: color 0.3s ease;
    font-size: 18px;
    font-weight: 400;
    & > svg {
        margin-right: 25px;
        transition: all 0.3s ease;
    }
    &.active {
        color: ${EColors.YELLOW};
        & > svg,
        & > svg {
            fill: ${EColors.YELLOW} !important;
        }
    }
`;

export const SidebarMenuItem: React.FC<IProps> = ({ path, children, dataTestId }): JSX.Element => {
    return (
        <li style={{ listStyleType: 'none', display: 'block' }}>
            <LinkStyled to={path} data-test-id={dataTestId} activeClassName="active">
                {children}
            </LinkStyled>
        </li>
    );
};
