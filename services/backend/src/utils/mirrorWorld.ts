import { MirrorWorld, Solana } from "@mirrorworld/web3.js";
import { settings } from "../../config";

export const mirrorWorld = new MirrorWorld({
  apiKey: settings.mirrorWorld.apiKey,
  chainConfig: settings.mirrorWorld.chainConfig,
});
