import React, { use, useState } from "react";
import coin from "/Icons/coins.png";
import { useCoin } from "../Context/CoinContext.jsx";
import CoinModal from "../hooks/CoinModal.jsx";

function AddCoins() {
  const { user, addCoins, removeCoins } = useCoin();
  const [amount, setAmount] = useState("");
     const [modalOpen, setModalOpen]= useState(false);
    const [ModalAmount, setModalAmount]= useState("");
    const toggleModal= ()=>{
        setModalOpen((prev)=>!prev);
    }

  return (
    <>
    <section className="text-center flex justify-center items-center h-[60vh]">
      <div className="container shrink-0 py-10 px-7 max-w-[80%] md:min-h-[80%] md:max-w-[30%] md:max-h-[80%] shadow-lg  space-y-4 border border-gray-300 rounded-lg bg-white">
        <div className="upper-part flex flex-col items-center">
          <img src={coin} className="h-10 w-10 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Add Coins</h1>

          <p className="p1 text-sm ">
            Add virtual coins to your account to donate to campaigns.
          </p>
        </div>
        <div className="lower-part mx-2">
          <h2 className="h3 text-start mb-1">Number of Coins</h2>
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
            onClick={
              () => setAmount("")
            }
            className="cancel button w-1/2 !bg-gray-200 shadow-md !text-black hover:!bg-gray-400 hover:!border-0"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              addCoins(amount);
              setModalAmount(amount)
              toggleModal();
              setAmount("");
            }}
            className="add button shadow-md w-1/2"
          >
            Add Coins
          </button>
        </div>
      </div>
     
    </section>
     { modalOpen &&
        <CoinModal amount={ModalAmount} toggleModal={toggleModal}/>}

   
     </>
  );
}

export default AddCoins;
