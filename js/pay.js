
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


window.onload = () => {

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    document.getElementById('send').addEventListener('click', (e) =>
    {
        e.preventDefault();

        const cc = document.getElementById('cc').value
        const month = parseInt( document.getElementById('month').value)
        const year = parseInt(document.getElementById('year').value)
        const cvv = document.getElementById('cvv').value

        const ccPatt = /^5[1-5][0-9]{14}$/
        const cvvPatt = /^[0-9]{3,4}$/

        today = new Date()
        todayM = today.getMonth() + 1
        todayY = today.getFullYear()

        // Card Inofrmation Validation

        if (cc.match(ccPatt) == null) {
            alert('incorrect cc')
            return
        }

        if ((todayY > year) || ((todayM > month) && (todayY == year))){
            alert('incorrect date')
            return
        }

        if (cvv.match(cvvPatt) == null){
            alert('incorrect cvv')
            return
        }

        const url = 'https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard'
        const data = {
            "master_card": cc,
            "exp_year": year,
            "exp_month": month,
            "cvv_code": cvv


        };

        //Posting data

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        .then((response) => {
            if (response.status === 201 || response.status === 200) {
                return response.json();
            }
            else if (response.status === 400) {
                throw 'Bad data was sent to the server';
            }
            else {
                throw 'Unexpected error:' + String(response.status);

            }
        })
    
    
        .then((resJson) => {
            alert(resJson["message"])
            const cc4 = cc.slice(-4)
            localStorage.setItem('last4', cc4)


            location.href = 'success.html'
        })
    
        .catch((error) => {
            alert(error);
        })

        
    })

};





