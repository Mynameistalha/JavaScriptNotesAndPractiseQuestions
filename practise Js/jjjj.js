
const f=document.getElementById("form");
const user=document.getElementById("username");
const pass=document.getElementById("password");
const confirm=document.getElementById("password2");

f.addEventListener("submit",(e)=>
{
    e.preventDefault();

    if(validation())
    {
      
        f.submit();

    }
});

function validation()
{
    let isValid=true;

    const userValue=user.value.trim();
    const passValue=user.value.trim();
    const confirmValue=user.value.trim();




    if(userValue==='')
    {
        const e=document.getElementById("usernameError");
        e.innerText="Name is required"
        isValid=false;
    }
    else{
        const e=document.getElementById("usernameError");
        e.innerText=" ";
        isValid=true;

    }
    
    if(passValue==='')
    {
        const e=document.getElementById("passwordError");
        e.innerText="Password is required";
        isValid=false;
    }
    else if(passValue.lenght<8)
    {
        const e=document.getElementById("passwordError");
        e.innerText="Password is less than 8";
        isValid=false;
    }

    else{
        const e=document.getElementById("passwordError");
        e.innerText=" ";
        isValid=true;

    }
    
    if(confirmValue ==='')
    {
        const e=document.getElementById("password2Error");
        e.innerText=" confirm Password is required";
        isValid=false;
    }

    
    else if(passValue !==confirmValue)
    {
        const e=document.getElementById("password2Error");
        e.innerText="Password Does not match";
        isValid=false;
    }
    else{
        const e=document.getElementById("password2Error");
        e.innerText=" ";
        isValid=true;

    }
    return isValid;

}