import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import FullArticle from "./FullArticle";

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
        console.log("alreayu, yes");
        setData(SS_Data);
        console.log(SS_Data);
        setLoading(false);
      } else {
        console.log("alreayu, no");
        const res = await fetch(API_KEY).then((response) => response.json());
        const result = res.articles.map((art, index) => {
          return { ...art, id: 0 + index + 1 };
        });
        console.log(result);
        sessionStorage.setItem("data", JSON.stringify(result));
        setData(result);
        setLoading(false);
      }
    };

    Fetch();
  }, []);

  return (
    <main className="bg-gray-50">
      {loading === false && (
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={data}
                setData={setData}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />

          <Route
            path="/fullarticle/:id"
            element={<FullArticle data={data} />}
          />
        </Routes>
      )}
      <Footer />
    </main>
  );
}

export default App;
