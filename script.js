const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("Subject");
const mess = document.getElementById("message");

function sendemail() {
  const bodymessage = `Full Name : ${fullname.value} Email Address : ${email.value} Phone Number : ${phone.value} Subject : ${subject.value} Message : ${mess.value}<>br `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "enigmawatch68@gmail.com",
    Password: "C2872D5E975441FED5AF4A2039C915352209",
    To: "enigmawatch68@gmail.com",
    From: "enigmawatch68@gmail.com",
    Subject: "JAVASCRIPT MAIL ",
    Body: bodymessage
  }).then((message) => {
    if(message == "OK"){
        Swal.fire({
            title: "success!",
            text: "Your message successfully sent !",
            icon: "success"
          });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendemail();
});
