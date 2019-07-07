import React from 'react';
import styled from 'styled-components';

const Common = styled.p`
    font-size: 0.9em;
    margin-bottom: 5px;
`;

const CommonText = ({children}) =>
    <Common>
        {children}
    </Common>

export default CommonText;