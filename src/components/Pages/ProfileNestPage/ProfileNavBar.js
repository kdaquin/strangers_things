import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ProfilePost from "./ProfilePosts";
import ProfileDirectMessages from './ProfileDirectMessages';
import ProfileSavedPost from './ProfileSavedPost';



export default function NestingExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Topics() {
  
  let { path, url } = useRouteMatch();

  return (
    <div>
      <nav className="profile-nav-bar">
        <Link to={`${url}/mypost`}>My Posts</Link>
        <Link to={`${url}/directmessages`}>Direct Messages</Link>
        <Link to={`${url}/savedpost`}>Saved Posts</Link>
      </nav>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/mypost`}>
          <ProfilePost />
        </Route>
        <Route path={`${path}/directmessages`}>
          <ProfileDirectMessages />
        </Route>
        <Route path={`${path}/savedpost`}>
          <ProfileSavedPost />
        </Route>
      </Switch>
    </div>
  );
}


