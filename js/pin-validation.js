
    // if (!mobileNumber || !pin) {
    //     alert('Please fill in all fields.');
    //     return;
    // }

    document.getElementById('login-btn').addEventListener('click', function (event) {
        event.preventDefault();
        const pin = document.getElementById('pin').value;

        if (pin === '1234') {
            window.location.href = 'https://rahima-akter.github.io/payoo-banking-app/payoo-home.html';
        } else {
            alert('something went wrong, please try again!')
        }
    });