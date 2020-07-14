// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let i = fruits.indexOf("apple");
        if(i == -1){
            console.log("pas trouver");
        }
        else{
            console.log("apple se trouve a l index"+ i) ;
        }
    });
})();