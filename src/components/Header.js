import React from "react";
import blogData from "../data/blog";


function Header (){
    return (
        <h1>
            {`${blogData.name}`}
        </h1>
    )
}
export default Header;