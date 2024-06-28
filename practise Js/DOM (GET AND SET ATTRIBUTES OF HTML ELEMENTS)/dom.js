
function myfunction()
{
    const a = document.querySelector("#demo");

    if(a.getAttribute("class") == "hello")
    {
        a.setAttribute("class","ucp");
    }
    else{
        a.setAttribute("class","hello");
    }
}



function bulb(value)
{
    const a = document.querySelector("#light");

    if(value == "on")
    {
        a.setAttribute("src","images/on.jpg");
    }
    else{
        a.setAttribute("src","images/off.jpg");
    }
}


