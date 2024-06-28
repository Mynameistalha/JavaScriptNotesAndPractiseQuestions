function change()
{
    
    
        // creating new element
        const newParagraph = document.createElement('p');

        newParagraph.innerText = "This is brand new";

        //access html element to add this new element 

        const a = document.querySelector(".hello");

        // a.append(newParagraph);  //adds at the end of node (inside)

        // a.prepend(newParagraph) //adds at the start of node (inside)

        a.before(newParagraph) //adds before the node (outside)

        // a.after(newParagraph) //adds after the node (outside)
    
}

function border(value)
{
    let a = document.querySelector("div");

    if(value=="add")
    {
        a.classList.add("round");
    }
    else{
        a.classList.remove("round");
    }

    
}


