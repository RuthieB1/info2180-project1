/* Add your JavaScript to this file */
window.onload= ()=>{
    let subscribeButton = document.querySelector("section.newsletter form button.btn");
    let email = document.querySelector("section.newsletter form input[type=\"email\"]");
    email.setAttribute("placeholder", "Email address");
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let message = document.querySelector("section.newsletter div.message");
    subscribeButton.onclick = (event)=>{
        event.preventDefault();
        if (email.value.length != 0 && emailRegex.test(email.value.toLowerCase())){
            message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        }
        else{
            message.innerHTML = "Please enter a valid email address."
        }
    }
}