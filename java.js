// When the user scrolls down 20px from the top of the document, show the button
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}   

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
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

// Following code obtained from Connor Hurley
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
