// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        
        function factorial(a){
            return a > 1?a * factorial(a-1):1; // syntaxe pour return un nombre factoriel
        }
        alert(factorial(parseInt(document.getElementById("number").value, 10)));
    });

})();