// const click=document.getElementById("btn");
const b=document.getElementById("listItem");


b.addEventListener('click',(event)=>
{

    const a=event.target;
   
    if(a.tagName ==='LI')
    {
       const replaceItem=prompt("Enter an item for replace");

       if(replaceItem !== null)
       {
        a.textContent=replaceItem;
       }
    }
   



});