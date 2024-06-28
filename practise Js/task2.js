

//  const button=document.getElementById("addBtn");
//  const addParagraph=document.getElementById("addPara");

// button.addEventListener("click",function()
// {
//    const newText=document.createElement("p");
   
//    newText.textContent="I am talha khan";

//    addParagraph.appendChild(newText);

// });
// // button.addEventListener("click",Change());

let image = document.getElementById("img1");
let summerButton = document.getElementById("summer");
let winterButton = document.getElementById("winter");

summerButton.addEventListener("onmouseover", function() {
   image.src = "babar.jpeg";
});

winterButton.addEventListener("onmouseover", function() {
   image.src = "saheen.jpeg";
});

 a=5;
 b=2;
 console.log("a++=",a++);
 console.log("a=",a);

 console.log("++a",++a);
 console.log("a=",a);