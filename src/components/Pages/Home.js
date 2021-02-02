import React from 'react';
import Title from '../Title';
import Post from '../Post';






const Home = () => {
    return (
        <div className="home">
            <header className="title-header">
                 <Title />
            </header>
          <main className="home-main">
    
             <Post />
           </main>
        </div>
    )



}

export default Home;