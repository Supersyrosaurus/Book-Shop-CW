
//Checks if user scrolls on page to enable sticky header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

//Enables sidebar functionality
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

//Disables sidebar functionality
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//Changes user page location to payment page
function payPage() {
    location.href = 'pay.html'
}