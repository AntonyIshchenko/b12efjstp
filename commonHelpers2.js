import"./assets/initialization-38b84e41.js";import"./assets/vendor-b9992e9a.js";const c=document.querySelector(".exercises-type-item-btn");document.querySelector(".exercises-gallery-list");document.addEventListener("DOMContentLoaded",()=>{c.classList.add("exercises-type-item-btn-focus")});c.addEventListener("click",()=>{c.classList.remove("exercises-type-item-btn-focus")});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".feedback-rating-stars-svg"),i=document.querySelector(".feedback-form-rating-value");let s=0;n.forEach(e=>{e.addEventListener("mouseenter",function(){const t=Array.from(n).indexOf(e);r(t),o(t+1)}),e.addEventListener("mouseleave",function(){s===0?a():(r(s-1),o(s))}),e.addEventListener("click",function(){const t=Array.from(n).indexOf(e)+1;s=t,i.textContent=`${s}.0`,r(t-1)})});function r(e){n.forEach((t,d)=>{d<=e?t.classList.add("feedback-rating-stars-svg-highlight"):t.classList.remove("feedback-rating-stars-svg-highlight")})}function a(){n.forEach(e=>{e.classList.remove("feedback-rating-stars-svg-highlight")}),i.textContent="0.0"}function o(e){i.textContent=`${e}.0`}});
//# sourceMappingURL=commonHelpers2.js.map
