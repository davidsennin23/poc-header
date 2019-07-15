import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MainContent = ({children}) =>
    <Main>
        {children}
    </Main>

export default MainContent;