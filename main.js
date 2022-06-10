
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "2007") {
		correct++;
	}

	if (question2 == "Hotmail") {
		correct++;
	}

	if (question3 == "Web browsers") {
		correct++;
	}
	
	if (question4 == "ctrl c") {
		correct++;
	}

	if (question5 == "kilobyte") {
		correct++;
	}

	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];


	}
	function myAnswer1() {
		var question1 =document.getElementById("question1");
		console.log(question1);
		if (question1 == "2007") {
			document.getElementById("panel").style.display = "block";
		}
	  }
	  function myAnswer2() {
		document.getElementById("panel1").style.display = "block";
	  }