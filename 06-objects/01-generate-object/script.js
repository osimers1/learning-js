// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        var personne = new Object();
        personne.lastname = "Delpire";
        personne.firstname = "Adrien";
        personne.age = "24ans";
        personne.city = "Namur";
        personne.country = "belgique";
        console.log(personne);
    });
})();