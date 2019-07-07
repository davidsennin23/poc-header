import React from 'react';
import styled from 'styled-components';

const Workspace = styled.div`
    width: 100vw;
    height: 100vh;
`;

const MainTemplateWorkspace = ({children}) => <Workspace>{children}</Workspace>

export default MainTemplateWorkspace;