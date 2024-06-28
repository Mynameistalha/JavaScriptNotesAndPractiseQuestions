   
    const f = document.getElementById("myForm");
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    f.addEventListener("submit", (e) => {
    
       
        e.preventDefault(); // Prevent the form from submitting initially


        if (validateForm()) {
            f.submit();
            window.location.href="dashboard.html"; // Submit the form if validation passes
        }
    });
function validateForm() {
    let isValid = true;

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        const e = document.getElementById("usernameError");
        e.innerText = "Name is required";
        isValid = false;
    }
    else {
        const e = document.getElementById("usernameError");
        e.innerText = " ";
        isValid = true;
    }

    if (passwordValue === '') {
        const e = document.getElementById("passwordError");
        e.innerText = "Password is required";
        isValid = false;
    }
    else if(passwordValue.length < 8)
    {
        const e = document.getElementById("passwordError");
        e.innerText = "Password is less than 8";
        isValid = false;
    }
    else{
        const e = document.getElementById("passwordError");
        e.innerText = " ";
        isValid = true;
    }
    
    if (password2Value === '') {
        const e = document.getElementById("password2Error");
        e.innerText = "Confirm Password is required";
        isValid = false;
    }
    else if(passwordValue != password2Value)
    {
        const e = document.getElementById("password2Error");
        e.innerText = "Password and Confirm Password must be same";
        isValid = false;

    }
    else{
        const e = document.getElementById("password2Error");
        e.innerText = " ";
        isValid = true;
    }
   
    return isValid;
}