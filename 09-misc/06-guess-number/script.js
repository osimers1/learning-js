// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let x = Math.floor(Math.random() * 100 + 1);
    let compteur = 0;
    let y = Number(prompt("deviner le nombre : "));
    console.log(x);
    while(y !== x){
        if( y > x){
            alert("plus petit");
            y = Number(prompt("deviner le nombre plus petit"));
            compteur++;
        }
        else{
            alert("plus grand");
            y = Number(prompt("deviner le nombre plus grand"));
            compteur++;
        }
    }
    alert(`vous aver trouver et il vous a fallut ${compteur} fois`);
})();