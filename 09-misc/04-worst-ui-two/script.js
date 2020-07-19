// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    

    let target = document.getElementById("target");
    let btn1 = document.getElementById("part-one");
    btn1.innerHTML = 460;
    let btn2 = document.getElementById("part-two");
    btn2.innerHTML = "0" +0;
    let btn3 = document.getElementById("part-three");
    btn3.innerHTML = "0" + 0;
    let btn4 = document.getElementById("part-four");
    btn4.innerHTML = "0" + 0;


    let getNum = (button, min, max) => {
        button.addEventListener("click", () => {
            button.innerHTML ++;
            if(button.innerHTML < 10 || button.innerHTML === 0){
                button.innerHTML = `0${button.innerHTML}`;
            }
            if(button.innerHTML > max){
                button.innerHTML = min;
            }
        target.innerHTML = "+" + btn1.innerHTML + btn2.innerHTML + btn3.innerHTML + btn4.innerHTML;
        })     
    }

    getNum(btn1, 460, 499);
    getNum(btn2, 00, 99);
    getNum(btn3, 00, 99);
    getNum(btn4, 00, 99);
    
})();