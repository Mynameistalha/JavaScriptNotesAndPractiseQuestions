
let arrr=[20,90,94,96,89];


function square(arr)
{
    console.log(arr*arr);
    
}

arr.forEach(square); //call back 


// use map method for print array

arr.map((val)=>
{
    console.log(val);

});

let newArr=arr.map((val)=>
{
    return val;
})
console.log(newArr);

//filter method

let newArrr=arr.filter((val)=>
{
    return val%2===0;

});
console.log(newArrr);



let score=arr.filter((val)=>
{
    return val>90;
});
console.log(score);

   let n=prompt("Enter The number");
   let arr=[];

   for(let i=1;i<=n;i++)
   {
    arr[i-1]=i;
   }
   console.log(arr);

   let sum=arr.reduce((pre,curr)=>
{
    return pre+curr;

});
console.log(" sum",sum);

let product=arr.reduce((pre,curr)=>
{
    return pre*curr;

})
console.log("product",product);