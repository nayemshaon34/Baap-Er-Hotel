document.getElementById('info-btn').addEventListener('click',function(){
    const email = document.getElementById('mail-info');
    const pass = document.getElementById('pass-info');
    if(email.value == 'mail' && pass.value == 'secret'){
        
        window.location.href = "banking.html";
        email.value = '';
        pass.value = '';
        
    }
    else{
        email.value = '';
        pass.value = '';
    }
})