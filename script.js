const quizDB = [
    {
        question: "What is the full form of HTML?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        ans: "ans2"
    },
    {
        question: "awrhawrhWhat is the full form of HTML?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        ans: "ans3"
    },
    {
        question: "jdtrjdrttjWhat is the full form of HTML?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        ans: "ans4"
    },
    {
        question: "xfngxntfgWhat is the full form of HTML?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;   
    };

    questionCount += 1;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
   
    else{
    clearInterval(update);
    mcqpage.style.display="none";
    scorepage.style.display="block";
    showScore.innerHTML =`<img src="abstract8.png" class="scoreimg"><div class="bx"><div class="bxborder"><h3> You scored ${score}/${quizDB.length} </h3></div></div><div class="better">
    <h1 class="not">Not satisfied with your score?</h1>
    <p class="headtext">You got less score than you expected? Want to improve yourself? Then come join us. Join our community and learn with everyone. Get your monthly subscription today with many good services.</p>
    <div class="monthly"><div class="logo"><img src="logo1.png" class="logo1"><p class="basic">BASIC MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 1 Month</p><p class="subtxt">Your subscription will end after 31 days for Rs 499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Basic Membership:</p><ul><li>Get access to video lectures from top proffessors</li><li>Get PDF notes from top students</li><li>Get access to chatroom with other students</li></ul></div></div></div>
    <div class="months"><div class="logo"><img src="logo2.png" class="logo2"><p class="basic">GOLD MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 4 Month</p><p class="subtxt">Your subscription will end after 124 days for Rs 1,499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Gold Membership:</p><ul><li>Get all benefits of Basic membership</li><li>Get access to live video lectures</li><li>Get personal mentorship</li><li>Ask your doubt anytime with access to chat box</li></ul></div><div class="ulti">Ultimate</div></div></div>
</div>`;
    }
});

function end(){

    mcqpage.style.display="none";
    scorepage.style.display="block";
    showScore.innerHTML =`<img src="abstract8.png" class="scoreimg"><div class="bx"><div class="bxborder"><h3> You scored ${score}/${quizDB.length} </h3></div></div><div class="better">
    <h1 class="not">Not satisfied with your score?</h1>
    <p class="headtext">You got less score than you expected? Want to improve yourself? Then come join us. Join our community and learn with everyone. Get your monthly subscription today with many good services.</p>
    <div class="monthly"><div class="logo"><img src="logo1.png" class="logo1"><p class="basic">BASIC MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 1 Month</p><p class="subtxt">Your subscription will end after 31 days for Rs 499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Basic Membership:</p><ul><li>Get access to video lectures from top proffessors</li><li>Get PDF notes from top students</li><li>Get access to chatroom with other students</li></ul></div></div></div>
    <div class="months"><div class="logo"><img src="logo2.png" class="logo2"><p class="basic">GOLD MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 4 Month</p><p class="subtxt">Your subscription will end after 124 days for Rs 1,499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Gold Membership:</p><ul><li>Get all benefits of Basic membership</li><li>Get access to live video lectures</li><li>Get personal mentorship</li><li>Ask your doubt anytime with access to chat box</li></ul></div><div class="ulti">Ultimate</div></div></div>
</div>`; 
    clearInterval(update);
};



var c = 10;

function timer() {

    c = c - 1;
    if (c<10) {
        timer001.innerHTML = c;
    }

    if (c < 1) {
        window.clearInterval(update);
        if (confirm("times UP !!")){ mcqpage.style.display="none";
        scorepage.style.display="block";
        showScore.innerHTML =`<img src="abstract8.png" class="scoreimg"><div class="bx"><div class="bxborder"><h3> You scored ${score}/${quizDB.length} </h3></div></div><div class="better">
        <h1 class="not">Not satisfied with your score?</h1>
        <p class="headtext">You got less score than you expected? Want to improve yourself? Then come join us. Join our community and learn with everyone. Get your monthly subscription today with many good services.</p>
        <div class="monthly"><div class="logo"><img src="logo1.png" class="logo1"><p class="basic">BASIC MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 1 Month</p><p class="subtxt">Your subscription will end after 31 days for Rs 499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Basic Membership:</p><ul><li>Get access to video lectures from top proffessors</li><li>Get PDF notes from top students</li><li>Get access to chatroom with other students</li></ul></div></div></div>
        <div class="months"><div class="logo"><img src="logo2.png" class="logo2"><p class="basic">GOLD MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 4 Month</p><p class="subtxt">Your subscription will end after 124 days for Rs 1,499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Gold Membership:</p><ul><li>Get all benefits of Basic membership</li><li>Get access to live video lectures</li><li>Get personal mentorship</li><li>Ask your doubt anytime with access to chat box</li></ul></div><div class="ulti">Ultimate</div></div></div>
    </div>`;}
        else { mcqpage.style.display="none";
        scorepage.style.display="block";
        showScore.innerHTML =`<img src="abstract8.png" class="scoreimg"><div class="bx"><div class="bxborder"><h3> You scored ${score}/${quizDB.length} </h3></div></div><div class="better">
        <h1 class="not">Not satisfied with your score?</h1>
        <p class="headtext">You got less score than you expected? Want to improve yourself? Then come join us. Join our community and learn with everyone. Get your monthly subscription today with many good services.</p>
        <div class="monthly"><div class="logo"><img src="logo1.png" class="logo1"><p class="basic">BASIC MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 1 Month</p><p class="subtxt">Your subscription will end after 31 days for Rs 499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Basic Membership:</p><ul><li>Get access to video lectures from top proffessors</li><li>Get PDF notes from top students</li><li>Get access to chatroom with other students</li></ul></div></div></div>
        <div class="months"><div class="logo"><img src="logo2.png" class="logo2"><p class="basic">GOLD MEMBERSHIP</p><div class="seprate"></div><p class="subarea">For 4 Month</p><p class="subtxt">Your subscription will end after 124 days for Rs 1,499</p><div class="subbtn"><p class="join">Join Now</p></div><div class="basictxt"><p>Benefits of Gold Membership:</p><ul><li>Get all benefits of Basic membership</li><li>Get access to live video lectures</li><li>Get personal mentorship</li><li>Ask your doubt anytime with access to chat box</li></ul></div><div class="ulti">Ultimate</div></div></div>
    </div>`;}
    }


}

update = setInterval("timer()", 1000);

function previous(){
    if (questionCount>0){
        questionCount -= 1;
        deselectAll();
        loadQuestion();
    }
}

function one(){
    questionCount = 0;
    deselectAll();
    loadQuestion();
}

function two(){
    questionCount = 1;
    deselectAll();
    loadQuestion();
}

function three(){
    questionCount = 2;
    deselectAll();
    loadQuestion();
}

function four(){
    questionCount = 3;
    deselectAll();
    loadQuestion();
}