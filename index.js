function redirectToWhatsApp() {
    var whatsappNumber = "+918805208407";
    var whatsappUrl = "https://wa.me/" + whatsappNumber;
    window.open(whatsappUrl, "_blank");
}

function adjustFontSize() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 480) {
        document.querySelectorAll('h1, p, button').forEach(function(element) {
            element.style.fontSize = '4vw';
        });
    } else if (viewportWidth <= 768) {
        document.querySelectorAll('h1, p, button').forEach(function(element) {
            element.style.fontSize = '3vw';
        });
    } else {
        document.querySelectorAll('h1, p, button').forEach(function(element) {
            element.style.fontSize = '2vw';
        });
    }
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();
