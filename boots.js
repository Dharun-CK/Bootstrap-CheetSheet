const form = document.querySelector('#form')
const fname=document.querySelector('#fname')
const email=document.querySelector('#email')
const pass=document.querySelector('#pass')
const cpass=document.querySelector('#cpass')
const position=document.querySelector('#position')
const dept=document.querySelector('#dept')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const fnamev=fname.Value.trim();
    const emailv=email.value.trim();
    const passv=pass.value.trim();
    const cpassv=cpass.value.trim();
    const positionv=position.value.trim();
    const deptv=dept.value.trim();
 if(fnamev===''){
    setError(fname,'Username is Required')
 }
 else{
    setSuccess('fname')
 }
 if(emailv===' '){
    setError(email,'Email is Required')
 }
 else if(!validateEmail('emailv')){
    setError(email,'Please Enter a Valid Email')
 }
 else{
    setSuccess('email')
 }
if(passv===' '){
    setError(pass,'Password is Required')
}
else if(passv.length<8){
    setError(pass,'Password must be atleast 8 characters long')
}
else {
    setSuccess(pass)
}
if(cpassv===' '){
    setError(cpass,'Confirm Password is Required')
}
else if(cpassvv!==passv){
    setError(cpass,'Password does not Match')
}
else {
    setSuccess('cpass')
}

    

}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=" ";
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


