//ACCESS HTML ELEMENT BY ID

const a = document.getElementById("demo");

console.log(a);
console.log(a.tagName);
console.log(a.innerText);
console.log(a.innerHTML);


//ACCESS HTML ELEMENTS BY CLASS NAME

const b = document.getElementsByClassName("c1");

console.log(b);

console.log(b[0].innerText);
console.log(b[1].innerText);
console.log(b[2].innerText);


//ACCESS HTML ELEMENTS BY TAG NAME

const c = document.getElementsByName("div")

console.log(c);

console.log(c[0].innerText);
console.log(c[1].innerText);
console.log(c[2].innerText);



//ACCESS HTML ELEMENTS BY QUERY SELECTOR (#ID/.CLASS/TAG)

const d = document.querySelector("#demo");
const e = document.querySelector(".c1");
const f = document.querySelector("div");

console.log(d);
console.log(e);
console.log(f);


//ACCESS HTML ELEMENTS BY QUERY SELECTOR ALL(.CLASS/TAG)

const g = document.querySelectorAll(".c1");
const h = document.querySelectorAll("div");

console.log(g);
console.log(g[0].innerText);
console.log(g[1].innerText);
console.log(g[2].innerText);


console.log(h);
console.log(h[0].innerText);
console.log(h[1].innerText);
console.log(h[2].innerText);