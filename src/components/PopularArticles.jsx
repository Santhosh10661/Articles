import React from "react";

const PopularArticles = (props) => {
  let { data } = props;
  return (
    <section className="p-5 text-gray-800">
      <h1 className="text-7xl w-full">Popular Articles</h1>

      <div className="flex">
        <div className="flex-1">
          <div>
            <img src={data[0].urlToImage} alt="" />
            <p>{data[0].publishedAt}</p>
            <h1 className="text-6xl">{data[0].title}</h1>
            <p>{data[0].description}</p>
          </div>
        </div>
        <div className="flex-1">
          {data.slice(2, 5).map((da, index) => {
            return (
              <div className="flex my-5" key={index}>
                <img
                  src={da.urlToImage}
                  alt=""
                  className="flex-1"
                  style={{ width: "100px", height: "100%" }}
                />
                <div className="flex-1">
                  <p>{da.publishedAt}</p>
                  <h1 className="text-2xl">{da.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PopularArticles;
