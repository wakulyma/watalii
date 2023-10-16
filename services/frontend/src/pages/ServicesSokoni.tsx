import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesSokoni.css";

const ServicesSokoni: FunctionComponent = () => {
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

  const onPayTextClick = useCallback(() => {
    navigate("/services-pay-details");
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

  return (
    <div className="servicessokoni">
      <div className="servicessokoni-child" />
      <div className="servicessokoni-item" />
      <div className="servicessokoni-inner" />
      <div className="watalii-18" />
      <div className="home11" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services8" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau8" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <b className="services9">Services</b>
      <div className="contact-us8">Contact Us</div>
      <div className="services10">Services</div>
      <div className="my-wallet9" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div className="load-wallet1" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <div className="pay" onClick={onPayTextClick}>
        Pay
      </div>
      <b className="sokoni9" onClick={onSokoniTextClick}>
        Sokoni
      </b>
      <div
        className="transaction-history7"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni10" onClick={onSokoniText1Click}>
        Sokoni
      </div>
      <img className="op-1-icon7" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon1" alt="" src="/mdilocation.svg" />
      <img className="watalii-3-icon3" alt="" src="/watalii-3@2x.png" />
      <b className="river-kongo">River Kongo</b>
      <div className="view-more">{`View More >`}</div>
      <img className="img-9540-1-icon" alt="" src="/img-9540-1@2x.png" />
    </div>
  );
};

export default ServicesSokoni;
