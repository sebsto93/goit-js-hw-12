import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as i,a as l,i as r}from"./assets/vendor-b0d10f48.js";const c="45072891-a2b62f681812c134104bf6075",d="https://pixabay.com/api/";function m(){const e=document.querySelector(".loading");e&&(e.style.display="flex")}function p(){const e=document.querySelector(".loading");e&&(e.style.display="none")}async function g(e){try{const n=await l.get(d,{params:{key:c,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}}),{hits:a}=n.data;return a.length===0?(r.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):a}catch(n){return r.error({title:"Error",message:"An error occurred while downloading the images. Try again!",position:"topRight"}),console.error("Błąd pobierania danych:",n),[]}}function h(e){const n=document.getElementById("gallery");n&&(n.innerHTML="",e.forEach(a=>{const t=document.createElement("a");t.href=a.largeImageURL,t.classList.add("gallery-item");const s=document.createElement("img");s.src=a.webformatURL,s.alt=a.tags,s.classList.add("gallery-image");const o=document.createElement("div");o.classList.add("image-info"),o.innerHTML=`
            <div>
                <span class="label">Likes:</span>
                <span>${a.likes}</span>
            </div>
            <div>
                <span class="label">Views:</span>
                <span>${a.views}</span>
            </div>
            <div>
                <span class="label">Comments:</span>
                <span>${a.comments}</span>
            </div>
            <div>
                <span class="label">Downloads:</span>
                <span>${a.downloads}</span>
            </div>
        `,t.appendChild(s),t.appendChild(o),n.appendChild(t)}),u.refresh())}const u=new i(".gallery-item",{captionsData:"alt",captionDelay:250});async function y(e){e.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n)return;m();const a=await g(n);h(a),p()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("search-form");e?e.addEventListener("submit",y):console.error("Element #search-form not found")});
//# sourceMappingURL=commonHelpers2.js.map
