import React from 'react';
import styled from 'styled-components';
import menuLink from '../../../molecules/menu/menuLink';
import MenuItem from '../../../molecules/menu/MenuItem';

const MenuBody = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Root = menuLink("/");
const OptOne = menuLink("/one");
const OptTwo = menuLink("/two");

const Menu = ({links}) =>
    <MenuBody>
        <MenuItem>
            <Root>Item1</Root>
        </MenuItem>
        <MenuItem>
            <OptOne>Item 2 Text longer</OptOne>
        </MenuItem>
        <MenuItem>
            <OptTwo>Item 3</OptTwo>
        </MenuItem>
    </MenuBody>

export default Menu;