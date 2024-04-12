     // Get the login button element
     var loginBtn = document.getElementById("login_btn");

     // Get the form container element
     var formContainer = document.getElementById("form_container");

     // Add click event listener to the login button
     loginBtn.addEventListener("click", function() {
         // Toggle the display of the form container
         if (formContainer.style.display === "none") {
             formContainer.style.display = "block";
         } else {
             formContainer.style.display = "none";
         }
     });
     function closeForm() {
         var formContainer = document.getElementById("form_container");
         formContainer.style.display = "none";
     }
 