window.alert("Making Money Transaction involing interest is NON PERMITTED IN ISLAM(I am a Muslim), This project is made for just  showing assignment. I Do not Support the Transaction Involing Interest In any form");
document.getElementById("intrate").value = 1;
function calculate(){

    var p = parseInt(document.getElementById("pamt").value);
    if(isNaN(p)) 
    {
        
        window.alert("Unexpect Principal Value")
        return;
    }
    if(p <= 0){
        window.alert("pricipal should be greater than 0")
        return;  
    }
    var i = parseInt(document.getElementById("intrate").value);
    if(isNaN(i)) 
    {
        window.alert("Unexpect Interest Rate Value")
        return;
    }
    if(i <= 0){
        window.alert("Interest should be greater than 0")
    }
    var t = parseInt(document.getElementById("year").value);
    var a =  p*i*t/100;
    
    //window.alert(a);
    document.getElementById("princ").innerHTML = p;
    document.getElementById("itrate").innerHTML = i;
    document.getElementById("ys").innerHTML = (new Date()).getFullYear()+t;
    document.getElementById("answer").innerHTML = a;
}
function slideronchange(){
    document.getElementById("intrate").value = document.getElementById("myRange").value; 
}