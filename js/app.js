 user = prompt("Please Enter Your Name")

 let M = "male"
 let F = "female"
 let G = prompt("Enter Your Gender.");if ( G.length == 0 ){alert("Invaled Value,Your Welcoming Messege will be without title")}

 let age = prompt("Enter Your Age");
 if (age <= 0) {alert("incorrect age value")}
 let W = prompt("There is a welcoming messege,if Yo want to Skip type CONFIRM")
 if(W == "CONFIRM") {
 } else if (G == M) {alert(" Hi "+" Mr-."+user+".......How are you today?")
 }else if (G == F) {alert(" Hi "+" Mrs-"+user+".......How are you today?")
 }else alert(" Hi "+user+".......How are you today?"+"....:):)")


 function askAgain (answer1) {
    let answerUpper =answer1.toUpperCase();
    while (answerUpper != "YES" && answerUpper != "NO" && answerUpper != "Y" && answerUpper != "N") {
        answer1 = prompt("Please answer with Yes/Y or No/N");
        answerUpper= answer1.toUpperCase ();
    }
    return answer1;
}
let answers = [];


let answer = prompt("Do you like games?\n Please answer with Yes/Y or No/N");
answers.push(askAgain(answer));



answer = prompt("Do you know Python laungue?\n Please answer with Yes/Y or No/N");
answers.push(askAgain(answer));


answer = prompt(" Do you like my page?\n Please answer with Yes/Y or No/N");
answers.push(askAgain(answer));

console.log(answers)


        
    
