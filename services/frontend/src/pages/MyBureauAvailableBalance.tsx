import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBureauAvailableBalance.css";

const MyBureauAvailableBalance: FunctionComponent = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onLoadWalletTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  return (
    <div className="my-bureauavailable-balance">
      <div className="my-bureauavailable-balance-child" />
      <div className="my-bureauavailable-balance-item" />
      <div className="my-bureauavailable-balance-inner" />
      <div className="watalii-117" />
      <div className="home20">Home</div>
      <div className="services25" onClick={onServicesTextClick}>
        Services
      </div>
      <b className="my-bureau20">My Bureau</b>
      <b className="my-bureau21">My Bureau</b>
      <div className="contact-us17">Contact Us</div>
      <div className="my-bureau22">My Bureau</div>
      <div className="my-wallet20" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div
        className="transaction-history16"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni24" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="div9">20/10/2023</div>
      <div className="my-bureauavailable-balance-child1" />
      <div className="my-bureauavailable-balance-child2" />
      <b className="usd-54001">USD 5400</b>
      <b className="convert">Convert</b>
      <b className="balance2">Balance</b>
      <img className="watalii-2-icon7" alt="" src="/watalii-3@2x.png" />
      <img className="op-1-icon16" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon6" alt="" src="/mdilocation.svg" />
      <div className="load-wallet7" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <b className="available-balance3">Available Balance</b>
      <img className="logo-2-icon" alt="" src="/logo-2@2x.png" />
    </div>
  );
};

export default MyBureauAvailableBalance;
