import React from 'react';
import Loading from 'react-loading';
import styled from 'styled-components';
import { EColors } from 'styled/enums';

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const FullScreenLoading: React.FC<{ isLoading: boolean }> = ({ isLoading, children }) => (
    <>
        {isLoading ? (
            <LoadingContainer>
                <Loading type={'spin'} width="50px" height="50px" color={EColors.BLUE} />
            </LoadingContainer>
        ) : (
            children
        )}
    </>
);
