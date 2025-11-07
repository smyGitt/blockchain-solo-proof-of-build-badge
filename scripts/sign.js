import { Wallet } from "ethers";
import fs from "fs";
import "dotenv/config";

const msg = fs.readFileSync("siwe.txt", "utf8");
const wallet = new Wallet(process.env.PRIVKEY);
const sig = await wallet.signMessage(msg);
console.log(sig);
