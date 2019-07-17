import React from 'react';
import styled from 'styled-components';

const LineLabelInput = styled.div`
    width: 100%;
`;

const FormLine = ({children, lineContainer}) => React.createElement(lineContainer,{}, children)
    

{/* <lineContainer.type>
{children
/* {React.children.map(children, child =>
    React.cloneElement(child,{ref: ref})    
)} */}
// </lineContainer.type> */}

export default FormLine;
export { LineLabelInput };