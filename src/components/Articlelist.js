import React from "react";
import Article from "./Article";
// import blogData from "../data/blog";

const ArticleList = ({posts }) => (
    <main>
      {posts.map((post, index) => (
        <Article key={index} post={post} />
      ))}
    </main>
  );
  
  export default ArticleList;








