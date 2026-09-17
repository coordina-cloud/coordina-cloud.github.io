// ========== Web3Forms 密钥（自动提交反馈用） ==========
const WEB3FORMS_ACCESS_KEY="98140cae-8ce8-4d32-8d22-f69fef99fabd";
let submitting=false;

const plans={
city:{title:"老城散步计划",kicker:"01 · CITYWALK",sub:"西兴隆街 → 三里河公园 → 杨梅竹斜街",time:"约 14:00 — 20:30",budget:"¥100–220 / 两人",tip:"参考前些天发过的那条路线就行——是同一个。",route:[
["14:00","西兴隆街集合","先慢慢逛一圈，不急着拍照。找一家咖啡/饮品店作为开场。"],
["15:00","沿街 Citywalk","边走边聊天，看到喜欢的小店就进去看看，预留一点“随机发现”的时间。"],
["16:00","三里河公园","从城市街巷切到水岸和绿意，适合坐一会儿、拍合照。"],
["17:30","前往杨梅竹斜街","一路向老北京街巷氛围过渡，找喜欢的小店或小吃。"],
["18:30","晚饭","选一家不需要赶场的餐厅，认真吃顿饭。"],
["19:40","夜色散步","吃完再走一小段，作为今天的收尾。"]
],pros:"氛围丰富、聊天时间多、拍照选择多；行程可以随时调整。",cons:"步行较多；周末人流可能影响体验；天气不好需要调整。",planb:"下雨时把户外段缩短，改成咖啡馆 + 商场/室内展览 + 晚餐。"},
sunset:{title:"百望山晚霞计划",kicker:"02 · SUNSET",sub:"下午进山 → 找观景位置 → 看晚霞 → 下山吃饭",time:"约 15:00 — 21:00",budget:"¥80–180 / 两人",tip:"这条路线不算难走，但这次记得穿不磨脚的鞋子。",route:[
["15:00","集合出发","建议提前吃点东西、带水；把爬山当成今天的主线。"],
["16:00","进入百望山森林公园","慢慢爬，不追求速度，把体力留给山顶。"],
["17:00","找观景位置","根据当天天气和日落时间灵活选择位置，提前留出等待晚霞的时间。"],
["日落前","看晚霞","这是今天的主节目：一起拍照、聊天、安静看一会儿。"],
["日落后","下山","天黑后视线下降，注意脚下并按园区开放安排下山。"],
["20:00","晚饭","下山后找附近餐厅吃饭，给今天收尾。"]
],pros:"仪式感强、自然环境好、晚霞具有随机惊喜；很适合拍合照。",cons:"晚霞不可控；需要步行爬坡；天冷/风大时体感会变化。",planb:"如果天气阴雨或空气质量不适合观景，直接切换到电影或手工方案。"},
movie:{title:"电影约会计划",kicker:"03 · MOVIE DATE",sub:"候选：《我想留在你身边》《坠落2：死点》→ 看电影 → 交换观后感",time:"约 14:30 — 20:30",budget:"¥180–320 / 两人",tip:"其实感觉一个晚上就够了，周日一整天可能会有点荒废。",route:[
["14:30","集合","先找咖啡店或甜品店坐一会儿，决定今天看哪一部。"],
["15:30","选片","候选就这两部：《我想留在你身边》（奇幻爱情）或《坠落2：死点》（高空惊悚），看排片和心情定，不提前锁死。"],
["16:00","进影院","提前买票、取票、买饮料爆米花。"],
["18:30","电影结束","先不急着看手机，各自说一句“最喜欢的一个瞬间”。"],
["19:00","晚饭","边吃边聊电影，再聊聊最近的生活。"],
["20:30","回家","轻松结束，不把行程排得太满。"]
],pros:"天气适应性最好、节奏轻松；两部候选一暖一险，看完都有得聊。",cons:"互动时间相对少；热门场次可能需要提前购票。",planb:"两部都不想看的话，就临时换影院里其他在映的片子，或者干脆只吃饭聊天。"},
craft:{title:"一起做点东西",kicker:"04 · HANDMADE DATE",sub:"选一个 DIY 项目 → 一起完成 → 带作品回家",time:"约 14:00 — 20:00",budget:"¥150–350 / 两人",tip:"美甲会不会不太方便？做手工时避开需要精细动手的项目。",route:[
["14:00","集合","从下面推荐的店里提前预约，确认项目和剩余名额。"],
["15:00","开始 DIY","陶艺、银饰、Tufting、画瓷都有，重点不是做得多专业。"],
["17:00","作品收尾","互相帮对方处理最后细节，给作品取个名字。"],
["17:30","拍照留念","拍一张“人 + 作品”的照片，把这次周日留下来。"],
["18:00","晚饭/甜品","找附近餐厅吃饭，顺便评选今天谁的作品更可爱。"],
["20:00","带作品回家","以后看到它，就会想起这个周日。"]
],shops:[
["玩个手作","银饰 / Tufting / 陶艺 / 烧玻璃集合店","朝阳区长楹天街 B2（另有中关村、北投等店）","银戒 DIY 约 ¥90 起"],
["瓷语","陶艺素坯上色涂鸦 / 拉坯烧制","东城区红桥市场一带（近崇文门）","素坯自选，按件计费"],
["漫喜画瓷","画瓷 + 陶艺 + 石膏娃娃","石景山区京西大悦城 B1","按项目计费，素坯自选"],
["十六手工皮具","手工皮具 DIY（皮包 / 钥匙挂饰）","东城区红桥市场一带","按项目计费，建议提前咨询"]
],pros:"互动感最强；能留下实体纪念品；适合一起做一件小事。",cons:"不同工作室项目价格差异较大；部分项目需要提前预约；成品可能需要后续烧制/寄送。",planb:"临时约不到工作室，就改成买材料在家做手工，顺便点外卖看电影。"}
};

let current=null,selected=0;
function openPlan(id){
 current=id; selected=0;
 const p=plans[id];
 document.getElementById('detail').innerHTML=`<div class="detail-kicker">${p.kicker}</div><h2>${p.title}</h2><p>${p.sub}</p><p><b>${p.time}</b> · ${p.budget}</p><div class="route">${p.route.map(x=>`<div class="step"><div class="time">${x[0]}</div><div><b>${x[1]}</b><p>${x[2]}</p></div></div>`).join('')}</div><div class="tip-box"><h4>LX TIPS</h4><p>${p.tip}</p></div><div class="cols"><div class="box"><h4>优点</h4><p>${p.pros}</p></div><div class="box"><h4>△ 小缺点</h4><p>${p.cons}</p></div></div><div class="box" style="margin-top:18px"><h4>☁ Plan B</h4><p>${p.planb}</p></div>${p.shops?`<div class="shop-box"><h4>手工店铺推荐</h4>${p.shops.map(s=>`<div class="shop"><div class="shop-head"><b>${s[0]}</b><span>${s[1]}</span></div><p>${s[2]} · ${s[3]}</p></div>`).join('')}</div>`:''}<div class="note-box"><h4>小彤有话说</h4><textarea id="xtNote" rows="3" placeholder="想提意见就写在这里，选填就好"></textarea><div class="note-actions"><button onclick="saveNote()">保存小彤的话</button><span id="noteStatus"></span></div></div>`;
 const notes=JSON.parse(localStorage.getItem('xtNotes')||'{}');
 document.getElementById('xtNote').value=notes[id]||'';
 const stars=document.getElementById('stars');
 stars.innerHTML=Array.from({length:10},(_,i)=>`<button onclick="rate(${i+1})">${i+1}</button>`).join('');
 document.getElementById('ratingText').textContent="请选择 1–10 分";
 document.getElementById('modal').classList.add('show');
}
function rate(n){selected=n;document.querySelectorAll('.stars button').forEach((b,i)=>b.classList.toggle('active',i<n));document.getElementById('ratingText').textContent=`你的评分：${n} / 10`;}
function saveNote(){
 if(!current)return;
 const notes=JSON.parse(localStorage.getItem('xtNotes')||'{}');
 notes[current]=document.getElementById('xtNote').value.trim();
 localStorage.setItem('xtNotes',JSON.stringify(notes));
 document.getElementById('noteStatus').textContent="已收到，都记下来啦";
}
function saveScore(){
 if(!selected)return;
 const scores=JSON.parse(localStorage.getItem('dateScores')||'{}');scores[current]=selected;localStorage.setItem('dateScores',JSON.stringify(scores));renderScores();closePlan();
}
function renderScores(){
 const names={city:"🏮 老城散步",sunset:"🌅 百望山晚霞",movie:"🎬 电影约会",craft:"🎨 手工约会"};
 const s=JSON.parse(localStorage.getItem('dateScores')||'{}');
 document.getElementById('scoreList').innerHTML=Object.keys(names).map(k=>`<div class="score-row"><span>${names[k]}</span><b>${s[k]?s[k]+" / 10":"待评分"}</b></div>`).join('');
}
function closePlan(){document.getElementById('modal').classList.remove('show')}
function buildReport(){
 const names={city:{n:"🏮 老城散步",t:"老城散步计划"},sunset:{n:"🌅 百望山晚霞",t:"百望山晚霞计划"},movie:{n:"🎬 电影约会",t:"电影约会计划"},craft:{n:"🎨 手工约会",t:"一起做点东西"}};
 const s=JSON.parse(localStorage.getItem('dateScores')||'{}');
 const notes=JSON.parse(localStorage.getItem('xtNotes')||'{}');
 const ids=Object.keys(names);
 const scored=ids.filter(k=>s[k]);
 if(!scored.length)return null;
 const d=new Date();
 const dateStr=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
 const lines=[];
 lines.push("—— 小彤的周日计划 · 反馈报告 ——");
 lines.push("提交时间："+dateStr);
 lines.push("");
 lines.push("【评分】");
 ids.forEach(k=>lines.push(names[k].n+"："+(s[k]?s[k]+" / 10":"未评分")));
 lines.push("");
 lines.push("【小彤有话说】");
 const noted=ids.filter(k=>notes[k]&&notes[k].trim());
 if(noted.length)noted.forEach(k=>lines.push("· "+names[k].t+"："+notes[k].trim()));
 else lines.push("· 没有留言");
 lines.push("");
 lines.push("【分析】");
 const ranked=scored.slice().sort((a,b)=>s[b]-s[a]);
 const top=ranked[0];
 lines.push("· 最想去的方案："+names[top].t+"（"+s[top]+" 分，全场最高）");
 if(ranked.length>1)lines.push("· 方案排名："+ranked.map((k,i)=>(i+1)+". "+names[k].t+"("+s[k]+"分)").join(" > "));
 lines.push("· 留言情况："+(noted.length?noted.length+" 个方案留了话，优先看这几条":"没有留言，凭分数安排就好"));
 lines.push("· 建议："+(top==="craft"?"手工互动感最强，适合一起留件纪念品。":"按最高分优先安排，其他高分方案可以排进下一次。"));
 lines.push("");
 lines.push("—— 由「给小彤的周日计划」自动生成");
 return lines.join("\n");
}
async function submitReport(){
 if(submitting){alert("正在提交中，请稍等一会儿");return;}
 const report=buildReport();
 if(!report){alert("小彤还没有评分哦，先去给方案打个分吧");return;}
 if(!WEB3FORMS_ACCESS_KEY||WEB3FORMS_ACCESS_KEY.length<10){alert("还没配置 Web3Forms 密钥：请检查 script.js 顶部的 WEB3FORMS_ACCESS_KEY");return;}
 const d=new Date();
 const dateStr=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
 submitting=true;
 try{
  const res=await fetch("https://api.web3forms.com/submit",{
   method:"POST",
   headers:{"Content-Type":"application/json","Accept":"application/json"},
   body:JSON.stringify({
    access_key:WEB3FORMS_ACCESS_KEY,
    subject:"小彤的周日计划反馈 "+dateStr,
    from_name:"给小彤的周日计划",
    message:report,
    botcheck:""
   })
  });
  const data=await res.json();
  if(data.success){alert("提交成功！lx 的邮箱已经收到啦");}
  else{alert("提交失败："+(data.message||"请稍后重试，或点「导出我的反馈」把文件发给他"));}
 }catch(e){
  alert("网络好像不太顺，提交没成功。可以点「导出我的反馈」，把下载的文件发给他");
 }
 submitting=false;
}
function exportReport(){
 const report=buildReport();
 if(!report){alert("小彤还没有评分哦，先去给方案打个分吧");return;}
 const blob=new Blob(["\ufeff"+report],{type:"text/plain;charset=utf-8"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url;
 a.download="小彤_周日计划反馈.txt";
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 setTimeout(()=>URL.revokeObjectURL(url),1000);
}
renderScores();
