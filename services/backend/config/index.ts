require("dotenv").config();
import { Solana } from "@mirrorworld/web3.js";

export const settings = {
  mirrorWorld: {
    apiKey: process.env.MW_APIKEY || "",
    chainConfig: Solana("devnet"),
  },

  solana: {
    wallet: {
      address:
        process.env.SOLANA_WALLET_ADDRESS ||
        "3xKwPQoYuhAUhtERqSiRnLCqgT6Y8RjiEoG23cAHUEij",
    },
  },
};
