// Toggle auth BTNs
(function () {
    let authBTNs = document.getElementById("authBTNs")
    let profileBTN = document.getElementById("profileBTN")
    if (JSON.parse(localStorage.getItem("isLogged")) !== null) {
        authBTNs.style.display = 'none'
        profileBTN.style.display = 'block'
    } else {
        authBTNs.style.display = 'block'
        profileBTN.style.display = 'none'
    }
})()