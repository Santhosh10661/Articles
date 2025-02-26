import React from "react";
import Hero from "./components/Hero";
import PopularArticles from "./components/PopularArticles";
import LatestArticles from "./components/LatestArticles";

const HomePage = (props) => {
  let { data, setData, loading, setLoading } = props;

  return (
    <>
      <Hero />
      <PopularArticles data={data} dateConvertion={dateConvertion} />
      <LatestArticles data={data} dateConvertion={dateConvertion} />
    </>
  );
};

export const dateConvertion = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export default HomePage;
