function sendMail(){
    let parms={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_3mckp6f', 'template_37u41hb', templateParams).then(alert("your message successfully sent!!!"))
}

