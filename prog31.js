// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

for(i=1;i<=5;i++)
{
    str=''
    for(j=1;j<=5;j++)
     {
        if(i==1||i==5||i==j||(i%2==0 && j%2==0))   //if(i==1||i==5||i==j||i+j==6)
        {
            str=str+'*'
        }
        else{

            str=str+' '
        }

     }
     console.log(str);
}

console.log('----------------------------------------------------------');



//            11
//         12 13 14
//      15 16 17 18 19
//   20 21 22 23 24 25 26
//27 28 29 30 31 32 33 34 35

num=11
for(row=1;row<=5;row++)
{
    str=''
    for(sp=1;sp<=5-row;sp++)
    {
        str=str+'   '
    }
    for(col=1;col<=2*row-1;col++)
    {
        str=str+num+' '
        num++
    }
    console.log(str);
}