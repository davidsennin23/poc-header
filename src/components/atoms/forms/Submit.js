import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.input`
    font-family: ${props => props.theme.fonts.family};
    size: ${props => props.theme.fonts.texts.size};
    background-color: rgb(0,0,0,0);
    padding: 10px;
    border-color: ${props => props.theme.colors.aux};
    border-width: 1px;
    cursor: pointer;
    color: ${props => props.theme.colors.aux};
    transition: .03s;

    &:hover {
        transform: scale(1.02);
        font-weight: 200;
        box-shadow: 1px 1px 1px #000;
    }
`;

const Submit = ({children}) => <StyledSubmit value={children} type="submit"></StyledSubmit>

export default Submit;