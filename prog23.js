//check whether the given number is armstrong or not
//eg; 1634= 1**4 + 6**4 + 3**4 + 4**4
// 153= 1**3 + 5**3 + 3**3

num=153
temp=num
power=(num+'').length
remainder=0
sum=0


while(num>0){

    remainder=num%10
    sum=sum+remainder**power
    num=Math.floor(num/10)

}
if (temp==sum) {
console.log('Amstrong');
    
}
else{
    console.log(' not Amstrong');
}

//temp==sum?console.log('Amstrong'):console.log(' not Amstrong');