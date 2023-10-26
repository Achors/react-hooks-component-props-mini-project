import React, {useEffect, useState} from "react";
import Article from "./Article";
import blogData from "../data/blog";

const ArticleList = () => {
    const [mounted, setMounted] = useState(false);
    let dataStore = '';

    useEffect( () => {
        setMounted(true);
    }, []);
    
    const renderArticles = () => {
        if ( mounted === true ) {
            dataStore = blogData;
            return (
                <div>
                    <Article articledata={dataStore} />
                </div>
            );
        }
    };

    return (
        <main>
            {renderArticles()}
        </main>
    );
}

export default ArticleList;








