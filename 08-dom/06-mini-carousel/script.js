// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here


    let suivante = document.getElementById('next');
    let i = 0;
    suivante.addEventListener('click', ()=>{
            i++;
            document.getElementsByTagName('img')[0].src = gallery[i];
            if(i == 4){
                i = 0;
        }
    })
})();