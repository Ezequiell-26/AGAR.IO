const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function main(){
  const tabs=await (await fetch('http://127.0.0.1:9223/json')).json();
  const page=tabs.find(t=>t.type==='page'&&t.url.includes('127.0.0.1:4173'));
  if(!page)throw new Error('NO_PAGE');
  const ws=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej});
  let id=0;const pending=new Map();
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id)}};
  const cdp=(method,params={})=>new Promise((resolve,reject)=>{const i=++id;pending.set(i,m=>m.error?reject(new Error(JSON.stringify(m.error))):resolve(m));ws.send(JSON.stringify({id:i,method,params}))});
  const ev=async expression=>(await cdp('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result.result.value;
  await ev("localStorage.clear(); location.reload(); true"); await sleep(700); await ev("document.querySelector('#play').click(); true"); await sleep(500);
  const initial=await ev("game.pellets=[]; game.powers=[]; game.spikes=[]; game.cells=game.cells.filter(c=>c.isPlayer); game.me.mass=200; game.me.visualMass=200; game.playerCells=[game.me]; paused=false; ({parts:game.playerCells.length,mass:game.me.mass})");
  const split=await ev("split(game.me); ({parts:game.playerCells.length,masses:game.playerCells.map(c=>c.mass),sameControl:game.playerCells.every(c=>c.isPlayer),total:game.playerCells.reduce((s,c)=>s+c.mass,0),family:game.playerCells.every(c=>c.familyId===game.playerCells[0].familyId)})");
  if(split.parts!==2||!split.sameControl||Math.abs(split.total-200)>1e-6||!split.family)throw new Error('SPLIT_FAILED '+JSON.stringify({initial,split}));
  await ev("pointer.x=W/2+240; pointer.y=H/2; true"); await sleep(450);
  const movement=await ev("game.playerCells.map(c=>({x:c.x,y:c.y,vx:c.vx,vy:c.vy,mass:c.mass}))");
  if(movement.length!==2||!movement.every(c=>c.vx>0))throw new Error('MULTI_CONTROL_FAILED '+JSON.stringify({movement}));
  await sleep(4500);
  const merged=await ev("({parts:game.playerCells.length,alive:game.playerCells.filter(c=>c.alive).length,mass:game.playerCells.reduce((s,c)=>s+c.mass,0),anchorMass:game.me.mass,family:game.playerCells[0]?.familyId||null})");
  if(merged.parts!==1||merged.alive!==1||Math.abs(merged.mass-200)>1e-6||merged.family!==null)throw new Error('MERGE_FAILED '+JSON.stringify({movement,merged}));
  console.log('PLAYER_SPLIT_OK',JSON.stringify({initial,split,movement,merged})); ws.close();
}
main().catch(e=>{console.error('PLAYER_SPLIT_FAIL',e.stack||e);process.exitCode=1});
