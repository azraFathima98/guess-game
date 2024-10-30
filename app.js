let y = (Math.floor((Math.random() * 10) + 1));
let guess = 1;
let attemptsNumber=0;
const maxAttempts=4;


console.log(y);


function Guess() {
    

    let x = document.getElementById("Number").value;
    attemptsNumber++;
   
    console.log(x);
    do{
    if(x==y){
   
        let lbloutput = document.getElementById("lbloutput");
        lbloutput.innerHTML = ("Game over!The correct number was " +  x);
        break;
    }else if (x > y){
        guess++;
        let lbloutput = document.getElementById("lbloutput");
        lbloutput.innerHTML = ("The number is high");
        break;
    }else{
        guess++;
        let lbloutput = document.getElementById("lbloutput");
        lbloutput.innerHTML = ("The number is low");
        break;
       

    }
}while(x!=y && ++attemptsNumber < maxAttempts);
    if(attemptsNumber == maxAttempts){
        let lbloutput = document.getElementById("lbloutput");
    lbloutput.innerHTML = ("You loose! The number was "+y);   

    }
}






