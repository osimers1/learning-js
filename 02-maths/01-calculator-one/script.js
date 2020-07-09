// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var num1 =   parseInt(document.getElementById("op-one").value, 10);
        var num2 =  parseInt(document.getElementById("op-two").value, 10);
        alert(num1 + num2);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var num1 =   parseInt(document.getElementById("op-one").value, 10);
        var num2 =  parseInt(document.getElementById("op-two").value, 10);
        alert(num1 - num2);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var num1 =   parseInt(document.getElementById("op-one").value, 10);
        var num2 =  parseInt(document.getElementById("op-two").value, 10);
        alert(num1 * num2);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var num1 =   parseInt(document.getElementById("op-one").value, 10);
        var num2 =  parseInt(document.getElementById("op-two").value, 10);
        alert(num1 / num2);
    });
})();