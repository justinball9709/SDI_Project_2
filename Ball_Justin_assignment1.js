//alert("JavaScript works!");

//Author: Justin Ball
// January 4, 2012
// Project 1 Assignment
// Deliverable 1
// Larry In The Wireless Industry

//Initial Variables
var Rep = "Larry",
	company = "Verizon",
	Smart = "Smartphones",
	money = 1,
	total = 2,
	ex = 'Larry\'s favorite phone is the iphone',
	sellalot = true,
	less = false
;
//INITIAL OUTPUT
//String Output
console.log(Rep + " is employed for a wireless company.");
//String with escape
console.log(ex + " he loves it!");
//Number Output
console.log("If " + Rep + " sells " + total + " phones he will make some money. ");
//Boolean Output
console.log("Larry's boss asked him if he can sell phones ? ", Rep, "said", sellalot);

if (sellalot === true)
	if (total + money === 3) {
	console.log("I'm going to make more money selling 3 phones. ");
	}else {
	console.log("This sucks I'm not making money.");
}
else (sellalot === false)
	if (company === "Verizon"){
	console.log("I haven't sold " + company + " phones before but I will learn.");
	}else{
	console.log("I have to put hard work in but I'm determined." );
};

var string = function (cases) {
	console.log(cases + "Hoper we have a good amount of cases " + group + "amount");
};