// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let password1 = document.getElementById("pass-one");
        let password2 = document.getElementById("pass-two");
    
        if(password1.value != password2.value){
            alert("mot de passe non correspondant");
            
            password1.classList.add("error");
            password2.classList.add("error"); 
            return false;
        }
        else{
            alert("bon mot de passe");
            return true;
        }
    });
})();