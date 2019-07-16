import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StylesUtils from '../../utils/Styles';

const StyledLink = (style={}) => styled(Link)`
    ${StylesUtils.makeStylesTextFromProperties(style)}
`;

const _Link = (to, style, children) => {
    const Sl = StyledLink(style);
    return <Sl to={to}>
        {children}
    </Sl>
}

const MakeLink = ({to, style, children}) => (
    <>
        {_Link(to, style, children)}
    </>
);

export default MakeLink;
