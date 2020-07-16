// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        static greeting = "miaou";
        constructor(name){
            super(); //quand class etendue, super() apelle le constructor de la class étendue
            this.name = name;
        }
    };

    class Dog extends Animal {
        static greeting = "woof";
        constructor(name){
            super();
            this.name = name;
        }
    };

    document.getElementById("run").addEventListener("click", () => {
        let cat = new Cat('filou');
        let dog = new Dog('pepsi');
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    });
})();