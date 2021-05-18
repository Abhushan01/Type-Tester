window.addEventListener('load',init)

//globals

//available levels
const levels={
    easy:5,
    medium:3,
    hard:1
}
let currentLevel= levels.easy;
let time=currentLevel;
let score=0;
let isPlaying;

//to change level
function change() {
    let mediummode=document.getElementById('mediuml');
    let difficultmode=document.getElementById('difficultl');

    if(difficultmode.checked){
        currentLevel= levels.hard;
        seconds.innerHTML=currentLevel;
        time=currentLevel; 
    }else if(mediummode.checked){
        currentLevel= levels.medium;
        seconds.innerHTML=currentLevel;
        time=currentLevel;
    }else{
        currentLevel= levels.easy;
        seconds.innerHTML=currentLevel;
        time=currentLevel;
    }
}


//dom elements
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');


//words-array
const words=[
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

//Initialize Game
function init(){
    console.log('aditya')
    //load word from array
    showWord(words);
    //start matching on input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown,1000);
    //check game status
    setInterval(checkStatus,50);

}

//start match
function startMatch(){
    if(matchWords()){
      isPlaying=true;
      time=currentLevel+1;
      showWord(words);
      wordInput.value='';
      score++;
    }
    //if score is -1, display zero
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }else{
        scoreDisplay.innerHTML=score;
    } 
}

//match currentword to wordinput
function matchWords(){  
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML="Correct!!!"
        return true;
    }else{
        message.innerHTML='';
        return false;
}

}

//pick & show random word
function showWord(words){
    //generate random array index
    const ranIndex=Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML=words[ranIndex];
}

//countdown timer
function countdown(){
    //make sure time is not run out
    if(time>0){
        //decrement time
        time--;
    }else if(time===0){
        //Game is over
        isPlaying=false;
    }
    //show time
    timeDisplay.innerHTML=time;
}

//check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game Over!!!'
        score=-1;
    }
}