if(document.addEventListener)
{
	document.addEventListener("DOMContentLoaded", function()
	{
		loaded();
	});
}
else if(document.attachEvent)
{
	document.attachEvent("onreadystatechange", function()
	{
		loaded();
	});
}

function loaded()
{
	setInterval(loop, 600);
}

function loop()
{
    var top = document.getElementById("top");
    var middle = document.getElementById("middle");
    var bottom = document.getElementById("bottom");
    var topButton = document.getElementById("topButton");
    var middleButton = document.getElementById("middleButton");
    var bottomButton = document.getElementById("bottomButton");
    if ($(top).visible())
    {
        $(middleButton).removeClass('activeDot');
        $(bottomButton).removeClass('activeDot');
        $(topButton).addClass('activeDot');
        alert("top")

    }
    else if ($(middle).visible())
    {
        $(topButton).removeClass('activeDot');
        $(bottomButton).removeClass('activeDot');
        $(middleButton).addClass('activeDot');
        alert("mid")

    }
    else if ($(bottom).visible())
    {
        $(middleButton).removeClass('activeDot');
        $(topButton).removeClass('activeDot');
        $(bottomButton).addClass('activeDot');
        alert("bot")

    }
    else
    {
        console.log("No anchor")
    }
}