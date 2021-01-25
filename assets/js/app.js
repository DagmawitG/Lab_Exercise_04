let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi = function(weight,height) {
    let bmi = (weight / (height ** 2)).toFixed(2);
    if (bmi < 18.5){
        return `BMI:  ${bmi} Status : underweight`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        return `BMI: ${bmi} Status : normal or healthy weight`;
    }
    else if (bmi >= 25.0 && bmi <= 29.9){
        return `BMI:  ${bmi} Status : overweight`;
    }
    else {
        return `BMI: ${bmi} Status : obese`;
    }
    }
};
personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");

// let tempAge = personProfile.ageCalc(personProfile.birthYear);
(function(){
console.log("Here is your Profile ")
console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
console.log("Profession : " + personProfile.job);
console.log("Age : " + personProfile.tempAge + " " + "years old");
console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
console.log("Family Members");
familyMember.forEach(function(member, index) {
    console.log("Family Member  " + (index + 1) + " : " + member);
});
personProfile.weight = prompt("Your Weight in Kg  ? ");
    personProfile.height = prompt("Your Height in M  ? ");
    console.log(personProfile.calcBmi(Number(personProfile.weight), Number(personProfile.height)));

})

personProfile.familyMembers = new Array();
let numberOfFamily = prompt("Number of Family  ? ");
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}
console.log(
    personProfile.familyMember.forEach(i{
        console.log(`Family members: ${i}`);
        
    }));


   
(function() {

  
    

   
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    

   
})();





