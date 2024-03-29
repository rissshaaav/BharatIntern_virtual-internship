document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform validation if needed
    if (confirmPassword === password) {
      var formData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      };

      // Send the data to the server
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          alert("registration successfull\n");
          document.getElementById("registrationForm").reset();
        })
        .catch((error) => {
          console.error("Error during registration:", error);
        });
    } else{
      alert("passwords do not match, please refill");
      document.getElementById("registrationForm").reset();
    }
  });
