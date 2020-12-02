const readlineSync = require('readline-sync')

const log = console.log
const clear = console.clear

const name = readlineSync.question("What is your name ? ")

log()
log("Welcome " + name + " to 'Do you know Purva'" )


var questions = [
  {
    question: "What is my last name?",
    answer: "Sheth",
  },
  {
    question: "Where do I stay?",
    answer: "Pune",
  },
  {
    question: "What was the topic of my talk on 15th Nov ?",
    answer: "Git",
  }
]

function askQuestion(q){
  log()
  var ans = readlineSync.question(q.question)
  if(ans.toLowerCase()==q.answer.toLowerCase()){
    log("Correct!")
    return 1
  }
    
  log("Worng! the answer was ", q.answer)
  return 0

}

function play(questions){
  var score = 0
  var n = questions.length
  for(var i = 0;i<n;i++){
    score += askQuestion(questions[i])
    log("Score ",score)
  }
log('Final score is ' + score + "/3" )
}

play(questions)

