import { settings } from "./config";
import { mirrorWorld } from "./src/utils/mirrorWorld";
import { SolanaTest } from "./src/wallet";

console.log("Server is running");

async function main() {
  await SolanaTest();
}

main();
