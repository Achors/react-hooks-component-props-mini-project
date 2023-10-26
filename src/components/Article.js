import React from "react";
import blogData from "../data/blog";
// import Articlelist from "./Articlelist";

const Article = ({ posts, key }) => (
    <div key={key}>
      <h2>{blogData.posts.title}</h2>
      <p>{blogData.posts.content}</p>
    </div>
  );




export default Article;