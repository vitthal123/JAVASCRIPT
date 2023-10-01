let readSync=require('readline-sync');
let userPreference;
let score=0;
let kuler=require('kuler')
let userName=readSync.question(kuler("Enter the Name : ",'#CFE70D'));




let leaderBoard=[
    {
        name: "Pritam",
        score:2
    },
    {
        name: "Ram",
        score:1
    },
    {
        name: "Ashwin",
        score:3
    }
]




let database={
    data:[
        {
            question:'Javascript is an _______ language?',
            option:{
                   A:"Object Oriented",
                   B:"Object Based",
                   C:"Procedural",
                   D:"Type Script"
            },
            CorrectAnswer:"A"

        },
        {
            question:"Which of the following methods is used to access HTML elements using Javascript?",
            option:{
               A:"getElementById()",
               B:"getElementByClassName()",
               C:"Both A and B",
               D:"None of these"
            },
            CorrectAnswer:"A"
        },
        {
            question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
            option:
            {
                A:"getElementById()",
                B:"getElementByClassName()",
                C:"Both A and B",
                D:"None of these"  
            },            
            CorrectAnswer:"B"
        }
    ]
}

function playGame(userAns,CorrectAns){
    if(userAns===CorrectAns){
        score++;
        console.log(kuler('Correct Answer','#0EB331'));
    }else{
        console.log(kuler('Incorrect Answer','#D53709'));
        console.log(kuler(`The correct Answer is ${CorrectAns}`,'#8E1905'));
    }
}

function orderUser(leaderBoard){
    let sortedOrder=leaderBoard.sort((a,b)=>b.score-a.score);
    return sortedOrder;
}


function ShowData(){
    for(let i=0;i<database.data.length;i++){
        console.log(`\nQ${i+1}. ${database.data[i].question}\n`)
        for(let key in database.data[i].option){
            console.log(`${key}.${database.data[i].option[key]}`)
        }
        userPreference=readSync.question("Enter your Answer :(A/B/C/D) ? ");
        let userAnswer=database.data[i].CorrectAnswer;
        playGame(userPreference,userAnswer);
    }
    leaderBoard.push({name:userName,score:score})
    let sortLeader=orderUser(leaderBoard);
    console.log(sortLeader);
}

ShowData()
// console.log(` Your Score is ${score}`)