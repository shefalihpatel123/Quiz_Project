
var questionList= [
    {
        question : 'What year was the very first model of the iPhone released?',
        option : ['2006','2007','2008','2009'],
        answer : '2007'
    },
    {
        question : 'What was Twitter original name?',
        option : ['twttr','twitt','twitter','twits'],
        answer : 'twttr'
    },
    {
        question : 'Which email service is owned by Microsoft?',
        option : ['iCloudmail','Yahoomail','Protonmail','Hotmail'],
        answer : 'Hotmail'
    },
    {
        question : 'Who is often called the father of the computer?',
        option : ['Charles Babbage','Steve Jobs','Bill Gates','Richard Stallman'],
        answer : 'Charles Babbage'
    },
    {
        question : 'Google Chrome, Safari, Firefox, and Explorer are different types of what?',
        option : ['Software','Websties','Operating system','Web browsers'],
        answer : 'Web browsers'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quizContainer');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;


function display() {
    document.getElementById("questionsDisplay").style.display = "block";
    document.innerHTML = displayQuestion();
  }

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Question.'+(i+1)+' '+questionList[i].question;
    option0.innerHTML= questionList[i].option[0];
    option1.innerHTML= questionList[i].option[1];
    option2.innerHTML= questionList[i].option[2];
    option3.innerHTML= questionList[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+ questionList.length;
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
function calcScore(e){
    if(e.innerHTML===questionList[i].answer && score<questionList.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
}

function nextQuestion(){
    if(i<questionList.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionList.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

next.addEventListener('click',nextQuestion);

function restart(){
    location.reload();
}

function checkAnswer(){
    var questionList= document.getElementById('questionList');
    var answers= document.getElementById('answers');
    questionList.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionList.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionList[a].answer;
        answers.appendChild(list);
    }
}

