// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");

const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");

// check if an input meets a length requirement 
let valid = false;

const validLength = (input, min) => {
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove("invalid");
        return true;
        alert("Length of given name does not meet the required")
    } else {
        input.parentElement.classList.add("invalid");
        return false;
    }
};

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        return true;
    } else {
        emailField.parentElement.classList.add("invalid");
        return false;
    }
};

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == "business") {
        // build and append to the DOM an input field for number of employees
        employees.parentElement.classList.remove("hidden");
        os.parentElement.classList.add("hidden");
    } else if (selectedValue == "technical") {
        // build and append to the DOM an input field for Operating System
        os.parentElement.classList.remove("hidden");
        employees.parentElement.classList.add("hidden");
    }
};

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    handleSelect(select);
    if (validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)) {
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
    }
});