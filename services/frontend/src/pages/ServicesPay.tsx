import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPay.css";

const ServicesPay: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
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
    <div className="services-pay">
      <div className="services-pay-child" />
      <div className="services-pay-item" />
      <div className="services-pay-inner" />
      <div className="watalii-116" />
      <div className="home19" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services22">Services</div>
      <div className="my-bureau19" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <b className="services23">Services</b>
      <div className="contact-us16">Contact Us</div>
      <div className="services24">Services</div>
      <div className="my-wallet19" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div className="load-wallet6" onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <b className="pay3" onClick={onPayTextClick}>
        Pay
      </b>
      <div className="sokoni22" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div
        className="transaction-history15"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className="sokoni23" onClick={onSokoniText1Click}>
        Sokoni
      </div>
      <b className="mama-ntilie1">Mama Ntilie</b>
      <div className="div8">20/10/2023</div>
      <div className="services-pay-child1" />
      <div className="services-pay-child2" />
      <b className="mpesa-till-no1">Mpesa Till No</b>
      <b className="send1">SEND</b>
      <img className="op-1-icon15" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon5" alt="" src="/mdilocation.svg" />
      <img className="icon-parkdown5" alt="" src="/iconparkdown1.svg" />
      <img className="watalii-3-icon9" alt="" src="/watalii-3@2x.png" />
    </div>
  );
};

export default ServicesPay;
