




(function () {
    let user = prompt(`Enter the service that you desire? \n a. Addition \n b. Subtraction \n c. Multiplication  \n d. Division ` );
 if(user ==='a'){
    arr = prompt("Enter a list of numbers to add").split(',');
    res = addition(arr); 
}
 else if (user === 'b') {
    first= prompt(`Enter a number?`)
    second = prompt(`Enter another number?`);
    res = subtraction(first,second);
}



else if(user ==='c'){
    arr = prompt("Enter a list of numbers to multiply").split(',');
    res = multiplication(arr); 
}
else if (user === 'd') {
    first= prompt(`Enter a number?`)
    second = prompt(`Enter another number?`);
    res = division(first,second);
}

 



else {
    console.log( `Please check and re-enter the service `);
}})();


function subtraction(first, second) {
    console.log(`Difference: ${Number(first) - Number(second)}`);
}
function division(first, second) {
    if(second != 0){
        let result = first/second
        console.log(`Quotient: ${result}`);
    }
    else{
        return 'Invalid';
    }
   
    
}
function addition(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += Number(arr[i])
      
    }
    console.log(`Sum: ${sum}`);
    
}

function multiplication(arr){
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= Number(arr[i])
        
      }
      
   console.log(`Product: ${product}`);
}



