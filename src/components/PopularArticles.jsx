import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { dateConvertion } from "./Template";

const PopularArticles = (props) => {
  let { data } = props;
  let navigate = useNavigate();

  return (
    <section className="py-10 text-gray-800 container mx-auto ">
      <h1 className="text-4xl w-full font-medium mb-5">Popular Articles</h1>

      <div className="flex flex-col lg:flex-row">
        <div className=" lg:w-50 flex-1 ">
          <div
            className="cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 p-3"
            onClick={() => navigate(`/fullarticle/${data[0].id}`)}
          >
            <img
              src={data[0].urlToImage}
              alt=""
              className=""
              style={{ width: "100%" }}
            />
            <p className="mt-5">{dateConvertion(data[0].publishedAt)}</p>
            <h1 className="text-4xl truncate font-medium py-4">
              {data[0].title}
            </h1>
            <p className="text-xl">{data[0].description}</p>
          </div>
        </div>

        <div className=" lg:w-50 flex-1 flex flex-col mx-3 xl:mx-10 ">
          {data.slice(2, 5).map((da) => {
            return (
              <div
                className="flex flex-1 mb-5 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 p-3"
                onClick={() => navigate(`/fullarticle/${da.id}`)}
                key={da.id}
              >
                <img
                  src={da.urlToImage}
                  alt=""
                  className="flex-1 rounded-md"
                  style={{ width: "100px", height: "100%" }}
                />
                <div className="flex-2 mx-10">
                  <p>{dateConvertion(da.publishedAt)}</p>
                  <h1 className="text-4xl font-medium line-clamp-3 my-3">
                    {da.title}
                  </h1>
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
