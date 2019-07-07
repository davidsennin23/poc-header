import React from 'react';
import MainHeaderTemplate from '../../templates/MainHeaderTemplate';
import Logo from '../../atoms/header/Logo';
import Menu from './menu/Menu'

const HeaderContent = () =>
    <MainHeaderTemplate
        logoContent={<Logo/>}
        menuContent={<Menu/>}
    >
    </MainHeaderTemplate>

export default HeaderContent;