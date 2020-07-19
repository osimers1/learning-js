// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let password = document.getElementById("pass-one");
        let validity = document.getElementById("validity");
        let number = /[^0-9]/g; // The [^0-9] expression is used to find any character that is NOT a digit. en l'occurance number = caractere de 0 a 9

        password.addEventListener('input', Check);

        function Check(mdp) {
            if (password.value.length >= 8 && password.value.match(number).length >=2){ // match de (number).length regarde si il y a bien 2 chiffre ecrit en 
                validity.innerHTML = "ok";
            }
            else{
                validity.innerHTML = "not ok"
            }
            
        }
})();