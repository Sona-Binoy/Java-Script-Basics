num=12

if(num%15==0){
    console.log('fizzbuzz');
}
else if(num%5==0){
    console.log('buzz');
}
else if(num%3==0){
    console.log('fizz');
}
else{
    console.log('it is not divisible by 15,3,5 ');
}