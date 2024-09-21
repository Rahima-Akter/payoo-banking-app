// shows cash in form
const cashInForm = document.getElementById('cash-in').addEventListener('click', function () {
    document.getElementById('cash-in-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history-form').classList.add('hidden');
    document.getElementById('latest-payment').classList.add('hidden');

});

// shows cash out form
const cashOutForm = document.getElementById('cash-out').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('cash-in-form').classList.add('hidden');
    document.getElementById('transaction-history-form').classList.add('hidden');
    document.getElementById('latest-payment').classList.add('hidden');
});

// shows transaction history form
const transHistory = document.getElementById('transaction-history').addEventListener('click', function () {
    document.getElementById('transaction-history-form').classList.remove('hidden');
    document.getElementById('cash-in-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('latest-payment').classList.add('hidden');
});