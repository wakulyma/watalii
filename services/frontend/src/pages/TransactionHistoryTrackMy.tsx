import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionHistoryTrackMy.css";

const TransactionHistoryTrackMy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyBureauTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  const onMyHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onMySpendingsTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onTrackMyBillsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBalanceTextClick = useCallback(() => {
    navigate("/transaction-history-balance");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  return (
    <div className="transaction-history-track-my">
      <div className="transaction-history-track-my-child" />
      <div
        className="transaction-history-track-my-item"
        data-scroll-to="rectangle"
      />
      <div className="transaction-history-track-my-inner" />
      <div className="transaction-history-track-my-child1" />
      <div className="transaction-history-track-my-child2" />
      <div className="watalii-118" />
      <img
        className="sneha-cecil-xns-qgcvvoi-unspla-icon2"
        alt=""
        src="/snehacecilxnsqgcvvoiunsplash-12@2x.png"
      />
      <div className="home21" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services26" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau23" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us18">Contact Us</div>
      <div className="my-history2" onClick={onMyHistoryTextClick}>
        My History
      </div>
      <div className="my-wallet21" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div className="my-spendings2" onClick={onMySpendingsTextClick}>
        My Spendings
      </div>
      <b className="track-mybills2" onClick={onTrackMyBillsTextClick}>
        Track MyBills
      </b>
      <div className="balance3" onClick={onBalanceTextClick}>
        Balance
      </div>
      <b
        className="transaction-history17"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </b>
      <div className="sokoni25" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <b className="wasini-dolphin-island1">Wasini Dolphin Island</b>
      <b className="diani-backpackers1">Diani Backpackers</b>
      <b className="shark-gills">{`Shark Gills `}</b>
      <div className="div10">10/10/2023</div>
      <div className="div11">18/10/2023</div>
      <div className="div12">18/10/2023</div>
      <div className="transaction-history-track-my-child3" />
      <div className="transaction-history-track-my-child4" />
      <div className="transaction-history-track-my-child5" />
      <b className="kes-3270">{`Kes 3270 `}</b>
      <b className="kes-8000">Kes 8000</b>
      <b className="kes-4000">Kes 4000</b>
      <b className="total-spent">Total Spent</b>
      <b className="total-spent1">Total Spent</b>
      <b className="total-spent2">Total Spent</b>
      <img className="op-1-icon17" alt="" src="/op-1@2x.png" />
      <img
        className="n-1-icon"
        alt=""
        src="/328135759-731665901810610-4402471605468976596-n-1@2x.png"
      />
      <img className="watalii-2-icon8" alt="" src="/watalii-3@2x.png" />
      <img className="dove1-1-icon3" alt="" src="/dove1-11@2x.png" />
      <img className="space-x-13" alt="" src="/space-x-1@2x.png" />
      <div className="transaction-history-track-my-child6" />
      <img
        className="material-symbolssearch-icon"
        alt=""
        src="/materialsymbolssearch.svg"
      />
    </div>
  );
};

export default TransactionHistoryTrackMy;
