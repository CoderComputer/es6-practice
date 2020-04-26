const doubleIt = num => num+10;
const result =  doubleIt(5);
console.log(result);

const doubleFun = (x,y) => x-y;
const result2 = doubleFun(50,100);
console.log(result2);

const nunFun = () => 5;
const none = nunFun();
console.log(none);

const multiFun = (a,b) => {
    const add =  a + b;
    const diff = a - b;
    const sum = add * diff;
    return sum;
}
const multiResult = multiFun(10,5);
console.log(multiResult);