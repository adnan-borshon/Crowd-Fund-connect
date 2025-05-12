import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CampaignProvider, useCampaigns } from '../Context/CampaignContext';

function Campaigns() {
  // State to track the selected plan
  const [selectedPlan, setSelectedPlan] = useState('');
  const { campaigns, loading } = useCampaigns();
  if(loading){
    return <p className="p-4 bg-black text-white ">Loading Campaigns...</p>;
  }

  // Function to handle radio button change
  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };



  return (
    <section className="text-center p-10 lg:px-20 lg:py-10 bg-gray-100 overflow-hidden">
      <div>
        <h1 className="h1 mb-2">Funding Campaigns</h1>
        <p className="p1">Discover causes that need your support</p>
      </div>

      <div className="container w-full ">
        {/* <div className="filterTabs">
         
          <form>
            <fieldset>
          
              <div className="plan-section">
                <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
                <p className={`mb-4 text-gray-600 ${selectedPlan === 'basic' ? '' : 'hidden'}`}>
                  This is the basic plan with limited features and access. Ideal for users who need basic functionality.
                </p>

                <label className="radio-button inline-block mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="basic"
                    className="hidden peer"
                    onChange={handlePlanChange}
                    checked={selectedPlan === 'basic'}
                  />
                  <span className="custom-radio inline-block py-3 px-6 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-semibold text-center peer-checked:bg-blue-600 peer-checked:text-white peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 transition-all">
                    Basic
                  </span>
                </label>
              </div>

           
              <div className="plan-section">
                <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
                <p className={`mb-4 text-gray-600 ${selectedPlan === 'premium' ? '' : 'hidden'}`}>
                  Get additional features, priority support, and more. Perfect for power users who need more flexibility.
                </p>

                <label className="radio-button inline-block mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="premium"
                    className="hidden peer"
                    onChange={handlePlanChange}
                    checked={selectedPlan === 'premium'}
                  />
                  <span className="custom-radio inline-block py-3 px-6 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-semibold text-center peer-checked:bg-blue-600 peer-checked:text-white peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 transition-all">
                    Premium
                  </span>
                </label>
              </div>

           
              <div className="plan-section">
                <h3 className="text-xl font-semibold mb-2">Advanced Plan</h3>
                <p className={`mb-4 text-gray-600 ${selectedPlan === 'advanced' ? '' : 'hidden'}`}>
                  The advanced plan offers all premium features along with advanced tools and analytics for professionals.
                </p>

                <label className="radio-button inline-block mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="advanced"
                    className="hidden peer"
                    onChange={handlePlanChange}
                    checked={selectedPlan === 'advanced'}
                  />
                  <span className="custom-radio inline-block py-3 px-6 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-semibold text-center peer-checked:bg-blue-600 peer-checked:text-white peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 transition-all">
                    Advanced
                  </span>
                </label>
              </div>
            </fieldset>
          </form>
        </div> */}

        {/* all cards position */}
        <div className="campaign-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
          
          
          {campaigns.map((campaigns)=>(   
            <div key={campaigns.id} className="card  flex flex-col shrink  bg-white shadow-lg p-8 rounded-lg">
            <img src={campaigns.image} className='h-56 w-full rounded-2xl mb-3'/>
            <div className='grid grid-rows-3 mb-4 flex-grow'>

            <h1 className='text-2xl font-bold   text-start'>{campaigns.title}</h1>
            <p className='p1 text-start row-span-2'>{campaigns.description}</p>
            </div>

          <div className="progressbar grid grid-rows-3 gap-2">

            <div className='flex justify-between'> 
              <h3 className='h3'>Progress</h3>
              <h3 className='h3'>{parseFloat(((campaigns.raised*100)/campaigns.goal).toFixed(2))}%</h3>
            </div>
            {/* the progress bar */}
            <div className='bar bg-gray-300 rounded'>
          <div className="h-full rounded bg-blue-500 "
          style={{width: `${parseFloat(((campaigns.raised*100)/campaigns.goal).toFixed(2))}%`}}
          ></div>
            </div>
            <div className='flex justify-between'>
              <h3 className='p1'>Raised</h3>
              <h3 className='font-semibold'>{campaigns.raised}/{campaigns.goal} coins</h3>
            </div>
          </div>
          
            <Link to="/donate" className='button mt-3 w-full '>Donate Now</Link>
          
          </div>
 ))}
        </div>
      </div>
    </section>
  );
}

export default Campaigns;
