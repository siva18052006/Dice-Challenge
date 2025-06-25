var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var set="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",set);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var set1="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",set1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins! 🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw !";
}


