let image=document.getElementById("img");
let button=document.getElementById("clickBtn");

button.addEventListener('click',function()
{    
    image.src="babar.jpeg";
    image.style.border=" 2px solid black";

    
});

image.addEventListener("mouseover",()=>
{
   image.src="foojii.jpeg";
   image.style.width="20%";
});
image.addEventListener("mouseout",()=>
{
    image.src="saheen.jpeg";
    
})