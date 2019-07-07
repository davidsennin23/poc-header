import React from 'react';
import styled from 'styled-components';
import common from '../../../styles/CommonStyles';

const Header = styled.header`
    width: 100%;
    background-color: ${props => props.theme.main};
    ${common.clearFloat}
`;

Header.defaultProps = {
    theme: {
        main: "green"
    }
}

const MainTemplateHeader = ({children}) =>
    <Header>{children}</Header>

export default MainTemplateHeader;