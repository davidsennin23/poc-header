import React from 'react';
import styled from 'styled-components';
import MainInfoTemplate from './template/MainInfoTemplate';
import UserFoto from './UserFoto';
import UserData from './UserData';

const UserContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: top;
`;

const UserContent = ({user}) =>
    <UserContainer>
        <MainInfoTemplate>
            <UserFoto src={user.getUrlFoto()}/>
        </MainInfoTemplate>
        <MainInfoTemplate>
            <UserData user={user}/>
        </MainInfoTemplate>
    </UserContainer>

export default UserContent;