import React from 'react';
import styled from 'styled-components';

const LineLabelInput = styled.div`
    width: 100%;
    margin-bottom: 1.15em;
`;

const FormLine = ({children, lineContainer}) => lineContainer && React.createElement(lineContainer,{}, children)

export default FormLine;
export { LineLabelInput };