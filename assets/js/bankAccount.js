

depositAmount = "";
withdrawalAmount = "";
totalBalance = 1000;
       
function deposit (value){
    total = this.totalBalance + Number(value);
    console.log("Total Amount: " + Number(total) + " ETB");
}
function withdraw (value){
    if (this.totalBalance >  200 && value <= 800){
        total = this.totalBalance - value;
    }
    else{
        total = this.totalBalance;
    }
    return ("Total Amount: " + Number(total) + " ETB");
}
function balance (){
    console.log("Total Amount:" + Number( this.totalBalance));
}
function transfer (value){
    res = withdraw(parseInt(value));
    console.log('You have transferred ' + Number(value) + " ETB. " + "Your Balance is" + Number(total) + " ETB.");
}

    //  BankAccount1= {
    //         total1 : 1000,
    //         accountNo1 : 1001,
     
    // }
    //  BankAccount2 = {
    //     total2 : 800,
    //     accountNo2 : 1002,
    // }


    // function transfer (value){
        
    //     value1 = BankAccount1.total1;
    //     value2 = BankAccount2.total2;
    //     this.totalBalance = parseInt(value1);
    //     let res1 = withdraw(parseInt(value));
       
    //     console.log("Bankaccount1-" + res1);
    // }




(function(){
    user = prompt("Please choose the service you desire!\n 1. Deposit \n 2.Withdraw \n 3.Balance \n 4. Transfer ")
    if(user ==="1"){
        val = prompt("Enter the amount to be deposited")
        res = deposit(parseInt(val));
        
    }
    else  if(user ==="2"){
        val = prompt("Enter the amount to be withdrawn")
        val = Number(val);
        res = withdraw(parseInt(val));
        console.log(res);
    }
    else  if(user ==="3"){
        res = balance();
    }
    else if(user==="4"){
        val = prompt("Enter the amount to be transferred");
        res = transfer(val);
       
    }
    
    else{
        console.log("Enter a valid input!")
    }
})();