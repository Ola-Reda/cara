const email = document.querySelector(".email")
const password = document.querySelector(".password")
const btn = document.querySelector("button")
const alert = document.querySelector(".alert")
const emailValue = localStorage.getItem("email")
const passwordValue = localStorage.getItem("password")

console.log(localStorage.getItem("email"))

btn.addEventListener('click', function(e) {
    e.preventDefault()
    if (email.value === emailValue && password.value === passwordValue) {
        btn.innerHTML = "....Loading"
        setTimeout(() => {
            window.location = "index.html"
        }, 2000)
    }    
    else {
        if (email.value === "" || password.value === "") {
            showAlert('please, enter the data')
        } else {
            showAlert('enter vaild data')
        }
    }

})


function showAlert(massage) {
    alert.innerHTML = massage
    alert.classList.add("show")
    setTimeout( () => { 
        alert.classList.remove("show")
    }, 2000)
}