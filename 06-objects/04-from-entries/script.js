(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        const objet = Object.fromEntries(keys.map(function (key, i){
            return [key, values[i]];
        }));

        console.log(objet);
    });
})();