import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.input`

`;

const Submit = ({children}) => <StyledSubmit value={children} type="submit"></StyledSubmit>

export default Submit;