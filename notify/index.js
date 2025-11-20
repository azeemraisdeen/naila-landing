const form = document.getElementById('notifyme-form');
const alertBox = document.getElementById('alert');
const submitBtn = document.getElementById('submit-btn');
const spinner = document.getElementById('spinner');
const btnText = submitBtn.querySelector('.btn-text');
const scriptURL = "https://script.google.com/macros/s/AKfycby9e2ht--7k6yViYk5R9VqMy0WdWIe5EVRNPkZnR8A24_OW1d1czxviVcDm6aZICJ2W/exec";

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    spinner.style.display = 'inline-block';
    submitBtn.disabled = true;
    btnText.textContent = 'Submitting...';

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        form.reset();
        if (data.result === "success") {
            showAlert(data.message, 'success');
        } else {
            showAlert(data.message, 'error');
        }
        console.log('Success!', data);
    })
    .catch(error => {
        showAlert("Something went wrong. Please try again.", 'error');
        console.error('Error!', error.message);
    })
    .finally(() => {
        spinner.style.display = 'none';
        submitBtn.disabled = false;
        btnText.textContent = 'Notify Me';
    });
});

function showAlert(message, type) {
    alertBox.className = `alert ${type}`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}

const mobileBtn = document.querySelector('.mobile-menu-btn');
const navWrapper = document.querySelector('.nav-wrapper');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    navWrapper.classList.toggle('active');
});