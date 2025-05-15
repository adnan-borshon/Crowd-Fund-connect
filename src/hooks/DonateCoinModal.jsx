import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";


export default function DonateCoinModal({ amount, toggleModal, checkFund }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const hasFunds = checkFund(amount);

  return (
    <section>
        <div className="modal">
      <div
        onClick={toggleModal}
        className={`overlay ${visible ? "opacity-50" : "opacity-0"}`}
      ></div>
      <div
        className={`modal-content ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        <h2 className="h2">{hasFunds ? "Donation Successful" : "Insufficient Coin"}</h2>
        <p className="p1">
          {hasFunds
            ? `${amount} coins have been donated.`
            : "You don't have enough coin for this donation. Add coins for donations."}
        </p>

        <div className={`flex ${hasFunds ? "justify-end" : "justify-between"}`}>
          <button
            onClick={toggleModal}
            className="button mt-4 !px-4 !py-1.5"
          >
            {hasFunds ? "Okay" : "No, thanks"}
          </button>
          {!hasFunds && (
            <Link
              to="/addCoins"
              className="button mt-4 !px-4 !py-1.5"
            >
              Add Coins
            </Link>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
