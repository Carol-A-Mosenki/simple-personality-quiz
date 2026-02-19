function quizComplete(){

    let earlyCount = 0
    let nightCount = 0

    // QUESTION 1

    if(document.getElementById("earlyButton1").checked){
        earlyCount++;
    }
    else if(document.getElementById("nightButton1").checked){
        nightCount++;
    }


    // QUESTION 2
    

    if(document.getElementById("earlyButton2").checked){
        earlyCount++;
    }
    else if(document.getElementById("nightButton2").checked){
        nightCount++;
    }


    // QUESTION 3


    if(document.getElementById("earlyButton3").checked){
        earlyCount++;
    }
    else if(document.getElementById("nightButton3").checked){
        nightCount++;
    }

    // QUESTION 4


    if(document.getElementById("earlyButton4").checked){
        earlyCount++;
    }
    else if(document.getElementById("nightButton4").checked){
        nightCount++;
    }

    // QUESTION 5


    if(document.getElementById("earlyButton5").checked){
        earlyCount++;
    }
    else if(document.getElementById("nightButton5").checked){
        nightCount++;
    }

    if(earlyCount > nightCount){
        alert("Congrats! 🥳 You are an EARLY BIRD! 🦜☀️");
    } else {
        alert("Congrats! 🥳 You are a NIGHT OWL! 🦉🌙")
    }


}
