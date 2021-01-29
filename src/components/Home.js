import React from 'react';
import Title from './Title';
import Post from './Post';
const CategorySection = () => {
    return (
        <div className="category-section">
            <section className="category-list">
               <p>placeholder</p>
               <p>placeholder</p>
               <p>placeholder</p>
               <p>placeholder</p>
               <p>placeholder</p>
               <p>placeholder</p>
           </section>
           
        </div>
    )
}





const Home = () => {
    return (
        <div className="home">
            <header className="title-header">
                 <Title />
            </header>
          <main className="home-main">
            <CategorySection />
             <Post />
           </main>
        </div>
    )



}

export default Home;