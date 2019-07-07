import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 1.2em;
    font-weight: 700;
`;

const MenuText = ({children}) =>
    <Text>
        {children}
    </Text>

export default MenuText;