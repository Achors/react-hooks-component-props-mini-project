import React from "react";
// import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import Articlelist from "./Articlelist";
import Article from "./Article";


// console.log(blogData);

function App() { 
  const posts = ([]);
  return (
    <div className="App">
      <Header />
      <About />
      <Articlelist posts={posts}/>
      <Article />            
    </div>
  );
}

export default App;
