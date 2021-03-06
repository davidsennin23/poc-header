import React from 'react';
import { Link } from 'react-router-dom';
import MenuText from '../../atoms/menu/MenuText';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: #CC99AA;
    }
`
/* TODO: refatorar a forma que é feito o link do menu */
const menuLink = (to) => ({children}) =>
    <StyledLink to={to}>
        <MenuText>{children}</MenuText>
    </StyledLink>

export default menuLink;