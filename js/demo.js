const userIcon = document.querySelector(".user");
const getUser = localStorage.getItem("email")


userIcon.addEventListener("click", function(e) {
    if(getUser) { 
        window.location = "profile.html"
    } else {
        window.location = "login.html"
    }
})
