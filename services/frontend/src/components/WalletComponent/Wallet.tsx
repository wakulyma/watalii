import { useState } from "react";

import { FunctionComponent, useCallback } from "react";
import styles from "./Wallet.module.css";
import MyWalletAvailableBalance from "./MyWalletAvailableBalance";
import SetBudget from "./SetBudget";
import { useNavigate } from "react-router-dom";

const MyWallet: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoadWalletTextClick = () => navigate("/wallet");
  const onAvailableBalanceTextClick = () => navigate("/balance");
  const onSetBudgetTextClick = () => navigate("/budget");

  const onServicesTextClick = useCallback(() => {
    // Add your code here
  }, []);
  const onMyBureauTextClick = useCallback(() => {
    // Add your code here
  }, []);
  const onTransactionHistoryTextClick = useCallback(() => {
    // Add your code here
  }, []);
  const onSokoniTextClick = useCallback(() => {
    // Add your code here
  }, []);
  const onHomeTextClick = () => navigate("wallet");

  return (
    <div className={styles.myWallet}>
      <div className={styles.myWalletChild} data-scroll-to="rectangle" />
      <div className={styles.myWalletItem} />
      <div className={styles.watalii11} />
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.services} onClick={onServicesTextClick}>
        Services
      </div>
      <div className={styles.myBureau} onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.myWallet1}>My Wallet</div>
      <b className={styles.myWallet2}>My Wallet</b>
      <div
        className={styles.transactionHistory}
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className={styles.sokoni} onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className={styles.myWalletInner} />
      <b className={styles.linkVisaCard1}>Link Visa Card</b>
      <img className={styles.op1Icon} alt="" src="OP 1.png" />
      <img className={styles.lineIcon} alt="" src="Line 1.svg" />
      <img className={styles.watalii3Icon} alt="" src="watalii 3.png" />
      <div className={styles.loadWallet} onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <div
        className={styles.availableBalance}
        onClick={onAvailableBalanceTextClick}
      >
        Available Balance
      </div>
      <div className={styles.setBudget} onClick={onSetBudgetTextClick}>
        Set Budget
      </div>
    </div>
  );
};
export default MyWallet;
