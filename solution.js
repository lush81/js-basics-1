function squaresOfMax(a, b, c) {
  // Write a function that takes three numbers and returns
  // sum of squares of two largest
  
	if (a<=b && a<=c){
		var max1 = b;
		var max2 = c;
		var maxSquare = max1*max1 + max2*max2;
		
		return maxSquare;
	}else {
		max1 = a;
	} 
    
	if (b>=c){
		var max2 = b;
	}else {
		var max2 = c;
	}
 var maxSquare = max1*max1 + max2*max2;
  
 return maxSquare;
}

function drawTriangle() {
  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  
 var a="";
  for (var i = 0; i<=6; i++){
      a += "#";
	  console.log (a);
	  
  }
}


function fizzBuzz() {
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
 for (var i = 1; i <= 100; i++){
	var dividedByThree = i%3;
	var dividedByFive = i%5;
  
	if(dividedByThree===0 && dividedByFive === 0){
		console.log ("FizzBuzz");
	}else if(dividedByThree===0 && dividedByFive!=0){
		console.log ("Fizz");
	}else if(dividedByThree != 0 && dividedByFive===0){
		console.log ("Buzz");
	}else{
		console.log (i);
	}
 }
}

function chessBoard(size) {
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.
		var grid="#";
        var space = " ";
        var res ="";
        var newline = "\n";
		
		if (size!=0){

			for(var row =1; row<=size; row++){ 
           
				if(row%2===0){               		 // проверяем четность строк

					for (var element = 1; element <= size; element++){    // для четных строк
                    	if(element%2===0){  			 // проверяем четность элемента
							res=res+space;
						}else{
							res=res+grid;
						}
						
						if(element===size && row!=size){
					        res=res+newline;
						}
					}
				}else{
					for (var element = 1; element <= size; element++){  // для нечетных строк
                   		if (element%2===0){
							res=res+grid;
						}else{
							res=res+space;
						}

						if(element===size && row!=size){
                        res=res+newline;}
					}	
				}

			}
        }		 
	return res;

   
}
		
  

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
