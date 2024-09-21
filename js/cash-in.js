document.getElementById('cash-in-btn').addEventListener('click', function () {
    const pin = document.getElementById('pin').value;
    if (pin === '1234') {
        const mainBalance = document.getElementById('account-balance').innerText;
        const newMainBalance = parseFloat(mainBalance);

        const cashInInput = document.getElementById('cash-in-input').value;
        const newcashInInput = parseFloat(cashInInput);

        const newBalance = newMainBalance + newcashInInput;

        document.getElementById('account-balance').innerText = newBalance;


        // js for showing transaction history
        const p = document.createElement('p');
        p.innerText = (`Money Added: $${newcashInInput} New Balance: $${newBalance}`);
        p.className = 'text-center bg-green-500 font-semibold text-white w-3/6 text-xl mx-auto';
        document.getElementById('transaction-history-form').appendChild(p);

    } else {
        alert('Something went wrong, please try again!');
    }
})