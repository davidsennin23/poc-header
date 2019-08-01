import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    family: ${props => props.theme.family};
    font-size: ${props => props.theme.fonts.menu.size};
    font-weight: ${props => props.theme.fonts.menu.weight};
`;

const MenuText = ({children}) =>
    <Text>
        {children}
    </Text>

export default MenuText;