let a=Math.floor(Math.random()*100);
let count=10;
 
function createtag(){
    document.getElementById('numoftimes').innerHTML=count;
    let b=document.getElementById('number1');
    count--;
    if(b.value<a && count>0){
        document.getElementById('result').innerHTML = "Go with larger number 😇";
    }
    else if(b.value>a && count>0){
        document.getElementById('result').innerHTML = "Go with smaller number 😇";
    }
    else if(b.value==a && count>0){
       window.location.href="./gamewon.html";
    }
    else if(count == 0){
        window.location.href="./gameloss.html";
    }
}

function createbutton(){
    location.reload();
}