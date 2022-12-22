let username = document.getElementById("username")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
let error = document.getElementById("error")
let error1 = document.getElementById("error1")
let sucess = document.getElementById("sucess")

function loginFill(){
    let usernames = username.value 
    let passwords = password.value
    
 if((usernames.length > 3) && (usernames.includes("@")) && (usernames.includes("."))&&(passwords.length > 8)){
        error.innerText = ""
        error1.innerText = ""
        sucess.innerText = "All Good To Go"
        sucess.style.color = "green"
        return true 
    }
    else{
        error.innerText = "Make sure email is more than 3 characters and has @ and a . "
        error.style.color = "red"

        error1.innerText = "Make sure password is more than 8 characters"
        error1.style.color = "red"
        return false
    }
    
    // return false
}   
// submit.addEventListener('change',loginFill)
// submit.onchange = loginFill

function altCon(){
    let validate = loginFill()
    
    if(validate == true){
  let confirmation = confirm("are you sure, you don't have another chance")
  if(confirmation == true){
    alert("Sucessful Signup!")
  }
  else{
    location.reload()
  }
    }
}
submit.onclick = altCon