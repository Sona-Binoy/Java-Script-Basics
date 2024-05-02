//pattern printing

//# # # #
//# # # #
//# # # #
//# # # #

for(i=1;i<=4;i++){
    str=''
    for(j=1;j<=5;j++){
        str=str+'#'+' '
    }
    console.log(str);
}

console.log('---------------------------------------------');

//# # # #
//# # # 
//# # 
//# 


for(i=1;i<=4;i++){
    str=''
    for(j=i;j<=4;j++){
        str=str+'#'+' '
    }
    console.log(str);
}

console.log('------------------------------------------------');


// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(i=1;i<=4;i++){
    str=''
    for(j=1;j<=4;j++){
        str=str+i+' '
    }
    console.log(str);
}


console.log('--------------------------------------------------');

// 1 2 3 4 
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(i=1;i<=4;i++){
    str=''
    for(j=1;j<=4;j++){
       
        str=str+j+' '
        
    }
    console.log(str);
}


console.log('--------------------------------------------------');


//*
//* *
//* * *
//* * * *

for(i=1;i<=4;i++){ //row
    str=''
    for(j=1;j<=i;j++){ //col
        str=str+'*'+' '
    }
    console.log(str);
}

 console.log('-------------------------------------------------');

//1
//2 2
//3 3 3
//4 4 4 4

for(i=1;i<=4;i++){ //row
    str=''
    for(j=1;j<=i;j++){ //col
        str=str+i+' '
    }
    console.log(str);
}

console.log('-------------------------------------------------');

//1
//1 2
//1 2 3
//1 2 3 4

for(i=1;i<=4;i++){ //row
    str=''
    for(j=1;j<=i;j++){ //col
        str=str+j+' '
    }
    console.log(str);
}


console.log('----------------------------------------------');

//* * * *
//* * *
//* * 
//*


for(i=1;i<=4;i++){
    str=''
    for(j=i;j<=4;j++){
        str=str+'*'+' '
    }
    console.log(str);
}

//or

// for(i=4;i>=1;i--){
//     str=''
//     for(j=1;j<=i;j++){
//         str=str+'*'+' '
//     }
//     console.log(str);
// }



