// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        arr = [];
        let somme = 0;
        for(let i = 0; i<10; i++){
            arr.push(Math.floor(Math.random()*100));
            somme+=arr[i];
        }
        let biggest = Math.max.apply(null, arr) // apply = appelle  un fonction avec le contenu du taableaux en gise de paramttre
        let smallest = Math.min.apply(null, arr);
        let moyenne = somme/10;
        console.log(`grand nombre : ${biggest} petit nombre : ${smallest} somme : ${somme} moyenne ${moyenne}`);
    });
})();