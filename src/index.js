
ford = ["Jun '19 - Present", "Software Engineer", "ford description"]
merck = ["May '18 - Aug '18", "Software Engineer Intern", "merck description"]
kcsd = ["May '17 - May 19'", "IT Service Desk Supervisor", "kcsd description"]

document.getElementById("btn-ford").addEventListener('click',function (){
    document.getElementById("jobTerm").innerHTML = ford[0];
    document.getElementById("jobName").innerHTML = ford[1];
    document.getElementById("jobDesc").innerHTML = ford[2];
}); 

document.getElementById("btn-merck").addEventListener('click',function (){
    document.getElementById("jobTerm").innerHTML = merck[0];
    document.getElementById("jobName").innerHTML = merck[1];
    document.getElementById("jobDesc").innerHTML = merck[2];
}); 

document.getElementById("btn-kcsd").addEventListener('click',function (){
    document.getElementById("jobTerm").innerHTML = kcsd[0];
    document.getElementById("jobName").innerHTML = kcsd[1];
    document.getElementById("jobDesc").innerHTML = kcsd[2];
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

$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > 500) {
        $('body').css('background', "#000");
        $('#titleEmployment').css('color', "#000");
        $('#titleDF').css('color', "#fff");
    }
    else{
        $('#titleEmployment').css('color', "#178f5d");
        $('body').css('background', "#fff");
        $('#titleDF').css('color', "#d44e8f");
    }

});