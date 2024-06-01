let res=document.getElementById("display");

function clean(){
    res.value="";
}
function DEL(){
    res.value=res.value.slice(0,-1);
}
function calculate(input){
    res.value+=input;
}
function equal(){
    res.value=eval(res.value);
}