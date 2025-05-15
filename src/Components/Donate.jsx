import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCampaigns } from '../Context/CampaignContext';
import coin from "/Icons/coins.png";
import { useCoin } from "../Context/CoinContext.jsx";
import DonateCoinModal from '../hooks/DonateCoinModal.jsx';

function Donate() {
const {id} = useParams();
const {campaigns, loading}= useCampaigns();
  const { user, addCoins, removeCoins } = useCoin();
  const [amount, setAmount] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState("");

  const [DonateModal, setDonateModal]= useState(false);
  const [DonateAmount, setDonateAmount] = useState("");

 const toggleModal= ()=>{
        setDonateModal((prev)=>!prev);
    }

  useEffect(() => {
    
      const campaign = campaigns.find((c) => c.id === parseInt(id));
      setSelectedCampaign(campaign); 
  }, [id, campaigns]);

  if (loading) {
    return <p className="p-4 bg-black text-white ">Loading Campaigns...</p>;
  }

  const checkFund=(amount)=>{
    if(user.coins>=amount)return true;
    else return false;
  }
  return (
    <>
   <section className='w-full flex justify-center  pt-10 pb-10'>
    <div className="container w-[90%] lg:w-[60%] gap-4 text-center grid lg:grid-cols-2">

      {/* campaign card */}
<div className='Campaign-details flex flex-col justify-center items-center'>
{
   <div
              key={selectedCampaign.id}
              className="card  flex flex-col shrink bg-white shadow-2xl rounded-lg"
            >
              <img
                src={selectedCampaign.image}
                className="h-56 w-full object-fill rounded-tl-lg  rounded-tr-lg mb-3 !cursor-default transition-transform duration-700 hover:scale-y-100 hover:object-cover"
              />
              <div className="grid grid-rows-2 px-6 py- flex-grow">
                <h1 className="text-2xl font-bold text-start">
                  {selectedCampaign.title}
                </h1>
                <p className="p1 text-start line-clamp-2">
                  {selectedCampaign.description}
                </p>
              </div>

              <div className="progressbar px-6 py-3 grid grid-rows-3 gap-2">
                <div className="flex justify-between">
                  <h3 className="h3">Progress</h3>
                  <h3 className="h3">
                    {parseFloat(
                      ((selectedCampaign.raised * 100) / selectedCampaign.goal).toFixed(2)
                    )}
                    %
                  </h3>
                </div>
                {/* the progress bar */}
                <div className="bar bg-gray-300 dark:bg-gray-600 rounded">
                  <div
                    className="h-full rounded dark:bg-white bg-blue-500 "
                    style={{
                      width: `${parseFloat(
                        ((selectedCampaign.raised * 100) / selectedCampaign.goal).toFixed(2)
                      )}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <h3 className="p1 dark:!text-white">Raised</h3>
                  <h3 className="font-semibold">
                    {selectedCampaign.raised}/{selectedCampaign.goal} coins
                  </h3>
                </div>
              </div>
            
            </div>
}

</div>

{/* donate to the campaign part */}
<div className='donate-now '>

     <div className="container shrink-0 py-10 px-7  shadow-2xl  space-y-4 border border-gray-300 rounded-lg bg-white">
          <div className="upper-part flex flex-col items-center">
            <img src={coin} className="h-10 w-10 mb-4" />
            <h1 className="text-4xl font-bold mb-2">Make a Donation</h1>
  
            <p className="p1 text-sm ">
              Your current balance: ${user.coins} coins
            </p>
          </div>
          <div className="lower-part mx-2">
            <h2 className="h3 text-start mb-1">Donation Amount (in coins)</h2>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-gray-400 p-2 rounded-lg w-full"
            />
          </div>
          <div className="btn w-full flex justify-around space-x-4 px-2">
            <button
              onClick={() => setAmount("")}
              className="cancel button w-1/2 !bg-gray-200 shadow-md !text-black hover:!bg-gray-400 hover:!border-0"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if(checkFund(amount)){
                 toggleModal();
                  removeCoins(amount);
                }
                else toggleModal();

                setDonateAmount(amount);
                setAmount("");
              }}
              className="donate button shadow-md w-1/2"
            >
              Donate
            </button>
          </div>
        </div>

</div>

    </div>
   </section>
   {DonateModal &&
     
     <DonateCoinModal amount={DonateAmount} toggleModal={toggleModal} checkFund={checkFund}/>
  }
   </>
  );
}

export default Donate;