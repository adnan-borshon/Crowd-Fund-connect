import React from 'react';
import { Link } from 'react-router-dom';

function CampaignCard({filteredCampaigns}) {
  return (
    <section>
                <div className="campaign-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 rounded-lg">

           {
          filteredCampaigns.map((campaigns) =>
          (
            <div
              key={campaigns.id}
              className="card  flex flex-col shrink bg-white shadow-xl rounded-lg"
            >
              <img
                src={campaigns.image}
                className="h-56 w-full object-cover rounded-tl-lg  rounded-tr-lg mb-3 hover-effect-normal !cursor-default"
              />
              <div className="grid grid-rows-2 px-6 py- flex-grow">
                <h1 className="text-2xl font-bold text-start">
                  {campaigns.title}
                </h1>
                <p className="p1 text-start line-clamp-2">
                  {campaigns.description}
                </p>
              </div>

              <div className="progressbar px-6 py-3 grid grid-rows-3 gap-2">
                <div className="flex justify-between">
                  <h3 className="h3">Progress</h3>
                  <h3 className="h3">
                    {parseFloat(
                      ((campaigns.raised * 100) / campaigns.goal).toFixed(2)
                    )}
                    %
                  </h3>
                </div>
                {/* the progress bar */}
                <div className="bar bg-gray-300 rounded">
                  <div
                    className="h-full rounded bg-blue-500 "
                    style={{
                      width: `${parseFloat(
                        ((campaigns.raised * 100) / campaigns.goal).toFixed(2)
                      )}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <h3 className="p1">Raised</h3>
                  <h3 className="font-semibold">
                    {campaigns.raised}/{campaigns.goal} coins
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-4 flex">
                <Link to={`/donate/${campaigns.id}`} className="button mt-3 w-full ">
                  Donate Now
                </Link>
              </div>
            </div>
          )
          
          )}
          </div>
    </section>
  );
}

export default CampaignCard;