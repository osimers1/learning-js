// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let n = Number(1);
        let myArray = [];

        for(let i = 0; i < 21; i++ ){
            myArray.push(Math.pow(n, 2));
            n++;
        }
        alert(myArray);
    });

})();