import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    display: inline-block;
    padding-bottom: 0.125em;
`;

const Label = ({input, children}) => <StyledLabel htmlFor={input}>{children}</StyledLabel>

export default Label;