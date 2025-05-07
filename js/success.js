window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.onload = () => {
    //get last-4 digits and show it
    //using webapi - w3schools api storage can use local storage no need database
    const last4 = localStorage.getItem("last4")
    document.getElementById("last4").innerHTML = "ur card xxxx xxxx xxxx " + last4 + " has been saved"
}