import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    font-family: ${props => props.theme.fonts.family};
    display: block;
    width: 100%;
    border-radius: 3px;
    padding: 3px;
`;

const Input = React.forwardRef((props, ref) => (
    <StyledInput ref={ref} {...props} />
));

export default Input;