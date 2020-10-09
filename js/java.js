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
        var url= window.location.pathname;
        if (typeof url !== 'undefined' && url)
        {
            document.location = "m_index.html";
        }
        else
        {
            document.location = "m_"+url.substring(url.lastIndexOf("/")+1);
        }
        
    }
}
function screenwidthdt()
{
    if (screen.width >= 699) 
    {
    var url= window.location.pathname;
    document.location = url.substring(url.lastIndexOf("/m_")+3);
    }
}