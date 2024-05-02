//find the second largest aong 3 numbers and arrange them in desending order

n1=37
n2=1
n3=6

if(n1>n2){
    if(n2>n3){
        console.log('second largest is ',n2);
        console.log(`desending order is ${n1} ${n2} ${n3}` );
    }
    else{
        console.log('second largest is ',n3);
        console.log(`desending order is ${n1} ${n3} ${n2}` );
    }
}
else if(n2>n1){
    if(n1>n3){
        console.log('second largest is ',n1);
        console.log(`desending order is ${n2} ${n1} ${n3}` );
    }
    else{
        console.log('second largest is ',n3);
        console.log(`desending order is ${n2} ${n3} ${n1}` );
    }
}
if(n3>n1){
    if(n1>n2){
        console.log('second largest is ',n1);
        console.log(`desending order is ${n3} ${n1} ${n2}` );
    }
    else{
        console.log('second largest is ',n2);
        console.log(`desending order is ${n3} ${n2} ${n1}` );
    }
}
else{
    console.log('all are equal');
}