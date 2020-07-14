// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let arr = [];

        //for(let fruit of fruits)
        for(let i = 0; i < fruits.length; i++){
            let fruit = fruits[i];
            if(arr.indexOf(fruit) == -1)// si fruit n'existe pas encore
                arr.push(fruit);
        }
        console.log(arr);
    });
})();