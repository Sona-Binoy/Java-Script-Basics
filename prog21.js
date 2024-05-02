//whether a given number is palindrom or not

num=123
temp=num
remainder=0
reverse=0
console.log('given number is ',num); 

while (num>0) {
    remainder=num%10
    reverse=(reverse*10)+remainder
    num=Math.floor(num/10)//parseInt
}
if (temp==reverse) {
    console.log('it is a palindrome number');
}
else{
    console.log('it is not a palindrom number');
}