/* ******************************************************************************
    *
    *   Module: dotHandler
    *
    *   Description: Controls the dynamic color change of the dots in index.
    *
    *   Author:  Jeremy Patrick, Connor Hurley
    *
    *   Date: 5/31/2019
    *
    *   History: 5/31/2019 Creation
    *
    ****************************************************************************** */
function dotHandler() {
    var top = document.getElementById("top");
    var middle = document.getElementById("middle");
    var bottom = document.getElementById("bottom");
    var topButton = document.getElementById("topButton");
    var middleButton = document.getElementById("middleButton");
    var bottomButton = document.getElementById("bottomButton");
    if ($(top).visible(true)) {
        $(middleButton).removeClass('activeDot');
        $(bottomButton).removeClass('activeDot');
        $(topButton).addClass('activeDot');

    }
    else if ($(middle).visible()) {
        $(topButton).removeClass('activeDot');
        $(bottomButton).removeClass('activeDot');
        $(middleButton).addClass('activeDot');

    }
    else if ($(bottom).visible()) {
        $(middleButton).removeClass('activeDot');
        $(topButton).removeClass('activeDot');
        $(bottomButton).addClass('activeDot');

    }
}
/* ******************************************************************************
 *
 *   Module: scrollFunction
 *
 *   Description: When the user scrolls down 20px from the top of the document, show the button
 *
 *   Author:  Andrew Lortie
 *
 *   Date: 5/31/2019
 *
 *   History: 5/29/2019 Creation
 *
 ****************************************************************************** */
window.onscroll = function () { dotHandler() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}