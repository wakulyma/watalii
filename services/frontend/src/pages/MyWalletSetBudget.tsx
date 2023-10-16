import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyWalletSetBudget.css";

const MyWalletSetBudget: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onMyWalletText1Click = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onLoadWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onAvailableBalanceTextClick = useCallback(() => {
    navigate("/my-wallet-available-balance");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyBureauTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  return (
    <div className="my-wallet-set-budget">
      <div className="my-wallet-set-budget-child" />
      <div className="my-wallet-set-budget-item" />
      <div className="watalii-13" />
      <div className="my-wallet4" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <b className="my-wallet5" onClick={onMyWalletText1Click}>
        My Wallet
      </b>
      <div className="load-wallet" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <div className="available-balance" onClick={onAvailableBalanceTextClick}>
        Available Balance
      </div>
      <b className="set-budget">Set Budget</b>
      <div
        className="transaction-history3"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni5" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet-set-budget-inner" />
      <div className="usd-2300">USD 2300</div>
      <b className="kes-342470">
        <p className="kes-3424701">Kes 342470</p>
      </b>
      <img className="op-1-icon3" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon" alt="" src="/mdilocation.svg" />
      <div className="home3" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services3" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau3" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us3">Contact Us</div>
      <img className="watalii-3-icon2" alt="" src="/watalii-3@2x.png" />
      <div className="my-wallet-set-budget-child1" />
      <b className="set-budget1">Set Budget</b>
      <img className="watalii-4-icon" alt="" src="/watalii-3@2x.png" />
    </div>
  );
};

export default MyWalletSetBudget;
