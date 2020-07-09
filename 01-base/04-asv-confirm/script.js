// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    var recommencer;
    while(recommencer != "yes"){
        var age = prompt("please enter your age");
        var gender = prompt("please enter your gender");
        var town = prompt("enter your town");
        recommencer = prompt("do you want confirm ? enter yes");
    }
    alert(age + " " + gender + " " + town);
    
})();