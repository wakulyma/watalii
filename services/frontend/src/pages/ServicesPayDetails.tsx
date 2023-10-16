import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPayDetails.css";

const ServicesPayDetails: FunctionComponent = () => {
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

  const onTravelPackageTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onSokoniText1Click = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  return (
    <div className="services-pay-details">
      <div className="services-pay-details-child" />
      <div className="services-pay-details-item" />
      <div className="services-pay-details-inner" />
      <div className="watalii-110" />
      <div className="home13" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services14" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau10" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <b className="services15">Services</b>
      <div className="contact-us10">Contact Us</div>
      <div className="services16">Services</div>
      <div className="my-wallet11" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div className="load-wallet3" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <b className="pay2">Pay</b>
      <div className="sokoni13" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div
        className="transaction-history9"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="travel-package" onClick={onTravelPackageTextClick}>
        Travel Package
      </div>
      <div className="sokoni14" onClick={onSokoniText1Click}>
        Sokoni
      </div>
      <div className="div1">20/10/2023</div>
      <div className="services-pay-details-child1" />
      <b className="mpesa-till-no">Mpesa Till No</b>
      <div className="rectangle-parent2">
        <div className="group-child2" />
        <b className="send">SEND</b>
      </div>
      <img className="op-1-icon9" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon3" alt="" src="/mdilocation.svg" />
      <img className="icon-parkdown3" alt="" src="/iconparkdown1.svg" />
      <img className="watalii-3-icon5" alt="" src="/watalii-3@2x.png" />
      <div className="services-pay-details-child2" />
      <div className="services-pay-details-child3" />
      <div className="services-pay-details-child4" />
      <div className="till-no">Till No</div>
      <div className="amount">Amount</div>
      <div className="name">Name</div>
      <b className="mama-ntilie">Mama Ntilie</b>
    </div>
  );
};

export default ServicesPayDetails;
