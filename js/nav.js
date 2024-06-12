const openNav = document.querySelector(".open")
const closeNav = document.querySelector(".close")
const navs = document.querySelector('.navs')


//open and close navbar
openNav.addEventListener("click", function() {
    navs.style.transform = "translateX(0px)"
})
closeNav.addEventListener("click", function() {
    navs.style.transform = "translateX(100%)"
})


const links = document.querySelectorAll("nav ul a")
console.log(links)



links.forEach(link => {
    link.addEventListener("click", () => {
        link.classList.add("active")
        console.log("ollol")
    })
    
})