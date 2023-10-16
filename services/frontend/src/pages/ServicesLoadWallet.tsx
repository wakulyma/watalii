import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesLoadWallet.css";

const ServicesLoadWallet: FunctionComponent = () => {
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

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onLoadWalletTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniText1Click = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onMdilocationIconClick = useCallback(() => {
    navigate("/servicessokoni");
  }, [navigate]);

  return (
    <div className="services-load-wallet">
      <div className="services-load-wallet-child" />
      <div className="services-load-wallet-item" />
      <div className="services-load-wallet-inner" />
      <div className="watalii-19" />
      <div className="home12" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services11" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau9" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <b className="services12">Services</b>
      <div className="contact-us9">Contact Us</div>
      <div className="services13">Services</div>
      <div className="my-wallet10" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <b className="load-wallet2" onClick={onLoadWalletTextClick}>
        Load Wallet
      </b>
      <div className="pay1">Pay</div>
      <div className="sokoni11" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div
        className="transaction-history8"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni12" onClick={onSokoniText1Click}>
        Sokoni
      </div>
      <img className="op-1-icon8" alt="" src="/op-1@2x.png" />
      <img
        className="mdilocation-icon2"
        alt=""
        src="/mdilocation.svg"
        onClick={onMdilocationIconClick}
      />
      <img className="watalii-3-icon4" alt="" src="/watalii-3@2x.png" />
      <div className="services-load-wallet-child1" />
      <b className="usd">USD</b>
      <img className="icon-parkdown2" alt="" src="/iconparkdown1.svg" />
      <div className="services-load-wallet-child2" />
      <div className="enter-amount">Enter Amount</div>
      <div className="rectangle-parent1">
        <div className="group-child1" />
        <b className="load">Load</b>
      </div>
      <div className="services-load-wallet-child3" />
      <b className="link-visa-card">Link Visa Card</b>
      <img className="services-load-wallet-child4" alt="" src="/line-1.svg" />
      <img className="visa-1-icon" alt="" src="/visa-1@2x.png" />
    </div>
  );
};

export default ServicesLoadWallet;
