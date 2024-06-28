
// function color()
// {
//     let a=document.querySelector('#u')
//     {
//         if(a.getAttribute('class')=='UCP')
//         {
//             a.setAttribute('class','uu');
//         }
//         else{
//             a.setAttribute('class','UCP');
//         }
//     }
// }

// function changes(value)
// {
//     const b =document.querySelector("#light")
//     {
//         if(value=="on")
//         {
//          b.setAttribute("src","images/on.jpg");
//         }else
//         {
//             b.setAttribute("src","images/off.jpg");
//         }
//     }

// }

let image=document.getElementById("img");
let button=document.getElementById("clickBtn");

button.addEventListener('click',function()
{    
    image.src="babar.jpeg";
    image.style.border=" 2px solid black";

    
});
