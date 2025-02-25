import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PopularArticles from "./components/PopularArticles";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const API_KEY =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d5475b1c03e42418d72eaa35aca9372";
  // "http://api.mediastack.com/v1/news?access_key=3cc53083d030c7dfb7b43c88291c32b5&countries=us&languages=en&limit=5";

  // "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d5475b1c03e42418d72eaa35aca9372";

  useEffect(() => {
    const Fetch = async () => {
      const SS_Data = JSON.parse(sessionStorage.getItem("data"));
      if (SS_Data) {
        setData(SS_Data);
        console.log(SS_Data);
        setLoading(false);
      } else {
        const res = await fetch(API_KEY).then((response) => response.json());
        console.log(res.articles);
        sessionStorage.setItem("data", JSON.stringify(res.articles));
        setData(res.articles);
        setLoading(false);
      }
    };

    Fetch();
  }, []);

  return (
    <main className="bg-gray-50">
      <Hero />
      {loading === false && <PopularArticles data={data} />}
    </main>
  );
}

export default App;
