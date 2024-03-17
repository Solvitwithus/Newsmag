import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./newsitem";

function NewsBoard  ({category})  {
    const [article,setArticle] = useState([])
    useEffect (()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=244fdac8ae83435abe25c0dc6164382d`
        fetch(url).then(response=>response.json()).then(data=> setArticle(data.articles))
    },[category])
  return (
    <section>
        <h2 class="text-center"> Latest <span class="badge bg-danger">News</span></h2>
        {article.map((news,index)=>{
return<NewsItem key={index} title = {news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </section>
  )
}

export default NewsBoard;