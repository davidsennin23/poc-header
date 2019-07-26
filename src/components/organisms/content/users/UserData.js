import React from 'react';
import styled from 'styled-components';
import CommonText from '../../../atoms/text/CommonText';
import HighlightedText from '../../../atoms/text/HighlightedText';
import InternalLink from '../../../molecules/links/InternalLink';

/* Faz o espaçamento entre os textos */
const MakeContainer = ({ marginBottom = 'auto', paddingLeft = '0' }, content) => {
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

const UserData = ({ user }) =>
    MakeContainer({ paddingLeft: '0.6em' }, <>
        {MakeContainer({ marginBottom: '0.375em' },
            <InternalLink to={`/two/${user.getID()}`}>
                <HighlightedText>{user.getNome() + " " + user.getSobrenome()}</HighlightedText>
            </InternalLink>
        )}
        {MakeContainer({ marginBottom: '0.1em' },
            <CommonText>{user.getTelefone()}</CommonText>
        )}
        {MakeContainer({ marginBottom: '0.15em' },
            <CommonText>{user.getEmail()}</CommonText>
        )}
        <InternalLink to={`/one/${user.getID()}`}>
            <CommonText>{"Editar"}</CommonText>
        </InternalLink>
    </>)

export default UserData;