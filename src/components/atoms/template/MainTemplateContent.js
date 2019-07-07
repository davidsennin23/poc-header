import React from 'react';
import styled from 'styled-components';

const border = `1px solid gray`;

const Content = styled.main`
    width: 70%;
    margin: 0 auto;
    border-left: ${border};
    border-right: ${border};
`;

const MainTemplateContent = ({children}) =>
    <Content>
        {children}
    </Content>

export default MainTemplateContent;