import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionHistoryBalance.css";

const TransactionHistoryBalance: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home-pagesokoni");
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
    navigate("/transaction-history-track-my-bills");
  }, [navigate]);

  const onBalanceTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  return (
    <div className="transaction-history-balance">
      <section className="transaction-history-balance-child" />
      <div
        className="transaction-history-balance-item"
        data-scroll-to="rectangle"
      />
      <div className="watalii-12" />
      <img
        className="sneha-cecil-xns-qgcvvoi-unspla-icon"
        alt=""
        src="/snehacecilxnsqgcvvoiunsplash-1@2x.png"
      />
      <div className="home2" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services2" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau2" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us2">Contact Us</div>
      <div className="my-history" onClick={onMyHistoryTextClick}>
        My History
      </div>
      <div className="my-wallet2" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div className="my-spendings" onClick={onMySpendingsTextClick}>
        My Spendings
      </div>
      <div className="track-mybills" onClick={onTrackMyBillsTextClick}>
        Track MyBills
      </div>
      <b className="balance" onClick={onBalanceTextClick}>
        Balance
      </b>
      <b
        className="transaction-history2"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </b>
      <div className="sokoni4" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <img className="op-1-icon2" alt="" src="/op-1@2x.png" />
      <img className="watalii-2-icon" alt="" src="/watalii-3@2x.png" />
      <div className="transaction-history-balance-inner" />
      <div className="transaction-history-balance-child1" />
      <b className="usd-5400">USD 5400</b>
      <b className="account-balance">Account Balance</b>
      <b className="my-wallet3">My Wallet</b>
      <img className="logo-1-icon" alt="" src="/logo-1@2x.png" />
      <div className="div">20/10/2023</div>
    </div>
  );
};

export default TransactionHistoryBalance;
