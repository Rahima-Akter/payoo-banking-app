
    // if (!mobileNumber || !pin) {
    //     alert('Please fill in all fields.');
    //     return;
    // }

    document.getElementById('login-btn').addEventListener('click', function (event) {
        event.preventDefault();
        const pin = document.getElementById('pin').value;

        if (pin === '1234') {
            window.location.href = 'http://127.0.0.1:5500/payoo-home.html';
        } else {
            alert('something went wrong, please try again!')
        }
    });