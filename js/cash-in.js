document.getElementById('cash-in-btn').addEventListener('click', function(){
    const pin = document.getElementById('pin').value;
    if(pin === '1234'){
        const mainBalance = document.getElementById('account-balance').innerText;
        const newMainBalance = parseFloat(mainBalance);

        const cashInInput = document.getElementById('cash-in-input').value;
        const newcashInInput = parseFloat(cashInInput);

        const newBalance = newMainBalance + newcashInInput;

        document.getElementById('account-balance').innerText = newBalance;
    } else{
        alert('Something went wrong, please try again!')
    }
})