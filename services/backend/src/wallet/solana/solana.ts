import * as solanaWeb3 from "@solana/web3.js";

export const SolanaTest = async () => {
  console.log("solana -> \t playground::->\n");
  CreateWallet();
};

const CreateWallet = () => {
  // generate a new keypair
  const keypair = solanaWeb3.Keypair.generate();

  let publicKey = keypair.publicKey.toBase58();

  console.log("keypair -> \t\n", publicKey);
};
