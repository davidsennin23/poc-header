import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import HeaderContent from '../organisms/header/HeaderContent';
import MainContent from '../organisms/content/MainContent';
import UserList from '../organisms/content/users/UserList';
import UserMeals from '../organisms/content/meals/UserMeals';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
  
const BodyContent = (
<Switch>
    <Route exact path="/" component={UserList(MainContent)}/>
    <Route path="/one/:userFilter?" component={(props) => <MainContent>{props.match.params.userFilter}</MainContent>}/>
    <Route path="/two/:userFilter?" component={UserMeals(MainContent)}/>
</Switch>
);

const MainPage = () =>
    <Router>
        <MainTemplate headerContent={<HeaderContent />} bodyContent={BodyContent} />
    </Router>    

export default MainPage;