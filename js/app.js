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


 let D = prompt("Now please The Awnser following questions,Keep your answers Yes/No please.");


 let yesNo = ["", "" , ""];
 while  (yesNo[0] === "" && yesNo[1] === "" && yesNo[2] === "" ) {
    yesNo = [prompt ("Are you student?"),prompt ("Do you like videgames?"),prompt ("Honestly,Do you like my work?")];
     var ans = "Invalid"
     alert ("Invalid,please answer the questions")}

 for (let i = 0; i < yesNo.length; i++) {
 console.log(yesNo[i]);
 }


        
    
