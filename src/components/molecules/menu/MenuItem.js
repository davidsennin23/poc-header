import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    position: relative;
    padding: 10px 20px;
`;

const MenuItem = ({children}) =>
    <Item>
        {children}
    </Item>

export default MenuItem;