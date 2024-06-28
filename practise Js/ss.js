// const addBtn=document.getElementById("btn");
// const lisst=document.getElementById("listItem");



// addBtn.addEventListener('click',()=>
// {  
//     const item1=document.createElement("li");
//     item1.textContent=prompt("Enter a new Element");

//     lisst.appendChild(item1);

// });
const button=document.getElementById("additem");
const items=document.getElementById("list");


button.addEventListener('click' ,()=>{
    const newItem=document.createElement("li");
    newItem.textContent=prompt("Enter the value");
    items.appendchild(newItem);

});