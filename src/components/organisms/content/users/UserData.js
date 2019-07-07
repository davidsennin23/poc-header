import React from 'react';
import CommonText from '../../../atoms/text/CommonText';

const UserData = ({user}) =>
    <>
        <CommonText>{user.getNome()}</CommonText>
        <CommonText>{user.getEmail()}</CommonText>
        <CommonText>{user.getTelefone()}</CommonText>
        <CommonText>{user.desdeFormatted()}</CommonText>
    </>

export default UserData;