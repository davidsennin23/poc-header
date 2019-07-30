import React from 'react';
import {app} from '../../../app/AppBuilder';
import {registerComponent, unregisterComponent} from '../../utils/SharedStates';

const UserForm = (Container, Form) =>
    class extends React.Component {
        state = {}

        handleSubmit = (e) => console.log(e);

        componentDidMount() {
            let user, userID;
            if (this.props.match.params.userFilter) {
                userID = parseInt(this.props.match.params.userFilter);
                user = app
                    .customers
                    .getCustomerByID(userID);
                console.log(userID, user.getJson());
            }
            this.setState({userID, user: user ? user.getJson() : {}});
            registerComponent(this, "userForm");
        }

        componentWillUnmount() {
            unregisterComponent(this);
        }

        onSharedStateChange(state) {
            console.log(state);
        }

        render() {
            const { user } = this.state;
            return (
                <Container>
                    <Form 
                        user={user} 
                        onFormSubmit={this.handleSubmit}
                        sharedState="userForm"
                    />
                </Container>
            )
        }

    }

export default UserForm;