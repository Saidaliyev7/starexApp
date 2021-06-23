import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    path: string;
    exact?: boolean;
    dataTestId?: string;
}

const LinkStyled = styled(NavLink)`
    display: flex;
    color: white !important;
    text-decoration: none !important;
    align-items: center;
    margin-top: 30px;
    transition: color 0.3s ease;
    font-size: 16px;
    font-weight: 400;
    position: relative;
    z-index: 1;
    & > svg {
        margin-right: 25px;
    }
    &::after {
        content: '';
        position: absolute;
        left: -11%;
        background-color: white;
        opacity: 0;
        width: 336px;
        height: 50px;
        z-index: 0;
        transition: opacity 0.2s ease-in;
    }
    &.active::after,
    &:hover:after {
        opacity: 0.2;
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
