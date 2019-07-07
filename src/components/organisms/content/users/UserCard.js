import React from 'react';
import styled from 'styled-components';
import common from '../../../../styles/CommonStyles';

const Wrapper = styled.div`
    width: 50%;
    padding: 10px 10px;
    display: inline-block;
    ${common.clearFloat}
`;

const Card = styled.div`
    width: 100%;
    border 1px solid gray;
    padding: 10px 10px;
`;

const UserCard = ({children}) =>
    <Wrapper>
        <Card>
            {children}
        </Card>
    </Wrapper>

export default UserCard;