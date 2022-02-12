const form= document.getElementById('form');
const userName= document.getElementById('username');
const email= document.getElementById('Email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const userNameValue= userName.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const passsword2Value= password2.value.trim();
    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;

    if(userNameValue === ''){
        //show error 
        //add error class
        setErrorFor(userName, 'Username cannot be blank!');
    }else {
        //add success class
        setSuccessFor(userName);
    };

    if(!emailValue){
        setErrorFor(email, 'Email cannot be blank!');
    }else if(regex.test(emailValue)==false){
        setErrorFor(email, 'Please enter the email correctly');
    }else{
        setSuccessFor(email)
    };

    if(!passwordValue){
        setErrorFor(password, 'Please enter your password')
    }else if(passwordValue.length<8){
        setErrorFor(password, 'Your password is too short')
    }else{
        setSuccessFor(password)
    };
    if(!passsword2Value){
        setErrorFor(password2, 'Please repeat your password')
    }else if(passsword2Value!==passwordValue){
        setErrorFor(password2, 'your passwords do not match')
    }else{
        setSuccessFor(password2)
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText= message;
    formControl.className= 'form-control error';
 };

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

