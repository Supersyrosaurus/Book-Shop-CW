window.onload = () => {
    //get last-4 digits and show it
    //using webapi - w3schools api storage can use local storage no need database
    const last4 = localStorage.getItem("last4digitscontvarname")
    document.getElementById("last4").innerHTML = "ur card xxxx xxxx xxxx " + last4 + " has been saved"
}