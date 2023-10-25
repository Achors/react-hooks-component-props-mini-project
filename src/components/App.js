import React from "react";
import blogData from "../data/blog";
import logo from "../assets/logo";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <h1>{blogData.name}</h1>
      </header>
      <about>
        <aside>
        <img src={`${logo}`} alt="blog logo" />
        <p>{blogData.about}</p>
        </aside>
      </about>
      <articlelist>
        <main>
        {posts.map((post, index) => (
      <Article key={index} post={post} />
    ))}
        </main>
      </articlelist>
    </div>
  );
}

export default App;
