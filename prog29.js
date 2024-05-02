//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * *
//* *
//*

for(i=1;i<=5;i++)
{
    str=''
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
   
}
for(i=4;i>=1;i--)
{
    str=''
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
   
}


console.log('---------------------------------------------');


//       *
//      * *
//     * * *
//    * * * *


for(i=1;i<=4;i++)
{
    str=''
    for(space=4;space>i;space--)
    {
        str=str+' '
    }
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
}

console.log('-------------------------------------------');

//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//    * * * *
//     * * * 
//      * *
//       *

for(i=1;i<=10;i++)
{
    str=''
    if(i<5)
    {
        for(s=5;s>i;s--)
        {
            str=str+' '
        }
        for(j=1;j<=i;j++)
        {
            str=str+'* '
        }
    }
    else{
        for(s=6;s<=i;s++)
        {
            str=str+' '
        }
        for(j=10;j>i;j--)
        {
            str=str+'* '
        }
    }
    console.log(str);
}

console.log();
