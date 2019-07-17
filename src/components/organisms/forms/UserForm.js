import React from 'react';

const UserForm = (Container, Form) =>
    class extends React.Component {

        render() {
            return (
                <Container>
                    <Form/>
                </Container>
            )
        }

    }

export default UserForm;