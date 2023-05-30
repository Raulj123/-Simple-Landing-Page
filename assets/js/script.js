function openMenu(element) {
  element.classList.toggle("change");
  const dropDownMenu = document.querySelector(".dropdown-container");
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inquire-section");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const company = document.getElementById("company").value.trim();
    const role = document.getElementById("role").value.trim();
    const comments = document.getElementById("comments").value.trim();

    // Validation if user enters blank space
    if (
      firstName.trim() === "" ||
      lastName.trim() == "" ||
      company.trim() == "" ||
      role.trim() == "" ||
      comments.trim() == ""
    ) {
      alert("Please fill out all fields.");
      return;
    }
    // Handle form submission
    handleFormSubmission(firstName, lastName, company, role, comments);
  });
});

function handleFormSubmission(firstName, lastName, company, role, comments) {
  const successMessage = `Submission successful! Thank you, ${firstName} ${lastName}, from ${company}, for your role as ${role}. Your comments: ${comments}`;
  alert(successMessage);
}
