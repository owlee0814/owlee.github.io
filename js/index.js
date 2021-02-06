
fordDesc = "•    Building next gen vehicle infotainment HMI software.•  Using ReactJS, built interactive UI components.•    Troubleshoot phone application user experience issues"
ford = ["Jun '19 - Present", "Software Engineer", fordDesc]
merck = ["May '18 - Aug '18", "Software Engineer Intern", "merck description"]
kcsd = ["May '17 - May 19'", "IT Service Desk Supervisor", "kcsd description"]

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
