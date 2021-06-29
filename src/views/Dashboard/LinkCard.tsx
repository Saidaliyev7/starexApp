import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'styled/devices';
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
        margin-bottom: 9px;
    }

    &:hover {
        color: white;
        background-color: ${EColors.BLUE};
        & > svg > path {
            fill: white;
        }
    }
    ${device.tablet} {
        padding-bottom: 15px;
        padding-top: 10px;
        font-size: 12px;
        line-height: 14px;
        min-height: 91px;
        & > p {
            text-align: center;
            line-height: 14px;
        }
        & > svg {
            margin-bottom: 0px;
        }
    }
`;

export const BalanceLinkCard = styled.div`
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
        margin-bottom: 9px;
    }

    &:hover {
        color: white;
        background-color: ${EColors.BLUE};
        & > svg > path {
            fill: white;
        }
    }

    ${device.tablet} {
        flex-direction: row;
        justify-content: left;
        min-height: 95px;
        padding: 0px 0;
        .icon {
            margin: 0px 20px !important;
        }
        .text {
            text-align: left !important;
            font-size: 15px;
            line-height: 18px;

            color: #212121;
        }
    }
`;
