function gcd(a, b) { 
	for (let temp = b; b !== 0;) { 
		b = a % b; 
		a = temp; 
		temp = b; 
	} 
	return a; 
} 

function lcmFunction(a, b) { 
	const gcdValue = gcd(a, b); 
	return (a * b) / gcdValue; 
} 

let num1 = 12; 
let num2 = 18; 
let lcm = lcmFunction(num1, num2); 
console.log("LCM of given numbers is :", lcm);
