/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert the input into a number by using parsefloat
3. get previous withdraw total
4. calculate total Withdraw amount
4.5. set total withdraw amount
5. get the total balance
6. calculate new balance total
6.5. set the new blance total
*/ 
// step-1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //    step-2:
        const withdrawField = document.getElementById('withdraw-amount');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountString);
        // console.log(newWithdrawAmount);
        // step-7: clear the input field
        withdrawField.value = '';
    
        if(isNaN(newWithdrawAmount)){
            alert('Please provide a valid number');
            return;
        }
        // step-3
        const withdrawtotalElement = document.getElementById('withdraw-total');
        const previousWithdarwTotaString = withdrawtotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdarwTotaString);
        
    
        // step-5:
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotaSstring = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotaSstring);
    
        
        // step=6
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText =newBalanceTotal;
        if(newWithdrawAmount > previousBalanceTotal){
            alert('Insufficient your account balance');
            return;
        }
        // step-4:  
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawtotalElement.innerText = currentWithdrawTotal;
    
        
    
    })