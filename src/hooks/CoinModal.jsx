

import React, { useEffect, useState } from "react";

export default function CoinModal({ amount, toggleModal }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section>
        <div className="modal">
      <div
        onClick={toggleModal}
        className={`overlay  ${visible ? "opacity-50" : "opacity-0"}`}
      ></div>
      <div
        className={`modal-content ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        <h2 className="h2">Coins Added</h2>
        <p className="p1">{`${amount} coins have been added to your account`}</p>
        <button
          onClick={toggleModal}
          className="button mt-4 !px-4 !py-1.5 self-end"
        >
          Okay
        </button>
      </div>
      </div>
    </section>
  );
}
