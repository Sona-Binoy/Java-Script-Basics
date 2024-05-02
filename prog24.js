//w.a.p to display numbers whose exponential is in the range of 8 - 36 .where user can input power value

power=2

value=0
i=1
while(i<=10)
{
    value=i**power
    if(value>=8 && value<=36)
    {
        console.log(i);
    }
    i++
}
