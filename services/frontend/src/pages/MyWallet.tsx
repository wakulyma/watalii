import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyWallet.css";

const MyWallet: FunctionComponent = () => {
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

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onLoadWalletTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAvailableBalanceTextClick = useCallback(() => {
    navigate("/my-wallet-available-balance");
  }, [navigate]);

  const onSetBudgetTextClick = useCallback(() => {
    navigate("/my-wallet-set-budget");
  }, [navigate]);

  return (
    <div className="my-wallet16">
      <div className="my-wallet-child" data-scroll-to="rectangle" />
      <div className="my-wallet-item" />
      <div className="watalii-115" />
      <div className="home18" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services21" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau18" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us15">Contact Us</div>
      <div className="my-wallet17">My Wallet</div>
      <b className="my-wallet18">My Wallet</b>
      <div
        className="transaction-history14"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni21" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet-inner" />
      <b className="link-visa-card2">Link Visa Card</b>
      <img className="op-1-icon14" alt="" src="/op-1@2x.png" />
      <img className="my-wallet-child1" alt="" src="/line-11.svg" />
      <img className="watalii-3-icon8" alt="" src="/watalii-3@2x.png" />
      <div className="load-wallet5" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <div className="available-balance2" onClick={onAvailableBalanceTextClick}>
        Available Balance
      </div>
      <div className="set-budget2" onClick={onSetBudgetTextClick}>
        Set Budget
      </div>
    </div>
  );
};

export default MyWallet;
