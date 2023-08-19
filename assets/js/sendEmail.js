function sendMail(contactForm){
    emailjs.send("gmail","resume",{
        from_name: contactForm.name.value, //name parameter from input tag
        message: contactForm.message.value,
        reply_to: contactForm.email.value,
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}