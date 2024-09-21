document.getElementById('cash-out-btn').addEventListener('click', function () {
    const pin = document.getElementById('cash-out-pin').value;
    if (pin === '1234') {
        // converts main account balance into a number
        const mainBalance = document.getElementById('account-balance').innerText;
        const newMainBalance = parseFloat(mainBalance);

        // converts input balance into a number
        const cashOutInput = document.getElementById('cash-out-input').value;
        const newcashOutInput = parseFloat(cashOutInput);

        // deducts the given amount from the account
        const newBalance = newMainBalance - newcashOutInput;

        // updates the current balance to the main balance
        document.getElementById('account-balance').innerText = newBalance;

    } else{
        alert('Something went wrong, please try again!');
    }
})