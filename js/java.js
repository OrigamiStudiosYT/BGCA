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
    *   Function: copyRight
    *
    *   Description: Makes a copyright mark and tells the time since the website
    *                was last updated
    *
    *   Author:   Andrew Lortie
    *
    *   Date: 6/1/2020                                                          
    *                                                                            
    *   History: 6/1/2020 Creation  
    *
    ****************************************************************************** 
*/

function copyRight() 
{
    var lastModDate = document.lastModified;
    var lastModDate = lastModDate.substring(0, 10);

    // @ts-ignore
    displayCopyRight.innerHTML = "<span style='font-size:80%; color: black;'> Contact Jenn Aldworth at <br> <a href='tel:1-413-610-0194'>(413) 610-0194</a> <br> <a href='mailto:jaldworth@bgcb.org'>jaldworth@bgcb.org</a> <br> P.O. Box 815, Ludlow, MA 01056 <br/> This website was last modified " + lastModDate + ".</span>";
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
        x.className = "navbar";
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
/* ******************************************************************************
    *
    *   Module: Mobile switching 
    *
    *   Description: When the user is on mobile this switches them to the mobile verison
    *
    *   Author:  Andrew Lortie
    *
    *   Date: 6/20/2020
    *
    *   History: 6/20/2020 Creation
    *
    ****************************************************************************** */
   function screenwidth()
   {
        if (screen.width <= 699) 
        {
            document.location = "m_index.html";
        }
    }