import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    display: block;
`;

const Input = React.forwardRef((props, ref) => (
    <StyledInput ref={ref} {...props} />
));

export default Input;