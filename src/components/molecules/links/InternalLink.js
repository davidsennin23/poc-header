import React from 'react';
import MakeLink from '../../atoms/links/MakeLink';

const style = {
    'text-decoration': 'none',
    'color': 'green',
    'hover:color': '#CC99AA',
}

const ExternalLink = ({to, children}) =>
    <MakeLink to={to} style={style}>{children}</MakeLink>

export default ExternalLink;