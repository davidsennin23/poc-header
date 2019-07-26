import React, { Component } from 'react';
import { app } from '../../../../app/AppBuilder';
import UserCard from './UserCard';
import UserContent from './UserContent'

const UserList = (ContentContainer) => 
    class extends Component {

        state = {
            users: [],
        }

        componentDidMount = () => {
            this.setState(prevState => {
                return {
                    users: prevState.users.concat(
                        app.customers
                            .loadCustomersList()
                            .getCustomersList()    
                    )
                }
            });
        }

        render() {
            const { users } = this.state;
            return (
                <ContentContainer>
                    {users
                        .map((user, index) => 
                            <UserCard key={index}>
                                <UserContent user={user}/>
                            </UserCard>
                        )
                    }
                </ContentContainer>
            );
        }

    }

export default UserList;