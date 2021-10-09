function validateEmail() {
    const mail = document.getElementById("email").value
    const pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (!mail.match(pattern)) {
        document.getElementById("warningMess").innerHTML = "Oops! Please check your email"
    } else {
        document.getElementById("warningMess").innerHTML = "Thank you for subscribing!"
        document.getElementById("warningMess").style.color = "green"
    }
}