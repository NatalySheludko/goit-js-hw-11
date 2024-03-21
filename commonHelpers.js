import{i as c,S as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function m(o){return o.map(({largeImageURL:t,webformatURL:a,tags:s,likes:e,views:r,comments:i,downloads:n})=>`<li class="gallery-item">
			<div class="img-wrap">
			<a class="img-link" href="${t}">
			<img class="gallery-image" src="${a}" alt="${s}" />
			</a></div>	
			<ul class="data-wrapper">
				<li class="wrap-item">
					<p class="wrap-title">Likes</p>
					<span class="wrap-text">${e}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Views</p>
					<span class="wrap-text">${r}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Comments</p>
					<span class="wrap-text">${i}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Downloads</p>
					<span class="wrap-text">${n}</span> </li>				
			</ul>
			</li>`).join("")}function u(o){const t="https://pixabay.com/api",a=new URLSearchParams({key:"42911891-070dc2b99870cce1062cd0bc6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${t}?${a}`;return fetch(s).then(e=>e.json()).catch(e=>{console.log(e)})}const l={imgGalleryForm:document.querySelector(".gallery-form"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.loader.style.display="none";l.imgGalleryForm.addEventListener("submit",o=>{o.preventDefault(),l.loader.style.display="block";const t=o.target.elements.imgName.value;u(t).then(a=>{if(!t||a.hits.length===0){c.error({position:"topRight",backgroundColor:"#e4a5ac",close:!0,messageColor:"#774144",message:"❗Sorry, there are no images matching your search query. Please try again!"}),l.loader.style.display="none";return}else{const s=m(a.hits);l.galleryContainer.insertAdjacentHTML("beforeend",s),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),l.loader.style.display="none"}}).catch(a=>{console.log(a)}),l.imgGalleryForm.reset(),l.galleryContainer.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
