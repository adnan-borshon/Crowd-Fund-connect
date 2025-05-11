import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const newsContext = createContext({
    news: [],
  loading: false
})

export const NewsProvider = ({children}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchNews = async () =>{
            try {
                setLoading(true);
                const response = await fetch("/API/news.json");
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setNews(data);
                

            } catch (error) {
                console.error("Error fetching news:", error);

            }finally {
                setLoading(false);
            }

        }
        fetchNews();
    },[])

    return(
        <newsContext.Provider value  = {{news, loading}}>
            {children}
        </newsContext.Provider>
    )
}

export const useNews = () => useContext(newsContext);