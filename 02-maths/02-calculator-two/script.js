// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    
    const performOperation = operation => {
        // perform the operation
        switch(operation){
            case 'addition':
                var num1 =  parseInt(document.getElementById("op-one").value, 10);
                var num2 =  parseInt(document.getElementById("op-two").value, 10);
                alert(num1 + num2);
            break;
            case 'substraction' : 
                var num1 =  parseInt(document.getElementById("op-one").value, 10);
                var num2 =  parseInt(document.getElementById("op-two").value, 10);
                alert(num1 - num2);
            break;
            case 'multiplication' :
                var num1 = parseInt(document.getElementById("op-one").value, 10);
                var num2 = parseInt(document.getElementById("op-two").value, 10);
                alert(num1 * num2);
            break;
            case 'division' :
                var num1 = parseInt(document.getElementById("op-one").value, 10);
                var num2 = parseInt(document.getElementById("op-two").value, 10);
                alert(num1 / num2);
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();