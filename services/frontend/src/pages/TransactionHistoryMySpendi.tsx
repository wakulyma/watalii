import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionHistoryMySpendi.css";

const TransactionHistoryMySpendi: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onMySpendingsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='maximHopmanFiXLQXAhCfkUnsplImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrackMyBillsTextClick = useCallback(() => {
    navigate("/transaction-history-track-my-bills");
  }, [navigate]);

  const onBalanceTextClick = useCallback(() => {
    navigate("/transaction-history-balance");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  return (
    <div className="transaction-history-my-spendi">
      <div className="transaction-history-my-spendi-child" />
      <div className="transaction-history-my-spendi-item" />
      <div className="transaction-history-my-spendi-inner" />
      <img
        className="maxim-hopman-fixlqxahcfk-unspl-icon"
        alt=""
        src="/maximhopmanfixlqxahcfkunsplash-1@2x.png"
        data-scroll-to="maximHopmanFiXLQXAhCfkUnsplImage"
      />
      <div className="watalii-112" />
      <img
        className="sneha-cecil-xns-qgcvvoi-unspla-icon1"
        alt=""
        src="/snehacecilxnsqgcvvoiunsplash-11@2x.png"
      />
      <div className="home15" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services18">Services</div>
      <div className="my-bureau15">My Bureau</div>
      <div className="contact-us12">Contact Us</div>
      <div className="my-history1">My History</div>
      <div className="my-wallet13" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <b className="my-spendings1" onClick={onMySpendingsTextClick}>
        My Spendings
      </b>
      <div className="track-mybills1" onClick={onTrackMyBillsTextClick}>
        Track MyBills
      </div>
      <div className="balance1" onClick={onBalanceTextClick}>
        Balance
      </div>
      <b className="transaction-history11">Transaction History</b>
      <div className="sokoni16" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <b className="wasini-dolphin-island">Wasini Dolphin Island</b>
      <b className="diani-backpackers">Diani Backpackers</b>
      <b className="sharks-gills">Sharks Gills</b>
      <b className="mara-estuary">Mara Estuary</b>
      <b className="swahili-foods">Swahili Foods</b>
      <b className="sleeve-lakes">Sleeve Lakes</b>
      <div className="div2">10/10/2023</div>
      <div className="div3">10/10/2023</div>
      <div className="div4">10/10/2023</div>
      <div className="div5">10/10/2023</div>
      <div className="div6">10/10/2023</div>
      <div className="div7">10/10/2023</div>
      <img className="op-1-icon11" alt="" src="/op-1@2x.png" />
      <img className="watalii-2-icon6" alt="" src="/watalii-3@2x.png" />
      <img className="rimore-line-icon" alt="" src="/rimoreline.svg" />
      <img className="rimore-line-icon1" alt="" src="/rimoreline.svg" />
      <img className="rimore-line-icon2" alt="" src="/rimoreline.svg" />
      <img className="rimore-line-icon3" alt="" src="/rimoreline.svg" />
      <img className="rimore-line-icon4" alt="" src="/rimoreline.svg" />
      <img className="rimore-line-icon5" alt="" src="/rimoreline.svg" />
      <img className="rimore-line-icon6" alt="" src="/rimoreline.svg" />
    </div>
  );
};

export default TransactionHistoryMySpendi;
