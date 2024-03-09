var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
if(randomNumber1==randomNumber2){
    document.querySelector(".container1 h1").innerHTML="Match Tied";
}
else if(randomNumber1>randomNumber2){
    document.querySelector(".container1 h1").innerHTML = "Player 1 Win";
}
else{
    document.querySelector(".container1 h1").innerHTML = "Player 2 Win";
}
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

document.getElementById('reloadLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action of following the link
    location.reload(); // Reload the current page
});