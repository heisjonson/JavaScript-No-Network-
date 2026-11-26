function reverseInteger(number){
	
	if (number >0){
	let reverse = 0;
	let reverseDigit = 0;
	
	while (number>0) {
		reverseDigit = number % 10
		reverse = reverse * 10 + reverseDigit
		number = Math.floor(number/10)
	}
	}
	else {
	    reverseDigit = (number % 10)
	
	    reverse = reverseDigit
	    number = Math.floor(number /-10)
	    
	    while (number>0) {
			reverseDigit = number % 10
			reverse = reverse * 10 - reverseDigit
			number = Math.floor(number/10)
	}
	}
		return reverse
}
result = reverseInteger(-1234);
console.log(result);