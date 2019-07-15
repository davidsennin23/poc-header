import React from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
    padding: 0.1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
`;

const MainInfoTemplate = ({width='auto', children, height='auto'}) => (
    <InfoCard style={{width, height}}>
        {children}
    </InfoCard>
)

export default MainInfoTemplate;

