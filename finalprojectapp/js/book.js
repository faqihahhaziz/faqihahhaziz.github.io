let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value 

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userFlavours = document.getElementById("userFlavours")
    let userFlavoursVal = userFlavours.value

    let userFlavoursQuan = document.getElementById("userFlavoursQuan")
    let userFlavoursQuanVal = userFlavoursQuan.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    BookNow(userNameVal, userEmailVal, userFlavoursVal, userFlavoursQuanVal, userRemarksVal)

    function BookNow(userName, userEmail, userFlavours, userFlavoursQuan, userRemarks){
        let url = 'https://api.sheety.co/2f77a16cc9c98f370a1827c18b5c8d80/icecreamApp/bookings';
        let body = {
            booking: {
                name : userName,
                email : userEmail,
                flavours : userFlavours,
                quantity : userFlavoursQuan,
                remarks : userRemarks
            }
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then(json => {
            console.log(json.booking);
            alert(json.booking.name +   "added in the list!")
        });
    }


})