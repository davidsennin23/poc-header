import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.family};
    size: ${props => props.theme.fonts.texts.size};
    display: inline-block;
    padding-bottom: 0.125em;
`;

const Label = ({input, children}) => <StyledLabel htmlFor={input}>{children}</StyledLabel>

export default Label;