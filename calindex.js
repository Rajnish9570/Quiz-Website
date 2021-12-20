function add(){
    const a= parseInt(document.getElementById("num1").value);
    const b= parseInt(document.getElementById("num2").value);
    const c= a+b;
    document.getElementById("result").innerHTML= '{+} ='+ ' ' + c;
}
function sub(){
    const a= parseInt(document.getElementById("num1").value);
    const b= parseInt(document.getElementById("num2").value);
    const c= a-b;
    document.getElementById("result").innerHTML= '{&#8722;} ='+ ' ' + c;
}

function multiply(){
    const a= parseInt(document.getElementById("num1").value);
    const b= parseInt(document.getElementById("num2").value);
    const c= a*b;
    document.getElementById("result").innerHTML= '{&times;} ='+ ' ' + c;
}
function divide(){
    const a= parseInt(document.getElementById("num1").value);
    const b= parseInt(document.getElementById("num2").value);
    const c= a/b;
    document.getElementById("result").innerHTML= '{&#247;} ='+ ' ' + c;
}

function power(){
    const a= parseInt(document.getElementById("num3").value);
    
    const c= a*a;
    document.getElementById("result").innerHTML= "Square of"+ " "+a+" "+ " " + " ="+" " +c;
}

function root(){
    const a= parseInt(document.getElementById("num3").value);
    
    const c= Math.sqrt(a);
    document.getElementById("result").innerHTML= "Sq-root of"+ " "+a+" "+ " " + " ="+" " +c;
}

