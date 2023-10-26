import React from "react";
import logo from "../assets/logo";
import blogData from "../data/blog";

function About (){
    return (
        <div>
            <aside>
                <img src={`${logo}`} alt="blog logo" />
                <p>{blogData.about}</p>
        </aside>
        </div>
    )
}

export default About;