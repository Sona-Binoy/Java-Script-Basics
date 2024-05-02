// check the eligibility of voting

age=25
if(age>=18){
    console.log('eligible');
}
else{
    console.log('not eligible');
}

//check whether a given number is positive or negative

a=10
if(a>0)
{
    console.log('given number is positive');
}
else if(a==0){
    console.log('number is neither positive nor negative');
}
else{
    console.log('given number is negative');
}

//find the largest among 2 given numbers

num1=200
num2=300

/*if(num1>num2)
{
    console.log('num1 is largest');
}
else if(num2>num1)
{
    console.log('num2 is larger');
}
else{
    console.log('both are equal');
}*/

//ternary  operator
num1>num2?console.log('num1 is largest'):num2>num1?console.log('num2 is larger'):console.log('both are equal');


//given number is odd or even

a=16
if(a%2==0)
{
    console.log('even number');
}
else{
    console.log('odd number');
}