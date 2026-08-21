/* ===== FILE: js/main.js ===== */
const SERVICES=[
{name:"AC Repair",url:"ac-repair.html",icon:"fa-wind"},{name:"Washing Machine Repair",url:"washing-machine-repair.html",icon:"fa-tshirt"},
{name:"Refrigerator Repair",url:"refrigerator-repair.html",icon:"fa-snowflake"},{name:"Microwave Oven Repair",url:"microwave-repair.html",icon:"fa-fire-alt"},
{name:"Water Purifier Repair",url:"water-purifier-repair.html",icon:"fa-tint"},{name:"Kitchen Chimney Repair",url:"kitchen-chimney-repair.html",icon:"fa-utensils"},
{name:"Geyser Repair",url:"geyser-repair.html",icon:"fa-temperature-high"},{name:"TV Repair",url:"tv-repair.html",icon:"fa-tv"},
{name:"Water Cooler Repair",url:"water-cooler-repair.html",icon:"fa-glass-whiskey"},{name:"Gas Stove Repair",url:"gas-stove-repair.html",icon:"fa-burn"},
{name:"Bathroom Cleaning",url:"bathroom-cleaning.html",icon:"fa-bath"},{name:"Home Deep Cleaning",url:"home-cleaning.html",icon:"fa-home"},
{name:"Sofa Cleaning",url:"sofa-cleaning.html",icon:"fa-couch"},{name:"Carpet Cleaning",url:"carpet-cleaning.html",icon:"fa-layer-group"},
{name:"Water Tank Cleaning",url:"water-tank-cleaning.html",icon:"fa-water"},{name:"Kitchen Deep Cleaning",url:"kitchen-deep-cleaning.html",icon:"fa-blender"},
{name:"Mattress Cleaning",url:"mattress-cleaning.html",icon:"fa-bed"},{name:"General Pest Control",url:"pest-control.html",icon:"fa-bug"},
{name:"Cockroach Control",url:"cockroach-control.html",icon:"fa-spider"},{name:"Termite Control",url:"termite-control.html",icon:"fa-bug"},
{name:"Electrician",url:"electrician.html",icon:"fa-bolt"},{name:"Plumber",url:"plumber.html",icon:"fa-wrench"},
{name:"Carpenter",url:"carpenter.html",icon:"fa-hammer"},{name:"House Painter",url:"painter.html",icon:"fa-paint-roller"},
{name:"Interior Designer",url:"interior-designer.html",icon:"fa-drafting-compass"},{name:"Home Renovation",url:"home-renovation.html",icon:"fa-hard-hat"},
{name:"Waterproofing",url:"waterproofing.html",icon:"fa-tint"}];

function initSearch(){
 const input=document.querySelector("#serviceSearch"),drop=document.querySelector("#searchDropdown"); if(!input||!drop)return;
 const prefix=document.body.dataset.page==="home"?"services/":"";
 input.addEventListener("input",()=>{const q=input.value.trim().toLowerCase();if(!q){drop.classList.remove("show");drop.innerHTML="";return}
 const matches=SERVICES.filter(s=>s.name.toLowerCase().includes(q)).slice(0,8);
 drop.innerHTML=matches.length?matches.map(s=>`<a class="search-result" href="${prefix+s.url}"><i class="fas ${s.icon}" aria-hidden="true"></i><span>${s.name}</span></a>`).join(""):`<div class="search-result">No matching service found.</div>`;
 drop.classList.add("show");
 });
 document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))drop.classList.remove("show")});
}
function initHeroSlider(){
 const slides=[...document.querySelectorAll(".hero-slide")],dots=[...document.querySelectorAll(".hero-dot")];if(!slides.length)return;
 let index=0,timer;
 const show=i=>{index=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle("active",n===index));dots.forEach((d,n)=>d.classList.toggle("active",n===index))};
 const restart=()=>{clearInterval(timer);timer=setInterval(()=>show(index+1),5000)}; restart();
 document.querySelector("#heroPrev")?.addEventListener("click",()=>{show(index-1);restart()});
 document.querySelector("#heroNext")?.addEventListener("click",()=>{show(index+1);restart()});
 dots.forEach((d,n)=>d.addEventListener("click",()=>{show(n);restart()}));
}
function initStickyHeader(){const h=document.querySelector(".header");if(!h)return;window.addEventListener("scroll",()=>h.classList.toggle("scrolled",scrollY>80),{passive:true})}
function initBackToTop(){const b=document.querySelector("#backToTop");if(!b)return;window.addEventListener("scroll",()=>b.classList.toggle("visible",scrollY>400),{passive:true});b.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}))}
function initCounters(){
 const section=document.querySelector(".stats-section");if(!section)return;let done=false;
 const obs=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting||done)return;done=true;
 document.querySelectorAll(".stat-num").forEach(el=>{const target=Number(el.dataset.target)||0;let start=0,frames=100,step=target/frames;
 const timer=setInterval(()=>{start+=step;if(start>=target){start=target;clearInterval(timer)}el.textContent=Math.floor(start).toLocaleString("en-IN")},20)});
 obs.disconnect()}, {threshold:.25});obs.observe(section);
}
function initFAQ(){document.querySelectorAll(".faq-question").forEach(q=>q.addEventListener("click",()=>{const answer=q.nextElementSibling,open=q.classList.contains("open");
 document.querySelectorAll(".faq-question").forEach(x=>x.classList.remove("open"));document.querySelectorAll(".faq-answer").forEach(x=>x.classList.remove("open"));
 if(!open){q.classList.add("open");answer.classList.add("open")}}))}
function initBookingForm(){document.querySelectorAll(".booking-form").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();const btn=form.querySelector(".btn-book-form"),success=form.parentElement.querySelector(".form-success");btn.textContent="Booking...";btn.disabled=true;
 setTimeout(()=>{form.style.display="none";success?.classList.add("show")},1500)}))}
function initMobileNav(){const nav=document.querySelector("#mobileNav"),overlay=document.querySelector("#navOverlay"),open=document.querySelector("#hamburger"),close=document.querySelector("#mobileNavClose");if(!nav||!overlay)return;
 const set=v=>{nav.classList.toggle("open",v);overlay.classList.toggle("open",v);document.body.style.overflow=v?"hidden":""};open?.addEventListener("click",()=>set(true));close?.addEventListener("click",()=>set(false));overlay.addEventListener("click",()=>set(false));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>set(false)));
}
document.addEventListener("DOMContentLoaded",()=>{initSearch();initHeroSlider();initStickyHeader();initBackToTop();initCounters();initFAQ();initBookingForm();initMobileNav()});
