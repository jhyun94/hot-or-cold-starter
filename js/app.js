$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	var answer = Math.floor((Math.random()*100) + 1);
	var yourGuess=null;
	var distance=null;
	var guessNum= 0;
	
	
	
	

		
	function getGuess() {
	$('form').submit(function(event) {
		event.preventDefault();
			game();
		
		
	});
		
	}	
	
	getGuess();
	
	function game() {
		yourGuess=parseInt($("#userGuess").val());
		distance= Math.abs(answer-yourGuess);
		guessNum++;
		if (yourGuess === answer) {
			$("#feedback").html("Correct!");
		}
		
		else if (distance >= 30) {
			$("#feedback").html("Ice Cold!");
		}
		
		else if (distance >= 20) {
			$("#feedback").html("cold!");
		}
		
		else if (distance >= 10) {
			$("#feedback").html("hot!");
		}
		
		else {
			$("#feedback").html("very hot!");
		}
		$("#count").html(guessNum);
		$("#guessList").append(
		'<li>' +
		yourGuess +
		'</li>'
		);
		
		
		
		
		
	}
	
	$(".new").click(function(){
		answer = Math.floor((Math.random()*100) + 1);
		distance=null;
		guessNum=0;
		$("#count").html(guessNum);
		$("#feedback").html("Make your guess!");
		$("#guessList").empty();
		
		
		
	});
	


	
	
	
	
	
});




