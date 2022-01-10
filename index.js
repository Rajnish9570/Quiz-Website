function add() {
    a= parseInt(document.getElementById('inputa').value);
    b= parseInt(document.getElementById('inputb').value);
    c=a+b;
    document.getElementById('plus').innerHTML=c;
}
function sub() {
    a= parseInt(document.getElementById('inputa').value);
    b= parseInt(document.getElementById('inputb').value);
    c=a-b;
    document.getElementById('minus').innerHTML=c;
}
function mul() {
    a= parseInt(document.getElementById('inputa').value);
    b= parseInt(document.getElementById('inputb').value);
    c=a*b;
    document.getElementById('guna').innerHTML=c;
}
function div() {
    a= parseInt(document.getElementById('inputa').value);
    b= parseInt(document.getElementById('inputb').value);
    c=a/b;
    document.getElementById('bhag').innerHTML=c;
}
function square() {
    x= parseInt(document.getElementById('inputc').value);
y=x*x
    document.getElementById('sq').innerHTML=y;
}
function cube() {
    x= parseInt(document.getElementById('inputc').value);
y=x*x*x
    document.getElementById('cu').innerHTML=y;
}
function sqroot() {
    x= parseInt(document.getElementById('inputc').value);
y=Math.sqrt(x);
    document.getElementById('sr').innerHTML=y;
}
function cuberoot() {
    x= parseInt(document.getElementById('inputc').value);
y=Math.cbrt(x)
    document.getElementById('cr').innerHTML=y;
}
function percent() {
    num1= parseInt(document.getElementById('inputd').value);
    num2= parseInt(document.getElementById('inpute').value);
    num3= num1/num2*100;
    document.getElementById('per').innerHTML=num3+"%";
}
function cgpa() {
    num4= parseInt(document.getElementById('inputf').value);
    num5= num4/9.5;
    document.getElementById('cg').innerHTML=num5+" CGPA";
}
