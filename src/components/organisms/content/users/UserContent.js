import React from 'react';
import styled from 'styled-components';
import MainInfoTemplate from './template/MainInfoTemplate';
import UserFoto from './UserFoto';
import UserData from './UserData';

const UserContainer = styled.div`
    width: 100%;
    display: flex;
`;

/* TODO: Substituir o UserContainer por <></> */
/* TODO: Criar componente de lazy-load para as fotos */
const UserContent = ({user}) =>
    <UserContainer>
        <MainInfoTemplate width={"100px"} height={"70px"}>
            <UserFoto src={user.getUrlFoto()}/>
        </MainInfoTemplate>
        <MainInfoTemplate>
            <UserData user={user}/>
        </MainInfoTemplate>
    </UserContainer>

export default UserContent;