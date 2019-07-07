import React from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
    width: 50%;
    max-width: 50%;
    padding: 5px;
    display: inline-block;
    word-wrap: break-word;
`;

const MainInfoTemplate = ({children}) => (
    <InfoCard>
        {children}
    </InfoCard>
)

export default MainInfoTemplate;

