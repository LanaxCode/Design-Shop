
const userEmail = document.getElementById("user_email")
const popUp = document.getElementById("popup_msg")
const newsForm = document.getElementById("newsletter_form")

popUp.style.display = "none";

function PopupOpen() {
    newsForm.style.display = "none";
    popUp.style.display = "block";

    console.log("Your email is", userEmail.value);
}

function PopupClose() {
    document.getElementById("popup_msg").style.display = "none";
    document.getElementById("newsletter_form").style.display = "block";
}