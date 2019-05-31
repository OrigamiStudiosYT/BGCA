/* ******************************************************************************
    *
    *   Program: Java.js
    *
    *   Description: Handles the Javascript for the page
    *
    *   Author:  Jeremy Patrick, Andrew Lortie, Connor Hurley
    *
    *   Date: 5/31/2019
    *
    *   History: 5/29/2019 Creation
    *
    ****************************************************************************** */

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
window.onscroll = function() {dotHandler()};

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        document.getElementById("myBtn").style.display = "block";
    } 
    else 
    {
        document.getElementById("myBtn").style.display = "none";
    }
}

/* ******************************************************************************
    *
    *   Module: topFunction
    *
    *   Description: When the user clicks on the button, scroll to the top of the document
    *
    *   Author:  Andrew Lortie
    *
    *   Date: 5/31/2019
    *
    *   History: 5/29/2019 Creation
    *
    ****************************************************************************** */
function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}   

/* ******************************************************************************
    *
    *   Module: myFunction
    *
    *   Description: Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
    *
    *   Author:  Andrew Lortie
    *
    *   Date: 5/31/2019
    *
    *   History: 5/29/2019 Creation
    *
    ****************************************************************************** */
function myFunction() 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") 
    {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "topnav";
    }
}

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
function dotHandler()
    {
        var top = document.getElementById("top");
        var middle = document.getElementById("middle");
        var bottom = document.getElementById("bottom");
        var topButton = document.getElementById("topButton");
        var middleButton = document.getElementById("middleButton");
        var bottomButton = document.getElementById("bottomButton");
        if ($(top).visible(true))
        {
            $(middleButton).removeClass('activeDot');
            $(bottomButton).removeClass('activeDot');
            $(topButton).addClass('activeDot');

        }
        else if ($(middle).visible())
        {
            $(topButton).removeClass('activeDot');
            $(bottomButton).removeClass('activeDot');
            $(middleButton).addClass('activeDot');

        }
        else if ($(bottom).visible())
        {
            $(middleButton).removeClass('activeDot');
            $(topButton).removeClass('activeDot');
            $(bottomButton).addClass('activeDot');

        }
    }
