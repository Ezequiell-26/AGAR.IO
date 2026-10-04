import { readFileSync } from "node:fs";
const source=readFileSync(new URL("./index.html", import.meta.url),"utf8");
if(!/const WORLD=9000, PELLETS=3200, BOTS=22/.test(source)) throw new Error("PELLET_COUNT_BAD");
if(!/PELLET_LOCAL_RESPAWN_CHANCE=.72/.test(source)) throw new Error("LOCAL_RESPAWN_BAD");
console.log("DENSITY_CONFIG_OK");