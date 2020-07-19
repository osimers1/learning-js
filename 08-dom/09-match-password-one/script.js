// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
    let password1 = document.getElementById("pass-one").value;
    let password2 = document.getElementById("pass-two").value;

    if(password1 != password2){
        alert("mot de passe non correspondant");
        document.getElementById("pass-one").style.borderColor = "red";
        document.getElementById("pass-two").style.borderColor = "red";
        return false;
    }
    else{
        alert("bon mot de passe");
        return true;
    }
    
});
})();