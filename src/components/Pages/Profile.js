import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from "react";
import Title from '../Title';
import Post from '../Post';
import ProfileNavBar from './ProfileNestPage/ProfileNavBar';

const Profile = () => {

    return (
        <div>
            <Title/>
            <main>
                <h2 className="username">
                    {localStorage.getItem('username')}
                </h2>
                <ProfileNavBar />
            </main>
        </div>
    )



}

export default Profile;