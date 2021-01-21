var firstName; 
var lastName; 
var age; 
var job;
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");
//Age variable for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

tempAge = parseInt(age);
// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}

console.log("Is Eligible to Vote : " + isEligibleToVote);

//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;

numberOfFamily = prompt("Number of Family  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}

console.log("Family Members ");
//Displaying the family member with foreach
familyMember.forEach(function(member) {
   console.log("Family Member  " + (index + 1) + " : " + member);
});

var birthYear;          //Changing the var age to birth Year

//Some changes 
let tempAge = ageCalc(birthYear);
birthYear = prompt("Enter Your Birth Year");

console.log("Age : " + tempAge + " " + "years old");

//age calculator function
function ageCalc(birthYear)
{
    return new Date().getFullYear() - birthYear;

}
var weight;
var Height
let calcBmi =  function(weight,Height) {
    

}
