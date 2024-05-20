const user = document.querySelector(".Username")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const btn = document.querySelector("button")
const alert = document.querySelector(".alert")


btn.addEventListener('click', function(e) {
    e.preventDefault()
    if (user.value === "" || email.value === "" || password.value === "" ) {
        showAlert()
    } else 
    {
        localStorage.setItem('user', user.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        btn.innerHTML = "....Loading"
        setTimeout(() => {
            window.location = "login.html"
        }, 2000)
    }
})


function showAlert() {
    alert.classList.add("show")
    setTimeout( () => { 
        alert.classList.remove("show")
    }, 2000)
}
