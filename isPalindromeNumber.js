

function isPalindromeNumber(number){
	
	let reverse = 0;
	let count = number;
	
	
	while (count > 0){
		reverse = reverse * 10 +  count %10;
		count = count / 10;
		count = Math.floor(count);
	}
		if(reverse == number){
			return true
		}

		else{
			return false
		}
	
}

 
 result = isPalindromeNumber(123)
 console.log(result);