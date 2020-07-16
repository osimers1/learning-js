// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person{
        set name(name){
            let split = name.split(" ");//separe chaque caractere et le met dans un tableau (separation avec le caractere "espace")
            this.firstname = split[0];
            this.lastname = split[1];
        }

        get name() {
            return `Nom: ${this.lastname}, Prenom: ${this.firstname}`;
        }
    }
    document.getElementById('run').addEventListener('click', () => {
        let moi = new Person();
        moi.name = "Adrien Delpire";//appelle seter
        console.log(moi.name);// appelle geter
    });
})();