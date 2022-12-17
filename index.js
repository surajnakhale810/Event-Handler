let username = document.getElementById("username")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
let error = document.getElementById("error")
let error1 = document.getElementById("error1")

function loginFill(){
    let usernames = username.value 
    let passwords = password.value

/*
    if((usernames !== "") && usernames.includes("@") && usernames.includes(".")){
        if((passwords !== "") && (passwords > 8)){
           error1.innerText = "All Good To Go"
           error1.style.color = "green"
           error.innerText = ""
       
        }
    }
    
    else{
       error.innerText = "Make sure email is more than 3 characters and has @ and a . "
        error1.innerText = "make sure password is more than 8 characters"
        error1.style.color = "red"
        error.style.color = "red"
    }  */

    if((usernames.length < 3) || (usernames == "")){
        error.innerText = "Make sure email is more than 3 characters and has @ and a . "
        error.style.color = "red"
        
    }
    
    else if((usernames.length > 3) && (usernames.includes("@")) && (usernames.includes("."))){
        error.innerText = "" 
        
    }
    // else{
    //     error.innerText = ""
    // }

    // else if((usernames.length > 3) && (usernames.includes("@")) && (usernames.includes("."))){
    //     error.innerText = ""
    // }
     if((passwords.length < 8)||(passwords == "")){
        error1.innerText = "Make sure password is more than 8 characters"
        error1.style.color = "red"
        
    }
    else{
        error1.innerText = "" 
        
    }
    // else if(passwords.length > 8){
    //     error1.innerText = ""
    // }
     if((usernames.length > 3) && (usernames.includes("@")) && (usernames.includes("."))&&(passwords.length > 8)){
        error1.innerText = "All Good To Go"
        error1.style.color = "green"
        
    }
    
    // return false
}   
// submit.addEventListener('change',loginFill)
// submit.onchange = loginFill

function altCon(){
    confirm("Are You Sure")
    alert("Sucessful Signup!")
}
submit.onclick = altCon