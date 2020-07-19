 
// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let tar = document.getElementById("target");
    text = target.innerHTML; // ! que si on met directement targte.inneHTML dans la ligne 13 a la place de text cela ne fonctionne pas
    let i = 0;

    function typeWriter(){
            tar.innerHTML = text.substring(0, i);// substring = excret une sous-chaine de caractere d'une chaine de caracter en l'occurance ici commence a 0 jusque i
            let speed = 25;
            i++;
        i < (text.length) && setTimeout(typeWriter, speed);
    }   
    typeWriter();
})();