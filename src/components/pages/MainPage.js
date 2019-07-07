import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import HeaderContent from '../organisms/header/HeaderContent';
import MainContent from '../organisms/content/MainContent';
import UserList from '../organisms/content/users/UserList';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
  
const BodyContent = (
<Switch>
    <Route exact path="/" component={UserList(MainContent)}/>
    <Route path="/one" component={() => <MainContent>One</MainContent>}/>
    <Route path="/two" component={() => <MainContent>Two</MainContent>}/>
</Switch>
);

const MainPage = () =>
    <Router>
        <MainTemplate headerContent={<HeaderContent />} bodyContent={BodyContent} />
    </Router>    

export default MainPage;