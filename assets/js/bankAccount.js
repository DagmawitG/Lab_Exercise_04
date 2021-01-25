(function() {
    let Account1 = {
        total: 500,
        withdrawalamount: "",
        depositamount: "",
        withdrawal: function(amt) {
            value = (this.total >= 300 && a <= (this.total- 100)) ? this.total - amt: this.total;
            return `The current amount is ${Number(value}`;
        },
        deposit: function(amt) {
            value = Number(amt) + this.total;
            return `Current total amount : ${value}`;
        }
    
    }
    let user = prompt(`withdraw or deposit?`);
    if (user.toLowerCase() === 'withdraw'){
       