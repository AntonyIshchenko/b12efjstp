import{i as U,a as l}from"./vendor-a65214f2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const B={showInfo:e=>{q(e)&&C(e,"info")},showSuccess:e=>{q(e)&&C(e,"success")},showError:e=>{q(e)&&C(e,"error")}},q=e=>e.trim().length<=300,C=(e,t="")=>{const a=[];for(;e.length>200;)a.push(e.slice(0,200)),e=e.slice(200);a.push(e),a.forEach((r,i)=>{U[t]({title:i===0?r:"",message:i===0?"":r,position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,timeout:5e3,messageLineHeight:"12px"})})};l.defaults.baseURL="https://energyflow.b.goit.study/api";const $={getFilterData:async function({page:e=1,limit:t=8,filter:s="Muscles"}){try{return(await l.get("/filters",{params:{filter:s,page:e,limit:t}})).data}catch(a){return console.log(a),{page:0,totalPages:0,results:[]}}},getExercisesData:async function(e){try{return(await l.get("/exercises",{params:e})).data}catch{return{page:0,totalPages:0,results:[]}}},getQuoteOfTheDay:async function(){try{return(await l.get("/quote")).data}catch{return{author:"",quote:""}}},getExerciseInfo:async function(e=""){try{return(await l.get(`exercises/${e}`)).data}catch(t){return{_id:"",message:t.response.data.message}}},updateExerciseRating:async function({id:e="",rate:t,email:s="",review:a=""}){try{const r=await l.patch(`exercises/${e}/rating`,{rate:t,email:s,review:a});return{result:!0}}catch(r){return{result:!1,message:r.response.data.message}}},subscription:async function(e=""){try{const t=await l.post("/subscription",{email:e});return{result:!0,message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being."}}catch(t){return console.log(t),{result:!1,message:t.response.data.message}}}},c={quote:"quoteOfTheDay",favorites:"favoritesExercises"},v={async getQuoteOfTheDay(){const e=H(new Date),t=y(c.quote);if(t&&t.date===e)return t;{const s=await $.getQuoteOfTheDay();if(s!=null&&s.quote){const a={...s,date:e};return localStorage.setItem(c.quote,JSON.stringify(a)),a}return s}},getFavorites(){const e=y(c.favorites);return e||N()},addItemToFavorites(e={}){let t=y(c.favorites);t||(t=[]),t.push(e),localStorage.setItem(c.favorites,JSON.stringify(t))},deleteItemFromFavorites(e=""){const t=y(c.favorites);if(t&&e!==""){const s=t.filter(a=>a._id!==e);localStorage.setItem(c.favorites,JSON.stringify(s))}}};function y(e=""){let t=localStorage.getItem(e);if(t)try{t=JSON.parse(t)}catch{t=null}return t}function H(e){const t=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return`${t}-${s}-${a}`}function N(){const e=[{_id:"64f389465ae26083f39b1af6",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1387.gif",name:"one leg floor calf raise",target:"calves",rating:4.33,description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",burnedCalories:42,time:3,popularity:108},{_id:"64f389465ae26083f39b1af0",bodyPart:"lower legs",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1381.gif",name:"dumbbell seated one leg calf raise - palm up",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:271,time:3,popularity:158},{_id:"64f389465ae26083f39b19e5",bodyPart:"lower legs",equipment:"sled machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0742.gif",name:"sled forward angled calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:192,time:3,popularity:75},{_id:"64f389465ae26083f39b1806",bodyPart:"lower legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0108.gif",name:"barbell standing leg calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:4,burnedCalories:201,time:3,popularity:366},{_id:"64f389465ae26083f39b1af7",bodyPart:"lower legs",equipment:"rope",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1388.gif",name:"peroneals stretch",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:127,time:3,popularity:2},{_id:"64f389465ae26083f39b1b00",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1397.gif",name:"standing calves",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:294,time:3,popularity:3},{_id:"64f389465ae26083f39b1ae3",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1368.gif",name:"ankle circles",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:266,time:3,popularity:74},{_id:"64f389465ae26083f39b1a5d",bodyPart:"lower legs",equipment:"band",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1000.gif",name:"band single leg reverse calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:289,time:3,popularity:111},{_id:"64f389465ae26083f39b1ae4",bodyPart:"lower legs",equipment:"band",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1369.gif",name:"band two legs calf raise - (band under both legs) v. 2",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:292,time:3,popularity:2},{_id:"64f389465ae26083f39b1af3",bodyPart:"lower legs",equipment:"sled machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1384.gif",name:"hack one leg calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:286,time:3,popularity:105}];return localStorage.setItem(c.favorites,JSON.stringify(e)),e}const M="/b12efjstp/assets/star-be9cd8f5.svg",R="/b12efjstp/assets/trash-black-381aa7c9.svg",W="/b12efjstp/assets/icon-run-8283bf04.svg",g={star:new URL(M,import.meta.url).href,arrowRight:new URL(R,import.meta.url).href,trash:new URL(R,import.meta.url).href,run:new URL(W,import.meta.url).href},ve={exerciseCardMarkup:function(e={},t=!1){const{name:s,burnedCalories:a,time:r,bodyPart:i,target:n,rating:L,_id:S}=e;console.log(g);let k="";return t?k=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${S}">
       <svg class="exercise-card-remove-icon">
           <use href="${g.trash}"></use>
       </svg>
    </button>`:k=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${L}</span>
         <svg class="exercise-card-rating-star" width="18" height="18">
           <use href="${g.star}"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${S}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${k}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${S}">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon" width="16" height="16">
        <use href="${g.arrowRight}"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon">
      <use href="${g.run}"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${s}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${a} / ${r} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${i}</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${n}</p>
    </li>
  </ul>
  </li>`},filterGroupsMarkup:function({name:e="",filter:t="",imgUrl:s=""}){return`<li class="exercises-gallery-item" style="${`background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${s}');`}">
    <a href="" class="exercises-gallery-link" data-name="${e}">
      <h3 class="exercises-gallery-item-title">${e}</h3>
      <p class="exercises-gallery-item-description">${t}</p>
    </a>
  </li>`},paginationMarkup:function(e=1,t=1){let s="";for(let a=1;a<=e;a++)a!==t-0?s+=`<li class="pagination-item"><a href="">${a}</a></li>`:s+=`<li class="pagination-item pagination-item-active">
    <a href="">${a}</a>
  </li>`;return s}};let m=0;const p=document.querySelectorAll(".feedback-rating-stars-svg"),I=document.querySelector(".feedback-form-rating-value"),x=document.querySelector(".modal-exercise"),h=document.querySelector(".feedback-container"),G=document.querySelector(".modal-exercise-btn-rating"),J=document.querySelector(".feedback-close-button"),V=document.querySelector(".feedback-form-button");function Q(){G.addEventListener("click",j),J.addEventListener("click",_),V.addEventListener("click",Y),z()}function j(e=""){typeof e=="string"&&(h.dataset.id=e,x.classList.toggle("visually-hidden"),x.classList.toggle("is-open-modal"),h.classList.toggle("visually-hidden"),h.classList.toggle("is-open-modal"))}function _(e){h.classList.toggle("visually-hidden"),h.classList.toggle("is-open-modal"),x.classList.toggle("visually-hidden"),x.classList.toggle("is-open-modal")}async function Y(e){e.preventDefault();const t=document.querySelector(".feedback-form").dataset.id=t,s=document.querySelector(".feedback-form-rating-value").textContent,a=document.querySelector(".feedback-form-input").value,r=document.querySelector(".feedback-form-textarea").value.trim();if(!t||!s||!a||!r){messages.showError("Please fill in all fields!");return}const i={id:t,rate:s,email:a,review:r},n=await $.updateExerciseRating(i);n.result?(messages.showSuccess("Thank you! Your opinion is important to us!"),_()):messages.showError(n.message)}function z(){p.forEach(e=>{e.addEventListener("mouseenter",()=>{const t=Array.from(p).indexOf(e);E(t),P(t+1)}),e.addEventListener("mouseleave",()=>{m===0?K():(E(m-1),P(m))}),e.addEventListener("click",()=>{const t=Array.from(p).indexOf(e)+1;m=t,I.textContent=`${m}.0`,E(t-1)})})}function E(e){p.forEach((t,s)=>{s<=e?t.classList.add("feedback-rating-stars-svg-highlight"):t.classList.remove("feedback-rating-stars-svg-highlight")})}function K(){p.forEach(e=>{e.classList.remove("feedback-rating-stars-svg-highlight")}),I.textContent="0.0"}function P(e){I.textContent=`${e}.0`}let T={};const D=document.querySelector(".backdrop"),X=document.querySelector(".modal-exercise-btn-close"),Z=document.querySelector(".modal-exercise-btn"),ee=document.querySelector(".modal-exercise-btn-rating"),u=document.querySelector(".modal-exercise"),te=document.querySelector(".modal-exercise-title"),se=document.querySelector(".mod-exercise-rating-value"),d=document.querySelector(".modal-exercise-list"),ae=document.querySelector(".modal-exercise-instruction-text"),o=document.querySelector(".mod-exercise-span"),re=document.getElementById("img");function ie(){X.addEventListener("click",de),Z.addEventListener("click",oe),ee.addEventListener("click",le)}async function xe(e=""){D.classList.add("backdrop-is-open"),u.classList.add("is-open-modal");const t=await $.getExerciseInfo(e);if(t!=null&&t._id){u.dataset.id=t._id,T=t,ne(t);const s=v.getFavorites().find(a=>a._id===t._id);o.textContent=s?o.dataset.remove:o.dataset.add}else u.dataset.id="",T={},B.showError(t.message)}function ne(e){ce(e.gifUrl),te.textContent=b(e.name),se.textContent=e.rating.toString().padEnd(3,".0"),ue(),ae.textContent=e.description,d.innerHTML="";let t="";const s=Object.keys(e);if(s.includes("target")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${b(e.target)}</p>
        </li>`,d.insertAdjacentHTML("beforeend",t)),s.includes("bodyPart")&&(t=` <li class="modal-exercise-item">
    <p class="modal-exercise-subcategory">Body Part</p>
    <p class="modal-exercise-selected">${b(e.bodyPart)}</p>
  </li>`,d.insertAdjacentHTML("beforeend",t)),s.includes("equipment")&&(t=` <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${b(e.equipment)}</p>
        </li>`,d.insertAdjacentHTML("beforeend",t)),s.includes("popularity")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${e.popularity}</p>
        </li>`,d.insertAdjacentHTML("beforeend",t)),s.includes("time")){const a=`<li class="modal-exercise-item">
            <p class="modal-exercise-subcategory">Burned Calories</p>
            <p class="modal-exercise-selected">${e.burnedCalories}/${e.time} min</p>
          </li>`;d.insertAdjacentHTML("beforeend",a)}}function oe(){o.textContent===o.dataset.add?(o.textContent=o.dataset.remove,v.addItemToFavorites(T)):(o.textContent=o.dataset.add,v.deleteItemFromFavorites(u.dataset.id))}function ce(e){re.style.backgroundImage=`linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.2) 0%,
      rgba(27, 27, 27, 0.2) 100%
    ),
    url(${e})`}function le(){j(u.dataset.id)}function de(){D.classList.remove("backdrop-is-open"),u.classList.remove("is-open-modal")}function b(e=""){return e[0].toUpperCase()+e.substring(1)}function ue(){const e=document.querySelectorAll(".mod-exercise-rating");let t,s;for(let n=0;n<e.length;n++){const L=e[n];a(L)}function a(n){r(n),i()}function r(n){t=n.querySelector(".mod-exercise-rating-active"),s=n.querySelector(".mod-exercise-rating-value")}function i(){const n=s.textContent/.05;t.style.width=`${n}%`}}const ge=document.querySelector(".mob-menu-close-nav-button"),me=document.querySelector(".header-button-nav"),w=document.querySelector(".mobile-menu");me.addEventListener("click",()=>w.classList.add("is-open"));ge.addEventListener("click",()=>w.classList.remove("is-open"));w.addEventListener("click",()=>w.classList.remove("is-open"));const fe=document.querySelector(".mob-menu-home"),pe=document.querySelector(".mob-menu-favorites");window.location.pathname.endsWith("/favorites.html")&&(pe.classList.add("active"),fe.classList.remove("active"));const he=document.querySelector(".header-home"),ye=document.querySelector(".header-favorites");window.location.pathname.endsWith("/favorites.html")&&(ye.classList.add("active"),he.classList.remove("active"));const f=document.querySelector(".scroll-button"),O=document.querySelector(".scroll-mini"),A=document.querySelector(".scroll-big");F();f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{document.documentElement.scrollTop>=300&&f.classList.contains("is-hidden")&&f.classList.remove("is-hidden"),document.documentElement.scrollTop<300&&!f.classList.contains("is-hidden")&&f.classList.add("is-hidden")});window.addEventListener("resize",()=>{F()});function F(){document.documentElement.scrollWidth>=1440?(A.classList.remove("is-undisplayed"),O.classList.add("is-undisplayed")):(A.classList.add("is-undisplayed"),O.classList.remove("is-undisplayed"))}(async()=>{let e=await v.getQuoteOfTheDay();document.querySelector(".quote-author").textContent=e.author,document.querySelector(".quote-text").textContent=e.quote})();ie();Q();export{$ as b,v as l,B as m,xe as o,ve as r};
//# sourceMappingURL=initialization-bc3b44a8.js.map