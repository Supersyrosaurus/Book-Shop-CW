document.getElementById("send").addEventListener("click", (e)=>) {
    e.preventdefault()
    //get input 5%
    const CC = document.getElementById("CC").value
    const month = document.getElementById("month").value
    //validate user input 10%
    const patt = /^5[1-5][0-9]{14}$/
    //psuedo: if CC !match pattern
    {
        alert("errorMsg(Your Credit Card Number is Wrong)")
        location.reload()

    }
    
    //do same with CVV, exp date
    // create a today date (today = ...) 
    todayM = today.getMonth()
    todayY = today.getYear()
    //if today month is greater and today year is greater than exp date then card expired
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