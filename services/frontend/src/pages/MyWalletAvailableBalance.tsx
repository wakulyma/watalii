import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyWalletAvailableBalance.css";

const MyWalletAvailableBalance: FunctionComponent = () => {
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

  const onSetBudgetTextClick = useCallback(() => {
    navigate("/my-wallet-set-budget");
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
    <div className="my-wallet-available-balance">
      <div className="my-wallet-available-balance-child" />
      <div className="my-wallet-available-balance-item" />
      <div className="watalii-119" />
      <div className="my-wallet23" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <b className="my-wallet24" onClick={onMyWalletText1Click}>
        My Wallet
      </b>
      <div className="load-wallet8" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <div className="available-balance4">Available Balance</div>
      <div className="set-budget3" onClick={onSetBudgetTextClick}>
        Set Budget
      </div>
      <div
        className="transaction-history19"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni28" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet-available-balance-inner" />
      <div className="credit-balance">Credit Balance</div>
      <div className="usd-4300">USD 4300</div>
      <b className="kes-640270">{`Kes 640270 `}</b>
      <img className="op-1-icon19" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon7" alt="" src="/mdilocation.svg" />
      <div className="home23" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services28" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau25" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us20">Contact Us</div>
      <img className="watalii-3-icon11" alt="" src="/watalii-3@2x.png" />
      <img className="watalii-4-icon1" alt="" src="/watalii-3@2x.png" />
    </div>
  );
};

export default MyWalletAvailableBalance;
