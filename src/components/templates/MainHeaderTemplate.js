import React from 'react';
import styled from 'styled-components';
import {
    Logo, Menu
} from '../atoms/template/TemplateExporter'

const Template = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    padding: 10px 10px;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
`;

const MainHeaderTemplate = ({logoContent, menuContent}) =>
    <Template>
        <Logo>{logoContent}</Logo>
        <Menu>{menuContent}</Menu>
    </Template>

export default MainHeaderTemplate;