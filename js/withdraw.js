document.getElementById('btn_withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdrawField');
    // console.log(newWithdrawAmount);
    const previousWithdrawAmount = getElementValueById('withdrawAmount');
    // console.log(previousWithdrawAmount);
    // console.log(typeof(previousWithdrawAmount));
    // console.log(typeof(newWithdrawAmount));
    const totalWithdraw = newWithdrawAmount+ previousWithdrawAmount
    setTextElementValueById('withdrawAmount',totalWithdraw)
    console.log(totalWithdraw);
    const balance = getElementValueById('balance');
    if(balance< newWithdrawAmount){
        alert('No sufficient Balance');
        return ;
    }
    const balanceAfterWithdraw = balance-newWithdrawAmount
    setTextElementValueById('balance',balanceAfterWithdraw);
})




  
    


