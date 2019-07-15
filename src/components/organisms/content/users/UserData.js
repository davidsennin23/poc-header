import React from 'react';
import styled from 'styled-components';
import CommonText from '../../../atoms/text/CommonText';
import HighlightedText from '../../../atoms/text/HighlightedText';

/* Faz o espaçamento entre os textos */
const MakeContainer = ({marginBottom = 'auto', paddingLeft = '0'}, content) => {
    const Container = styled.div`
        margin-bottom: ${marginBottom};
        padding-left: ${paddingLeft};
    `;
    return (
        <Container>
            {content}
        </Container>
    );
}

/* TODO: Fazer o texto do nome ser um link para a listagem de fotos, usando o usuário como filtro */
/* TODO: Fazer o texto de Editar ser  */

const UserData = ({ user }) =>
    MakeContainer({paddingLeft: '0.6em'},<>
        {MakeContainer({marginBottom: '0.375em'},
            <HighlightedText>{user.getNome() + " " + user.getSobrenome()}</HighlightedText>
        )}
        {MakeContainer({marginBottom: '0.1em'},
            <CommonText>{user.getTelefone()}</CommonText>
        )}
        {MakeContainer({marginBottom: '0.15em'},
            <CommonText>{user.getEmail()}</CommonText>
        )}
        <CommonText>{"Editar"}</CommonText>
    </>)

export default UserData;