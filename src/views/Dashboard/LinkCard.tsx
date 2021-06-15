import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EColors } from 'styled/enums';

export const DashboardLinkCard = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    height: 100%;
    min-height: 161px;
    align-items: center;
    padding: 33px 0;
    color: ${EColors.BLUE};
    border-radius: 4px;
    background-color: white;
    text-decoration: none !important;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    & > p {
        text-align: center;
        line-height: 25.3px;
    }
    & > svg {
        fill: ${EColors.BLUE};
        margin-bottom: 15px;
    }

    &:hover {
        color: white;
        background-color: ${EColors.BLUE};
        & > svg {
            fill: white;
        }
    }
`;
