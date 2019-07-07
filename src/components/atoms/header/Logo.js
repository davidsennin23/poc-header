import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../content/logo_edited.jpg'

const Img = styled.img`
    width: 155px;
`;

const Logo = () => <Img src={logoImg}/>

export default Logo;