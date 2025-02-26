import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dateConvertion } from "./HomePage";
import { FaArrowLeftLong } from "react-icons/fa6";
const FullArticle = (props) => {
  const { id } = useParams();
  let { data } = props;
  let navigate = useNavigate();

  const openedArt = data.filter((da) => da.id === parseInt(id));
  const related = data.sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <section className="text-gray-800 container mx-auto">
      <a href="/" className="py-3 flex items-center cursor-pointer">
        <FaArrowLeftLong className=" " /> <span className="mx-3">back</span>
      </a>
      <div className="flex ">
        <div className="flex-2">
          <h1 className="text-5xl font-medium my-5">{openedArt[0].title}</h1>
          <img src={openedArt[0].urlToImage} alt="" className="mx-auto" />
          <h1 className="text-3xl my-5">
            {openedArt[0].content.replace(/[….][\s\S]*$/, "").trim()}
          </h1>
          <p className="text-3xl">{openedArt[0].description}</p>

          <div className="flex justify-between my-10">
            <p>{dateConvertion(openedArt[0].publishedAt)}</p>
            <a href={openedArt[0].url} target="blank">
              publised by
            </a>
          </div>
        </div>
        <div className="flex-1 mx-5 ">
          <h1 className="text-6xl font-bold my-5 text-center">
            Related Articles
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {related.map((item) => {
              return (
                <div
                  className="w-full h-fit cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300 p-3"
                  onClick={() => navigate(`/fullarticle/${item.id}`)}
                >
                  <img src={item.urlToImage} alt="" className="aspect-1/1" />
                  <h1 className="text-md line-clamp-2 my-2">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullArticle;
