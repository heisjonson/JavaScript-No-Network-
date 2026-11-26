

function isPowerOfTwo(number){
	return false
	for (count = 1; count <= number; count++){
		result = count ** 2;
		if(result === number){
			return true
		}

		
	}
}

 
 result = isPowerOfTwo(16)
 console.log(result);