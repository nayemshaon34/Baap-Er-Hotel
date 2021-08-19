// deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
    //  depo output box
    const previousDepoText = document.getElementById('total-deposit');
    const totalDepoText = previousDepoText.innerText;
    const totalDepo = parseFloat(totalDepoText);
    // depo input
    const depoInputText = document.getElementById('deposit-amount');
    const NewDepoInputText = depoInputText.value;
    const NewdepoInput = parseFloat(NewDepoInputText);
    // clear
    depoInputText.value = null;
    
    //sum of deposit 
    const newDepoTotal = parseFloat(NewdepoInput+totalDepo);

    // shown in depo output
    previousDepoText.innerText = newDepoTotal;

    // shown in balance output
    const totalBalance = document.getElementById('total-amount');
    const previousBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const totalAmount = previousBalance + NewdepoInput;
    totalBalance.innerText = parseFloat(totalAmount);
});

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function (){
    // withdraw input
    const previousWithdraw = document.getElementById('withdraw-amount');
    const inputWithdrawText = previousWithdraw.value;
    const inputWithdraw = parseFloat(inputWithdrawText);
    // clear
    previousWithdraw.value = null;

    // withdraw output box
    const previousTotalWithdraw = document.getElementById('total-withdraw');
    const withdrawText = previousTotalWithdraw.innerText;
    const withdraw = parseFloat(withdrawText);
    
    // sum of withdraw output
     const total = withdraw+inputWithdraw;
    // shown in withdraw output
    previousTotalWithdraw.innerText = total;

    // show in balance output
    const previousTotalAmount = document.getElementById('total-amount'); 
    const previousTotalAmountText = previousTotalAmount.innerText;
    const totalAmount = parseFloat(previousTotalAmountText);
    const remainingAmount = totalAmount - inputWithdraw;
    previousTotalAmount.innerText = remainingAmount; 
});
