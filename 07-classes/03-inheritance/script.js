/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }

        constructor(name){
            this.name= name;
        }
    }
    
    class Cat extends Animal{
        constructor(name){
            super(name);
        }
        static get greeting() {return 'miaouuuu';}
    }

    class Dog extends Animal{
        constructor(name){
            super(name);
        }
        static get greeting() {return 'woooffff';}
    }

    document.getElementById("run").addEventListener("click", function(){

        let cat1 = new Cat('Misty');
        let dog1 = new Dog('Flapi');

        console.log(cat1.sayHello());
        console.log(dog1.sayHello());

    });
})();
