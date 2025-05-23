import React from "react";
import { useNews } from "../Context/NewsContext.jsx";

function News() {
  const { news, loading } = useNews();

  if (loading) {
    return <p className="p-4 bg-black text-white w-screen h-screen flex justify-center items-center">Loading News...</p>;
  }
  return (
    <section className="overflow-hidden mx-5 flex flex-col items-center justify-center">
     <h1 className="my-14 text-4xl font-extrabold color">Latest News</h1>
      <div className=" w-full grid grid-cols-1">
         
        {news.map((item) => (
          <div
            key={item.id}
            className="mb-8 lg:mx-50 space-y-4 flex flex-col justify-start items-start"
          >
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="date p1 dark:!text-gray-400">{item.date}</p>
            <p className=" text-lg p1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
