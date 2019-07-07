import React from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
`;

const MenuTemplate = ({children}) =>
    <Menu>
        {children}
    </Menu>

export default MenuTemplate;