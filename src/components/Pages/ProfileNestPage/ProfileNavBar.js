// import React from 'react';
// import Profile from './Profile';
// import ProfilePost from './ProfilePosts';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//   } from "react-router-dom";
// import DirectMessages from './ProfileDirectMessages';
// import SavedPost from './ProfileSavedPost';

// const ProfileNavBar =  () => {
//     return (
//         <div>
//             <nav className="profile-nav-bar">
//                 <Link to ='/profile'> Your Posts </Link>
//                 <Link to ='/profile/directmessages'>Direct Messages </Link>
//                 <Link to ='/profile/savedpost'>SavedPost </Link>
//             </nav>
//             <Switch>
//                 <Route path="/profile">
//                     <ProfilePost  />
//                 </Route>
//                 <Route path="/profile/directmessages">
//                     <DirectMessages  />
//                 </Route>
//                 <Route path="/profile/savedpost">
//                     <SavedPost  />
//                 </Route>
//             </Switch>


//         </div>

//     )

    
// }
// export default ProfileNavBar;
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



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
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <nav className="profile-nav-bar">
        <Link to={`${url}/mypost`}>My Posts</Link>
        <Link to={`${url}/directmessages`}>Direct Messages</Link>
        <Link to={`${url}/savedpost`}>Saved Post</Link>
      </nav>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
 
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}


