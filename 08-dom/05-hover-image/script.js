// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let ancienne =  document.getElementsByTagName("img")[0];
    let nouvelle = document.createElement('img');
    nouvelle.src = "../../_shared/img/kiss-wink-heart.svg";
    ancienne.src = "../../_shared/img/kiss.svg";

    ancienne.addEventListener("mouseenter", ()=>{
        
        ancienne.parentNode.replaceChild(nouvelle, ancienne);
   })
   nouvelle.addEventListener("mouseout",()=>{
        
        nouvelle.parentNode.replaceChild(ancienne, nouvelle);
   })
})();