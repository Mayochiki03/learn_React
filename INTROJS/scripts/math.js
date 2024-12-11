
const add = (a,b) => a+b; 

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;


const divide = (a,b) => a/b;

function doSomthing(xfunc){
    console.log(xfunc);
}

function greet(name){
    return `Hello, ${name}!`;
}

export default function(){
    console.log('default export');
    
}
export{add,subtract,multiply,divide,doSomthing,greet}