const score=400
console.log(score);

const balance=new Number(500)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//500.00

const num=123.3456
console.log(num.toPrecision(3));//123
console.log(num.toPrecision(4));//123.4

const num2=1234.3456
console.log(num2.toPrecision(3));//1.23e+3 make 3 digit rest is in power of e
console.log(num2.toPrecision(4));//1234

const hundreds=100000000
console.log(hundreds.toLocaleString('en-in'));//1,00,00,000
//---------maths-------
console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
// has  to many properties sqrt,min,max,pow,random etc
console.log(Math.sqrt(16));
console.log(Math.min(4,2,8,6));
console.log(Math.max(4,2,8,6));
console.log(Math.pow(2,3));

console.log(Math.random())//0 to 1 ke beech me random number deta hai
console.log((Math.random()*10)+1)//1 to 10 ke beech me random number deta hai
console.log(Math.floor(Math.random()*10+1))//1 to 10 ke beech me random integer deta hai

const min=10
const max=20
Math.random()*(max-min+1)+min//10 to 20 ke beech me random number deta hai
console.log(Math.floor(Math.random()*(max-min+1)+min))//10 to 20 ke beech me random integer deta hai