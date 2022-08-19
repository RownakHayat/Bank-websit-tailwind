// step-1: add click event handler whit the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email field
    // use value to get text from an input field
     const emailFeild = document.getElementById('user-email');
     const email = emailFeild.value;
    //  step-3: set id user get the value from the  element
    const paswordField = document.getElementById('user-password');
    const password = paswordField.value;
    // console.log(email, password);
    // not user.
    // step-4: verify email and password
   if(email == '@' && password !== ''){
    window.location.href = 'bank.html'
   }
   else{
    alert('invalid user')
   }
})