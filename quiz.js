// ====== DATA ======
const QUESTIONS = [
  { id:1, type:"choice", title:"Quantas vezes por dia você abre o TikTok? 👀",
    options:[
      {letter:"A",label:"Só de vez em quando (1-5x)",points:2},
      {letter:"B",label:"Toda hora que tenho um tempinho (6-15x)",points:4},
      {letter:"C",label:"Eu VIVO lá! Nem conto mais (20x+)",points:5},
      {letter:"D",label:"Abro pra ver uma coisa e fico 2h (Clássico)",points:5},
    ]},
  { id:2, type:"stars", title:"De 1 a 5, o quanto o 'For You' te conhece melhor que seus amigos? 🤖", minLabel:"Nem tanto", maxLabel:"Lê minha mente"},
  { id:3, type:"choice", title:"O que você mais assiste? 📺",
    options:[
      {letter:"A",label:"Dancinhas e Trends Virais 💃",points:4},
      {letter:"B",label:"Humor e Memes 😂",points:4},
      {letter:"C",label:"Dicas, Tutoriais e 'Aprenda no TikTok' 🧠",points:5},
      {letter:"D",label:"Unboxing, Reviews e comprinhas 🛍️",points:5},
    ]},
  { id:4, type:"choice", title:"Você já comprou algo só porque viu no TikTok? 💸",
    options:[
      {letter:"A",label:"Sim, sou culpado(a)! 🙋‍♀️",points:5},
      {letter:"B",label:"Ainda não, mas quase... 🤔",points:3},
      {letter:"C",label:"Não, sou forte 💪",points:2},
    ]},
  { id:5, type:"stars", title:"Qual nota você dá para as Lives de Compras (promoções relâmpago)? ⚡", minLabel:"Não curto", maxLabel:"Amo demais"},
  { id:6, type:"choice", title:"Qual sua relação com anúncios no App? 📢",
    options:[
      {letter:"A",label:"Pulo todos instantaneamente ⏭️",points:2},
      {letter:"B",label:"Assisto se for criativo/engraçado 🎨",points:4},
      {letter:"C",label:"Às vezes clico pra ver o produto 👀",points:5},
      {letter:"D",label:"Adoro descobrir marcas novas 😍",points:5},
    ]},
  { id:7, type:"text", title:"Se você pudesse mudar UMA coisa no TikTok hoje, o que seria? ✍️", placeholder:"Ex: Menos anúncios, vídeos mais longos..."},
  { id:8, type:"choice", title:"Você pretende comprar na TikTok Shop nos próximos 30 dias? 🛒",
    options:[
      {letter:"A",label:"Com certeza! Tô de olho numas coisas",points:5},
      {letter:"B",label:"Talvez, se tiver cupom bom",points:4},
      {letter:"C",label:"Provavelmente não",points:2},
      {letter:"D",label:"Não uso pra compras",points:1},
    ]},
];

const PRODUCTS = [
  {name:"Apple iPhone 17 Pro Max (256 GB)", original:"R$9.499", remaining:9, image:"assets/products/iphone.jpg"},
  {name:"Caixa de Som Bluetooth JBL Boombox 4", original:"R$2.399", remaining:25, image:"assets/products/jbl.jpg"},
  {name:"Apple Watch Series 11 GPS 46mm", original:"R$2.499", remaining:17, image:"assets/products/applewatch.jpg"},
  {name:"Samsung Galaxy S25 5G (256GB)", original:"R$2.199", remaining:23, image:"assets/products/galaxy.jpg"},
  {name:"Apple iPad 11 Geração A16 Wi-Fi (128GB)", original:"R$3.500", remaining:14, image:"assets/products/ipad.jpg"},
  {name:'MacBook Air M1 13" 8GB de RAM', original:"R$4.899", remaining:8, image:"assets/products/macbook.jpg"},
  {name:'Samsung AI TV 65" QLED', original:"R$3.500", remaining:11, image:"assets/products/tv.jpg"},
  {name:"Sony PlayStation 5 Pro 2TB", original:"R$4.500", remaining:6, image:"assets/products/ps5.jpg"},
  {name:"Xiaomi Poco F7 512GB", original:"R$2.800", remaining:19, image:"assets/products/poco.jpg"},
  {name:"Bicicleta Aro 29 Aço Carbono", original:"R$1.200", remaining:27, image:"assets/products/bike.jpg"},
];

function getLevel(score){
  if(score>=32) return {title:"TikToker Supremo",subtitle:"Você é #TeamTikTok nível PRO! 🔥",description:"Você domina as trends, conhece tudo do app e aproveita ao máximo. Um verdadeiro Creator em potencial!",icon:"👑"};
  if(score>=24) return {title:"TikToker Profissional",subtitle:"Usuário Curioso e Conectado! 👀",description:"Você curte o app, se diverte, mas ainda não foi totalmente abduzido pelo algoritmo.",icon:"⭐"};
  if(score>=16) return {title:"TikToker Casual",subtitle:"Nível Pro! 🏆",description:"Você curte o app, se diverte, mas ainda não foi totalmente abduzido pelo algoritmo. Equilíbrio é tudo!",icon:"🎯"};
  return {title:"TikToker Iniciante",subtitle:"Turista no TikTok! ✈️",description:"Você passa por lá de vez em quando, mas prefere a vida offline. Tá tudo bem ser low profile!",icon:"🌱"};
}

// ====== STATE ======
let step=0, score=0, streak=0, bestStreak=0;
const $ = id=>document.getElementById(id);

// background floats
(function(){
  const wrap=$("bgFloats");
  for(let i=0;i<6;i++){
    const s=document.createElement("span");
    const sz=60+i*20;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${10+i*15}%;left:${(i*17)%90}%;animation-delay:${i*.7}s;animation-duration:${6+i}s`;
    wrap.appendChild(s);
  }
})();

// playing count
$("playingCount").textContent = (2847 + Math.floor(Math.random()*50)).toLocaleString("pt-BR");

// ====== NAV ======
function show(id){
  document.querySelectorAll(".stage").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

$("startBtn").onclick = ()=>{ show("quiz"); renderQuestion(); };

// ====== QUIZ ======
function renderQuestion(){
  const q = QUESTIONS[step];
  $("progressLabel").textContent = `Pergunta ${step+1} de ${QUESTIONS.length}`;
  $("progressFill").style.width = `${((step+1)/QUESTIONS.length)*100}%`;
  if(streak>=2){ $("streakLabel").classList.remove("hidden"); $("streakCount").textContent=streak; }
  else $("streakLabel").classList.add("hidden");

  const c = $("questionContainer");
  c.innerHTML = `<div class="q-card"><h2 class="q-title">${q.title}</h2><div id="qBody"></div></div>`;
  const body = $("qBody");

  if(q.type==="choice"){
    const wrap=document.createElement("div"); wrap.className="options";
    q.options.forEach(opt=>{
      const b=document.createElement("button");
      b.className="opt";
      b.innerHTML=`<span class="letter">${opt.letter}</span><span>${opt.label}</span>`;
      b.onclick=()=>answer(opt.points);
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
  } else if(q.type==="stars"){
    let selected=0;
    body.innerHTML=`
      <div class="stars" id="starRow">${[1,2,3,4,5].map(n=>`<span class="star" data-v="${n}">★</span>`).join("")}</div>
      <div class="star-labels"><span>${q.minLabel||""}</span><span>${q.maxLabel||""}</span></div>
      <button class="cta-btn" id="starConfirm" style="margin-top:20px;opacity:.5" disabled>Confirmar</button>`;
    document.querySelectorAll("#starRow .star").forEach(s=>{
      s.onclick=()=>{
        selected=parseInt(s.dataset.v);
        document.querySelectorAll("#starRow .star").forEach(x=>{
          x.classList.toggle("active", parseInt(x.dataset.v)<=selected);
        });
        const btn=$("starConfirm"); btn.disabled=false; btn.style.opacity=1;
      };
    });
    $("starConfirm").onclick=()=>{ if(selected>0) answer(selected); };
  } else if(q.type==="text"){
    body.innerHTML=`
      <textarea class="txt-input" id="txtAns" placeholder="${q.placeholder}"></textarea>
      <button class="cta-btn" id="txtConfirm">Continuar</button>`;
    $("txtConfirm").onclick=()=>{
      const v=$("txtAns").value.trim();
      if(v.length>0) answer(3);
      else { $("txtAns").style.borderColor="#FE2C55"; }
    };
  }
}

function answer(points){
  score += points;
  streak = points>=4 ? streak+1 : 0;
  if(streak>bestStreak) bestStreak=streak;
  if(step+1>=QUESTIONS.length){
    showResult();
  } else {
    step++; renderQuestion();
  }
}

// ====== RESULT ======
function showResult(){
  const lvl=getLevel(score);
  $("resultIcon").textContent=lvl.icon;
  $("resultTitle").textContent=lvl.title;
  $("resultSubtitle").textContent=lvl.subtitle;
  $("resultDesc").textContent=lvl.description;
  $("scoreNum").textContent=score;
  $("streakNum").textContent=(bestStreak||1)+"🔥";
  show("result");
}

$("redeemBtn").onclick=()=>{ show("products"); renderProducts(); startTimer(); };

// ====== PRODUCTS ======
function renderProducts(){
  const grid=$("productsGrid");
  grid.innerHTML=PRODUCTS.map(p=>`
    <div class="product">
      <div class="img-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="price">${p.original}</div>
        <div class="free">GRÁTIS 🎁</div>
        <div class="stock">⚡ Restam ${p.remaining}</div>
        <button class="btn" onclick="redeem('${p.name.replace(/'/g,"\\'")}')">RESGATAR</button>
      </div>
    </div>
  `).join("");
}

function redeem(name){
  // ▼▼▼ COLOQUE AQUI O LINK DO SEU CHECKOUT ▼▼▼
  const CHECKOUT_URL = "https://seu-checkout.com/?produto=";
  window.location.href = CHECKOUT_URL + encodeURIComponent(name);
}

function startTimer(){
  let total=10*60;
  const el=$("timer");
  const tick=()=>{
    const m=Math.floor(total/60), s=total%60;
    el.textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    if(total<=0) return;
    total--; setTimeout(tick,1000);
  };
  tick();
}
