//check whether a given number is prime number or not

num=5
isPrime=true
if(num>1)
{
    for(i=2;i<num;i++)
    {
    if(num%i==0){
        isPrime=false
        break
     }
    
   }
}
else{
    isPrime=false
}
isPrime?console.log('prime'):console.log('not prime');
