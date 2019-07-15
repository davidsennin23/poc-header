import React from 'react';
import styled from 'styled-components';

const Common = styled.p`
    font-size: 0.625em;
`;

const CommonText = ({children}) =>
    <Common>
        {children}
    </Common>

export default CommonText;