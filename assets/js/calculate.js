


(function () {
    let user = prompt(`Enter the service that you desire? \n a.Subtraction \n  b.Division  \n c. Addition \n d.Multiplication)`);
if (user === 'a') {
    (function subtraction(first, second) {
        console.log(`Difference: ${Number(first) - Number(second)}`);
    })(prompt(`Enter a number?`),prompt(`Enter another number?`));
}


else if (user === 'b') {
    (function division(first, second) {
        if(second != 0){
            let result = first/second
            console.log(`Quotient: ${result}`);
        }
        else{
            return 'Invalid';
        }
       
        
    })(prompt(`Enter a number?`),prompt(`Enter another number?`));
}
else if(user ==='c'){
       var sum = 0;
        var x = prompt("Enter a list");
        x.forEach(addition)
        function addition(value,index,array){
            sum = sum + value;
           
            console.log('Sum: ${sum}');
        }
    
}

// else if(user ==='d'){
//     (
//         function multiplication(number){
//             let product = 1;
//             number.forEach(i => {
//                 product *= i;
//             });
//            console.log(' Product: ${product}');
//         }
//     )(prompt(`Enter a list?`));
// }
 



else {
    console.log( `Please check and re-enter the service `);
}})();


// console.log(addition([1,2,3,4]))

// console.log( multiplication([1,2,3,4]))