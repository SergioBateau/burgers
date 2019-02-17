// string-строка
// number число
// bool true false
// object
// function
// undefined

var name='Сергей'
console.log(name);
name='Иван'
console.log(name);

if (10>100) {
    var a='Оценочное суждение';
    console.log(a);
} else {
    var a='суждение';
    console.log(a);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
    
    
}
function sum(p1,p2,p3) {
    var result=p1+p2+p3;
    return result;
}

var result=sum(10,20,30);
console.log(result);

var result=sum(1,2,3);
console.log(result);

var array=['привет','loftschool'];
array.push(', я изучаю');
array.push('javascript');

console.log(array.length);
for (let i = 0; i < array.length; i++) {
    
    console.log(array[i]);
    
}
var b=[10,20,455,244,23,46,187,89,11,29]
for (let i = 0; i < b.length; i++) {
    if (b[i]>100) {
        console.log(b[i]);
        
    }
    
}
var obj={
    name: 'sergei',
    lastName: 'petrov',
    age: 40
};
console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.name='олег';
console.log(obj.name);

function hello(human) {
   var result='Привет, меня зовут ' + obj.name + ' '+ obj.lastName + ' и мне ' +obj.age+ ' лет!';
    return result;
}
var result=hello(obj);
console.log(result);
