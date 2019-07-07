import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    padding: 20px;
`;

const MainContent = ({children}) =>
    <Main>
        {children}
    </Main>

export default MainContent;