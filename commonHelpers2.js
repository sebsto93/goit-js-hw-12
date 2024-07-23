import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as E,i as c,a as b}from"./assets/vendor-b0d10f48.js";const L="45072891-a2b62f681812c134104bf6075",v="https://pixabay.com/api/",r=40;let s=1,d="",m=0;function g(){const e=document.querySelector(".loading");e&&(e.style.display="flex")}function p(){const e=document.querySelector(".loading");e&&(e.style.display="none")}function h(){const e=document.querySelector(".load-more-button");e&&(e.style.display="block")}function l(){const e=document.querySelector(".load-more-button");e&&(e.style.display="none")}function u(){c.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}async function y(e,o=1){try{const t=await b.get(v,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:r}}),{hits:n,totalHits:a}=t.data;return m=a,n.length===0?(c.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):n}catch(t){return c.error({title:"Error",message:"An error occurred while downloading the images. Try again!",position:"topRight"}),console.error("Błąd pobierania danych:",t),[]}}function f(e){const o=document.getElementById("gallery");o&&(e.forEach(t=>{const n=document.createElement("a");n.href=t.largeImageURL,n.classList.add("gallery-item");const a=document.createElement("img");a.src=t.webformatURL,a.alt=t.tags,a.classList.add("gallery-image");const i=document.createElement("div");i.classList.add("image-info"),i.innerHTML=`
      <div>
        <span class="label">Likes:</span>
        <span>${t.likes}</span>
      </div>
      <div>
        <span class="label">Views:</span>
        <span>${t.views}</span>
      </div>
      <div>
        <span class="label">Comments:</span>
        <span>${t.comments}</span>
      </div>
      <div>
        <span class="label">Downloads:</span>
        <span>${t.downloads}</span>
      </div>
    `,n.appendChild(a),n.appendChild(i),o.appendChild(n)}),w.refresh(),setTimeout(I,100))}const w=new E(".gallery-item",{captionsData:"alt",captionDelay:250});function I(){const e=document.querySelectorAll(".gallery-item");if(e.length>0){const t=e[e.length-1].getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}}async function B(e){e.preventDefault();const o=document.getElementById("search-input").value.trim();if(!o)return;d=o,s=1,g(),l();const t=await y(d,s),n=document.getElementById("gallery");n.innerHTML="",f(t),p(),t.length===r?h():(l(),u())}async function S(){if(s+=1,s*r>=m)l(),u();else{g();const e=await y(d,s);f(e),p(),(s-1)*r+e.length<m?h():(l(),u())}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("search-form");e?e.addEventListener("submit",B):console.error("Element #search-form not found");const o=document.querySelector(".load-more-button");o?o.addEventListener("click",S):console.error("Element .load-more-button not found")});
//# sourceMappingURL=commonHelpers2.js.map
