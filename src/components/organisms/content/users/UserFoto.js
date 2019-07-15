import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    max-width: 100%;
    width: 100%;
    max-height: 100%;
`;

/* TODO: Fazer a fotos ser apresentada como um círculo */
const UserFoto = ({src}) =>
    <Img src={src}/>

export default UserFoto;