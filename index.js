const form = document.getElementById('notifyme-form');
const alertBox = document.getElementById('alert');
const submitBtn = document.getElementById('submit-btn');
const spinner = document.getElementById('spinner');
const btnText = submitBtn.querySelector('.btn-text');
const scriptURL = "https://script.google.com/macros/s/AKfycbyf880Uy09orBA4o5Mcie7t0E8ymqG_bGY4qmxet3Ncht3lr85x356iAK6D6U14MaMO/exec";

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
