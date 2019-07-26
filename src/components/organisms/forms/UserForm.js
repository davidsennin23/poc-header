import React from 'react';
import {app} from '../../../app/AppBuilder';

const UserForm = (Container, Form) =>
    class extends React.Component {
        state = {}
        componentDidMount() {
            const userID = parseInt(this.props.match.params.userFilter);
            const user = app
                .customers
                .getCustomerByID(userID);
            console.log(userID, user.getJson());
            this.setState({userID, user: user ? user.getJson() : {}});
        }

        render() {
            const { user } = this.state;
            return (
                <Container>
                    <Form user={user}/>
                </Container>
            )
        }

    }

export default UserForm;