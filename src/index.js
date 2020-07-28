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

var welcomeSection = $('.welcome-section'),
enterButton = welcomeSection.find('.enter-button');
var content = $('.content');

setTimeout(function() {
    welcomeSection.removeClass('content-hidden');
}, 500);

enterButton.on('click', function(e) {
    e.preventDefault();
    welcomeSection.addClass('content-hidden').fadeOut();
    
    setTimeout(function() {
        content.fadeIn();
    }, 1000);
});