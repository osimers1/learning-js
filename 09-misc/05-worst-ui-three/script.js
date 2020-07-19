// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let target = document.getElementById("target");

    let b1 = document.getElementById("part-one");
    let btn1 = document.getElementById("fix-part-one");

    let b2 = document.getElementById("part-two");
    let btn2 = document.getElementById("fix-part-two");

    let b3 = document.getElementById("part-three");
    let btn3 = document.getElementById("fix-part-three");

    let b4 = document.getElementById("part-four");
    let btn4 = document.getElementById("fix-part-four");

    target.innerHTML = "+" + b1.value + b2.value + b3.value + b4.value;

    let clickBtn = (button, value, min, max) => {
        button.addEventListener("click", () => {
            let nombre = Math.floor(Math.random() * (max - min) + min);

            if(nombre < 10){
                value.value = `0${nombre}`;
            }
            else{
                value.value = nombre; 
            }
            target.innerHTML = "+" + b1.value + b2.value + b3.value + b4.value;
        });
    }

    clickBtn(btn1, b1, 460, 499);
    clickBtn(btn2, b2, 00, 99);
    clickBtn(btn3, b3, 00, 99);
    clickBtn(btn4, b4, 00, 99);


})();