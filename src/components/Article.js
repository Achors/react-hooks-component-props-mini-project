const Article = (props) => {

    const articlesPost = props.articledata.posts.map( (Keys,Index) => {
      return (
            <article key={Index}>
                <h3>{Keys.title} </h3>
                <small>{Keys.date ? Keys.date : 'January 1, 1970'} <span>{Keys.minutes} min read</span></small>
                <p>{Keys.preview}</p>
            </article>
        );
    });
    return (
      <div>
        {articlesPost}
      </div>
    )
  }
  
  export default Article;