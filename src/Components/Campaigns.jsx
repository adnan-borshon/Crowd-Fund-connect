import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CampaignProvider, useCampaigns } from "../Context/CampaignContext";
import CampaignCard from "./CampaignCard";

function Campaigns() {
   const { campaigns, loading } = useCampaigns();
  const [selectedPlan, setSelectedPlan] = useState("Ongoing");
 
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);

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
  if (loading) {
    return <p className="p-4 bg-black text-white ">Loading Campaigns...</p>;
  }

  return (
    <section className="text-center p-10 lg:px-20 lg:py-10 bg-gray-100 overflow-hidden">
      <div>
        <h1 className="h1 mb-2">Funding Campaigns</h1>
        <p className="p1">Discover causes that need your support</p>
      </div>

      <div className="container-campaign w-full ">

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
       <CampaignCard filteredCampaigns={filteredCampaigns}/>
       
  
          
          
       
      </div>
    </section>
  );
}

export default Campaigns;
