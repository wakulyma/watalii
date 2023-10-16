import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBureau.css";

const MyBureau: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    const anchor = document.querySelector("[data-scroll-to='line']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAvailableBalanceTextClick = useCallback(() => {
    navigate("/my-bureauavailable-balance");
  }, [navigate]);

  return (
    <div className="my-bureau11">
      <div className="my-bureau-child" />
      <div className="my-bureau-item" />
      <div className="watalii-111" />
      <div className="home14" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services17" onClick={onServicesTextClick}>
        Services
      </div>
      <b className="my-bureau12">My Bureau</b>
      <b className="my-bureau13">My Bureau</b>
      <div className="contact-us11">Contact Us</div>
      <div className="my-bureau14">My Bureau</div>
      <div className="my-wallet12" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div
        className="transaction-history10"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni15" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <img className="watalii-2-icon5" alt="" src="/watalii-3@2x.png" />
      <img className="op-1-icon10" alt="" src="/op-1@2x.png" />
      <b className="load-wallet4" onClick={onLoadWalletTextClick}>
        Load Wallet
      </b>
      <div className="available-balance1" onClick={onAvailableBalanceTextClick}>
        Available Balance
      </div>
      <div className="my-bureau-inner" />
      <b className="link-visa-card1">Link Visa Card</b>
      <img
        className="my-bureau-child1"
        alt=""
        src="/line-11.svg"
        data-scroll-to="line"
      />
    </div>
  );
};

export default MyBureau;
