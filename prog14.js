//2 3 4 5
//24 369 4936 61725
//2*12  3*123 4*1234 5*12345                  //2+22  3+33+333  4+44+444+4444

n=4
i=1
str=""
while (i<=n) {
    str=str+i//""+1="1"   "1"+2="12"
    //console.log(str);
    i++
}
pro=n*str
console.log(pro);

//2+22  3+33+333  4+44+444+4444

m=3
j=1
str=""
sum=0
while (j<=m) {
    str=str+m
    sum=sum+Number(str)
    j++
}
console.log(sum);