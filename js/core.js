document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("submitBtn").disabled = true;

    emailjs.init("abROfutZMlrsgxxqX");

    emailjs.sendForm("service_ln0795g", "template_jldw1rh", this).then(
      function (response) {
        // alert("Message envoyé avec succès");
        document.getElementById("confirmation-message").style.display = "block";
        document.getElementById("confirmation-message").innerText =
          "Message sent successfully!";
        location.reload();
      },
      function (error) {
        // alert("Erreur d'envoi : " + error);
        location.reload();
      }
    );
  });
