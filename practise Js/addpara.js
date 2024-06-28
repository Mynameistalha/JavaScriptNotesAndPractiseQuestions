
function change()
{

    // const bb=document.getElementById("para");

    const a=document.createElement('p');

    // a.innerText="Hii It/s Alii";
    a.textContent=prompt("Enter para");

    const b=document.querySelector(".Hlo");
    // a.append(b);
    

    b.before(a);
    // const newParagraph = document.createElement('p');

    // newParagraph.innerText = "This is brand new";

    // //access html element to add this new element 

    // const a = document.getElementById("Hlo");

    // // a.append(newParagraph);  //adds at the end of node (inside)

    // // a.prepend(newParagraph) //adds at the start of node (inside)

    // a.before(newParagraph)

};
function border(value)
{
    let a = document.querySelector("div")

    if(value=="add")
    {
        a.classList.add('round');
    }
    else{
        a.classList.remove('round');
    }
    
}