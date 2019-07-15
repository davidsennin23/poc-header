import React from 'react';
import styled from 'styled-components';

const Highlighted = styled.p`
    font-size: 0.9em;
`;

const HighlightedText = ({children}) =>
    <Highlighted>
        {children}
    </Highlighted>

export default HighlightedText;