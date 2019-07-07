import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    width: 220px;
    box-sizing: border-box;
    padding: 0 10px;
`;

const LogoTemplate = ({children}) =>
    <Logo>{children}</Logo>

export default LogoTemplate;