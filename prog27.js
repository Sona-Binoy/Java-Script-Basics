//w. a .p  to display all prime numbers from 2-50

for(i=2;i<=50;i++)
{
    let flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break
        }
    }
    if(i>0 && flag==0){
        console.log(i);
    }
}

//w.a.p to display all amstrong numbers between 8-500

for(num=8;num<=500;num++){

    power=(num+'').length //to get number of digits in a number
    temp=num
    sum=0
    remainder=0
    if (power!=1) {
        while(temp>0)
        {
            remainder=num%10
            sum=sum+remainder**power
            num=Math.floor(num/10)
        }
        
    }
    else{
        sum=0
    }
    if(sum==num)
    {
        console.log(num);
    }

}