
var gender = prompt("Enter your gender")
if(gender === "male"){
    document.write("<h1>" + "Good Morning Sir." + "</h1>");
    alert("Good Morning Sir.");
}
else if(gender === "female"){
    document.write("<h1>" + "Good Morning Ma'am." + "</h1>");
    alert("Good Morning Ma'am.");
}
else{
    alert("Please enter correct gender Hint! (male or female)")
}
