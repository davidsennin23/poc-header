import React, { Component } from 'react';

const UserMeals = (Container) =>
    class extends Component {

        render() {
            console.log(this.props.match.params);
            return (
                <Container>
                    {"Two" + this.props.match.params.userFilter}
                </Container>
            );
        }

    }

export default UserMeals;