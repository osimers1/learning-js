(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let animal1 = new Cat("Skitty", 9);
        let animal2 = new Cat("Pixel", 6);
        console.log(`1er chat: `, animal1, "\n2eme chat : ", animal2 );
    });
})();