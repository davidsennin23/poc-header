import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const MainTemplateHeaderContent = ({children}) =>
    <HeaderContent>
        {children}
    </HeaderContent>

export default MainTemplateHeaderContent;