// modules
 const counter = require('./counter.js');
 const stuff = require('./stuff.js');

        //  build in module which lets to do event listening
 const events = require('events');
        // acchaic module
//  const util = require('util');
 class Person extends events{
    constructor(name){
        super();
        this.name = name;
    }
 }

//  util.inherits(Person, events.EventEmitter);
// constants
    const myEmitter = new events.EventEmitter();
    let time = 0;
    let  location = __dirname;
    // function expression
    const four = function(){
        console.log(2+2);
    }
// f(x)
    function executor(fun){
        fun();
    }

    myEmitter.on('someEvent', function(mssg){
        console.log(mssg);
    })

    //___ what's avaliable on global object

        setTimeout(() => {
            console.log('it has been 3 seconds')
        }, 3000); 

        // loops endlessly
        // setInterval(() => {
        //     time += 3;

        //     console.log(time + ' second have passed');
            
        // }, 3000)

         
         let timer = setInterval(() => {
            time += 3;

            console.log(time + ' second have passed');
            if(time >= 9){
                clearInterval(timer);
            }
        }, 3000)

        
// flow 
console.log(__dirname);
console.log(__filename);
console.log(location);
executor(four);
console.log(counter(['strawberries', 'pickles', 'mangos']));
console.log(stuff.pi);
console.log(stuff.adder(2, 3));
myEmitter.emit('someEvent', 'the event was emitted');

// const james = new Person('james');
// const thomas = new Person('thomas');
// const andrew = new Person('andrew'); 
// const people = [james, thomas, andrew];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name + ' said: ' + msg);
//     });
// })

// james.emit('speak', 'hello people!');
const john = new Person('John Doe');
john.on('greet', (msg) => {
    console.log(`${john.name} says: ${msg}`);
  });


john.emit('greet', 'Hey there!');

