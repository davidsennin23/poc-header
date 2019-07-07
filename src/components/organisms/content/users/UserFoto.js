import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    max-width: 100%;
`;

const UserFoto = ({src}) =>
    <Img src={src}/>

export default UserFoto;