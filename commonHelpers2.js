import{b as p,r as m,o as k,m as E}from"./assets/initialization-4ef4c3fd.js";import"./assets/vendor-a65214f2.js";let i,a;const h=document.querySelector(".exercises-type-list"),r=document.querySelector(".exercises-gallery-list"),L=document.querySelector(".pagination-list"),n=document.querySelector(".exercises-type-form"),f=document.querySelector(".exercises-form-input"),g=document.querySelector(".exercises-form-btn-clear");function w(){i=document.documentElement.scrollWidth<768,a=document.documentElement.scrollWidth>=1440,h.addEventListener("click",A),r.addEventListener("click",H),L.addEventListener("click",M),n.addEventListener("submit",N),f.addEventListener("input",S),g.addEventListener("click",q),window.addEventListener("resize",D),l()}function D(){let e=!1;i!==document.documentElement.scrollWidth<768&&(e=!0,i=!i),a!==document.documentElement.scrollWidth>=1440&&(e=!0,a=!a),e&&(r.dataset.isGroups?l():o())}function N(e){e.preventDefault(),o()}function S(){const e=f.value.trim();g.style.display=e.length>0?"block":"none"}function q(){n.reset(),g.style.display="none",o()}async function l(e=1){r.dataset.isGroups="true",r.dataset.groupName="";const t={filter:y().dataset.filter,limit:i?8:12,page:e},s=await p.getFilterData(t);x(s)}async function o(e=1){const t={[y().dataset.exerciseFilter]:r.dataset.groupName,limit:a?9:8,page:e},s=f.value.trim();s&&(t.keyword=s);const u=await p.getExercisesData(t);x(u,!0)}function x(e={},t=!1){const{results:s=[],totalPages:u=1,page:v=1}=e,b=t?s.map(d=>m.exerciseCardMarkup(d)).join(""):s.map(d=>m.filterGroupsMarkup(d)).join("");r.innerHTML=b,L.innerHTML=m.paginationMarkup(u,v)}function H(e){if(e.target.nodeName==="A"||e.target.nodeName==="P"||e.target.nodeName==="H3"){e.preventDefault();const t=e.target.nodeName==="A"?e.target:e.target.closest("a");r.dataset.isGroups="",r.dataset.groupName=t.dataset.name,o(),n.classList.remove("visually-hidden")}else if(r.dataset.groupName){const t=e.target.closest(".exercise-card-start-btn");t&&k(t.getAttribute("data-open-id"))}}function A(e){e.target.nodeName==="BUTTON"&&(y().classList.toggle("exercises-type-item-active"),e.target.classList.toggle("exercises-type-item-active"),l(),n.reset(),n.classList.add("visually-hidden"))}function M(e){if(e.target.nodeName==="A"){e.preventDefault();const t=Number(e.target.innerText);r.dataset.isGroups?l(t):o(t)}}function y(){return document.querySelector(".exercises-type-item-active")}w();const c=document.querySelector(".footer-subscription-form");c.addEventListener("submit",async e=>{e.preventDefault();const t=c.elements.email.value,s=await p.subscription(t);s.result?(E.showSuccess(s.message),c.elements.email.classList.remove("is-glowing")):E.showError(s.message),c.reset()});
//# sourceMappingURL=commonHelpers2.js.map
