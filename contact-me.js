// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");
const jobTitle = document.getElementById("job-title");
const companyWebsite = document.getElementById("company-website");
const codingLanguage = document.getElementById("coding-language");
const message = document.getElementById("message");
const jobOpFields = document.getElementById("job-opportunity-fields");
const talkCodeFields = document.getElementById("talk-code-fields");

let valid = false;

const validLength = (input, min, errorMessage) => {
    const errorElement = input.parentElement.querySelector(".error");
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        errorElement.textContent = errorMessage;
        return false;
    }
};

const validateEmail = (emailField, errorMessage) => {
    const errorElement = emailField.parentElement.querySelector(".error");
    const re = /\w+@\w+\.\w+/;
    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    } else {
        emailField.parentElement.classList.add("invalid");
        errorElement.textContent = errorMessage;
        return false;
    }
};
const validateURL = (urlField) => {
    const re = /https?\:\/\/.+\..+/;
    if (re.test(urlField.value.trim())) {
        url.parentElement.classList.remove("invalid");
        return true;
    } else {
        urlField.parentElement.classList.add("invalid");
        return false;
    }
};

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == "job-opportunity") {
        // build and append to the DOM an input field for number of employees
        jobOpFields.classList.remove("hidden");
        talkCodeFields.classList.add("hidden");

    } else if (selectedValue == "talk-code") {
        // build and append to the DOM an input field for Operating System
        talkCodeFields.classList.remove("hidden");
        jobOpFields.classList.add("hidden");
    }
};

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    handleSelect(select);
    if (
        validLength(firstName, 3, "First Name is required and must be at least 3 characters") &&
        validLength(lastName, 3, "Last Name is required and must be at least 3 characters") &&
        validateEmail(email, "Email is required") &&
        validLength(message, 10, "Message submition is required and should be at least 10 characters") &&
        validLength(jobTitle, 3, "Job title is required and must be at least 3 characters in length") &&
        validateURL(urlField)
     ) {
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
    }
});