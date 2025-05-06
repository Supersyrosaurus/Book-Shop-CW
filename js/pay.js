
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

document.getElementById("send").addEventListener("click", e)

function f() {
    // alert('this is woking')
    console.error('this is working')
}

function e() {
    
    alert('working')
    // e.preventdefault()
    //get input 5%
    alert('working2')
    const CC = document.getElementById("cc").value
    const month = document.getElementById("month").value
    const year = document.getElementById("year").value
    const CVV = document.getElementById('cvv').value
    //validate user input 10%
    const CCpatt = /^5[1-5][0-9]{14}$/
    //psuedo: if CC !match pattern
    const CVVpatt = /^[0-9]{3,4}$/
    
    if (CC.match(CCpatt) == null)
    {
        alert("errorMsg(Your Credit Card Number is Wrong)")
        // location.reload()

    }

    //do same with CVV, exp date
    if (CVV.match(CVVpatt) == null) 
    {
        alert("errorMsg(Your Security Code Number is Wrong)")
    }

    // create a today date (today = ...)
    today = new Date()
    todayM = today.getMonth() + 1
    todayY = today.getFullYear()
    // alert(String(todayM))
    // alert(String(todayY))
    //if today month is greater and today year is greater than exp date then card expired
    if ((todayY > year) || ((todayM > month) && (todayY == year)))
    {
        alert("errorMsg(Your Credit Card is Expired)")
    }

    
    //send to API 15%
    //lec 9 pp
    //fetch
    //check .then response.status === 200  (successful) return response.json())
    //.then alert()
    //save last 4 no. of CC no. in local storage (w3schools storage api)
    //const last 4 = CC % 10000
    //localStorage.setItem("qqq")
    //
    //location.href = "success.html"
    // .catch etc

    //2 js files - 1 for processing 1 for success (show last 4 digits of CC no.)

}