var fordDesc, merckDesc, kcsdDesc;
fordDesc = "ford description"
merckDesc = "merck description"
kcsdDesc = "kcsd description";

document.getElementById("btn-ford").addEventListener('click',function (){
    document.getElementById("jobDesc").innerHTML = fordDesc;
}); 

document.getElementById("btn-merck").addEventListener('click',function (){
    document.getElementById("jobDesc").innerHTML = merckDesc;
}); 

document.getElementById("btn-kcsd").addEventListener('click',function (){
    document.getElementById("jobDesc").innerHTML = kcsdDesc;
}); 