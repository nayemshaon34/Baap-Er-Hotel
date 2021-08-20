function getInputAmount(idName){
    const inputText = document.getElementById(idName);
    const NewInputText = inputText.value;
    const NewdInput = parseFloat(NewInputText);
    // clear
    inputText.value = null;
    return NewdInput;
}
function getOutputAmount(idName,amount){
    const previousText = document.getElementById(idName);
    const totalText = previousText.innerText;
    const total = parseFloat(totalText);
    //sum of deposit 
    const newTotal = parseFloat(amount+total);

    // shown in depo output
    previousText.innerText = newTotal;
}
function getCurrentBalance(){
    const totalBalance = document.getElementById('total-amount');
    const previousBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}
function updateAmount(addOn,amount){
    const totalBalance = document.getElementById('total-amount');
    const previousBalance = getCurrentBalance();
    if(addOn == true){
        const totalAmount = previousBalance + amount;
        totalBalance.innerText = parseFloat(totalAmount);
    }
    else{
        const remainingAmount = previousBalance - amount;
        totalBalance.innerText = remainingAmount; 
    }
}
// deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
    const NewdepoInput = getInputAmount('deposit-amount');
    if(NewdepoInput>0){
        getOutputAmount('total-deposit',NewdepoInput);
        updateAmount(true,NewdepoInput);
    }
});
// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function (){
    const totalBalance = getCurrentBalance();
    const inputWithdraw = getInputAmount('withdraw-amount');   
    if(inputWithdraw>0 && inputWithdraw<totalBalance){
        getOutputAmount('total-withdraw',inputWithdraw);
        updateAmount(false,inputWithdraw);
    }
});
