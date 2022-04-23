let user = prompt("Enter Your Name.")
let M = "male"
let F = "female"
let G = prompt("Enter Your Gender.");if ( G.length == 0 ){alert("Invaled Gender,Your Welcoming Messege will be without title")}
let age = prompt("Enter Your Age"); if (age <= 0) {alert("incorrect age value")}
let W = prompt("There is a welcoming messege,if Yo want to Skip type CONFIRM")
if(W == "CONFIRM") {
} else if (G == M) {
    alert(" Hi "+" Mr."+user+".......How are you today?")
}else if (G == F) {
    alert(" Hi "+" Mrs."+user+".......How are you today?")
}else alert(" Hi "+user+".......How are you today?"+"....:):)")