const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authention(username,password)
    if(authenticated){
        window.location.href = "admin.html"
    }else(
        alert("Wrong password")
    )
})

//function for checking username and password

function authention(username,password){
    if(username === "admin" && password === "password"){
        return true
    }else{
        return false
    }
}