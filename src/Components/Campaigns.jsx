import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CampaignProvider, useCampaigns } from "../Context/CampaignContext";

function Campaigns() {
   const { campaigns, loading } = useCampaigns();
  const [selectedPlan, setSelectedPlan] = useState("Ongoing");
 
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  // if (loading) {
  //   return <p className="p-4 bg-black text-white ">Loading Campaigns...</p>;
  // }

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };
useEffect(() => {
    if (selectedPlan) {
      const tempFilteredArray = campaigns.filter(
        (campaign) => campaign.status.toLowerCase() === selectedPlan.toLowerCase()
      );
      setFilteredCampaigns(tempFilteredArray);
    } else {
      setFilteredCampaigns(campaigns); 
    }
  }, [selectedPlan, campaigns]);

  return (
    <section className="text-center p-10 lg:px-20 lg:py-10 bg-gray-100 overflow-hidden">
      <div>
        <h1 className="h1 mb-2">Funding Campaigns</h1>
        <p className="p1">Discover causes that need your support</p>
      </div>

      <div className="container w-full ">

        {/* filter tabs */}
        <div className="filterTabs  py-1  ">
          <div className="tabContainer flex ">

          {/* On going tab */}
            <div className="ongoing">
              <label className=" cursor-pointer">
                <input
                  type="radio"
                  name="CampaignStatus"
                  value="Ongoing"
                  className="hidden peer"
                  onChange={handlePlanChange}
                  checked={selectedPlan === "Ongoing"}
                
                />
                <span
                  className={`filter-tabs ${
                    selectedPlan === "Ongoing"
                      ? " border-b-2 border-[#348cff]"
                      : ""
                  }`}
                >
                  Ongoing
                </span>
              </label>
            </div>
    {/* Recent tab */}
            <div className="recent">
              <label className=" cursor-pointer">
                <input
                  type="radio"
                  name="CampaignStatus"
                  value="Recent"
                  className="hidden peer"
                  onChange={handlePlanChange}
                  checked={selectedPlan === "Recent"}
                    
                />
                <span
                  className={`filter-tabs ${
                    selectedPlan === "Recent"
                      ? " border-b-2 border-[#348cff]"
                      : ""
                  }`}
                >
                  Recent
                </span>
              </label>
            </div>
  {/* Ended tab */}
            <div className="ended">
              <label className=" cursor-pointer">
                <input
                  type="radio"
                  name="CampaignStatus"
                  value="Ended"
                  className="hidden peer"
                  onChange={handlePlanChange}
                  checked={selectedPlan === "Ended"}
                  
                />
                <span
                  className={`filter-tabs ${
                    selectedPlan === "Ended" ? " border-b-2 border-[#348cff]" : ""
                  }`}
                >
                  Ended
                </span>
              </label>
            </div>
          </div>
        </div>


        {/* all cards position */}
        <div className="campaign-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 rounded-lg">
          {/* cards with status logic */}
          
          
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
                <Link to="/donate" className="button mt-3 w-full ">
                  Donate Now
                </Link>
              </div>
            </div>
          )
          
          )}
        </div>
      </div>
    </section>
  );
}

export default Campaigns;
