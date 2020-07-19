// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let target = document.getElementById("target");
    let slider = document.getElementById("slider");
    slider.addEventListener('input', () => {target.innerHTML = "0" + slider.value;});//https://developer.mozilla.org/fr/docs/Web/Events pour voir les event et le addEventListener la valeur de la barre est deja definie pour que la valeur de la fin sois la bonne
})();