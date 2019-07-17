import React from 'react';
import styled from 'styled-components';

const StyledLabel = (input) => styled.label`
    for: ${input}
`;

const getLabelFor = (input, children) => {
    const Label = StyledLabel(input);
    return <Label>{children}</Label>
}

const Label = ({input, children}) =>
    <>
        {getLabelFor(input, children)}
    </>

export default Label;