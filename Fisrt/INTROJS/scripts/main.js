import {add,subtract,multiply,divide,greet} from './math.js';
import abc from './math.js';


const obj1={name:'john'};
obj1.name='jane';
console.log(obj1.name);


console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));
console.log(greet('john'));

const  person = {
    name: 'John',
    age: '30',
    height:'160'

}

const{name,age,height} =person;
console.log(name,age,height);

abc();

function outer() {
    function inner() {
        console.log("This is the inner function.");
        
    }
    inner();
}
outer();