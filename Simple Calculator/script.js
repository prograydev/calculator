let screenOutput = document.getElementById("screen");

function display(num){
    screenOutput.value += num; 
}

function reset(){
    screenOutput.value = document.getElementById("screen").value = " ";
}

function del(){
    screenOutput.value = document.getElementById("screen").value.slice(0,-1);
}

function equal(){
    try{
        screenOutput.value = eval(screenOutput.value);
    }
    catch(err){
        alert("Syntax Error!");
    }
}