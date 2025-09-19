// Future JavaScript functionality can be added here.

// const form = document.getElementById("contactForm");
//     const formMessage = document.getElementById("formMessage");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault(); // prevent real submission

//         // Show success message
//         formMessage.textContent = "✅ Thank you! Your message has been sent successfully.";
//         formMessage.style.color = "green";

//         // Clear the form
//         form.reset();
// });

function sendEmail() {
    Email.send({
      SecureToken : "sfac ixpj jxal hfcz", // safer than username+password
        To : "jnkqubela@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : `
            <b>Name:</b> ${document.getElementById("name").value}<br>
            <b>Email:</b> ${document.getElementById("email").value}<br>
            <b>Website:</b> ${document.getElementById("website").value}<br>
            <b>Message:</b> ${document.getElementById("message").value}
        `
        }).then(
        message => alert("✅ Message Sent Successfully!")
        ).catch(
        error => alert("❌ Error sending message: " + error)
        );
}

