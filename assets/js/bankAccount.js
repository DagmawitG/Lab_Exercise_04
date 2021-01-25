

depositAmount = "";
withdrawalAmount = "";
totalBalance = 1000;
       
function deposit (value){
    total = this.totalBalance + Number(value);
    console.log(  total);
}
function withdraw (value){
    if (this.totalBalance >  200 && value <= 800){
        total = this.totalBalance - value;
    }
    else{
        total = this.totalBalance;
    }
    console.log("Remaining amount : ${total}");
}
function balance (){
    console.log( this.totalBalance);
}

    //  BankAccount1= {
    //         total1 : 1000,
    //         accountNo1 : 1001,
     
    // }
    //  BankAccount2 = {
    //     total2 : 800,
    //     accountNo2 : 1002,
    // }
    // function transfer (){
        
    // }




(function(){
    user = prompt("Please choose the service you desire!\n 1. Deposit \n 2.Withdraw \n 3.Balance \n 4. Transfer ")
    if(user ==="1"){
        val = prompt("Enter the amount to be deposited")
        deposit.call('val');
        
    }
    else  if(user ==="2"){
        val = prompt("Enter the amount to be withdrawn")
        val = Number(val);
        withdraw.call(val);
    }
    else  if(user ==="3"){
        balance.call();
    }
    
    else{
        console.log("Enter a valid input!")
    }
})();