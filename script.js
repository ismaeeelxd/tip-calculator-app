let bill_amount = 0;
let number_of_people = 0;
let tip_amount_per_person = 0;

document.getElementById('bill').addEventListener('change',function (){
    if(isNaN(this.value) || this.value.trim() === '' || this.value <=0){
        document.getElementById('bill').classList.remove('success');
        document.getElementById('bill').classList.add('error');
        document.getElementById('error-message-bill').innerText = "Invalid Input";
        setTimeout(function(){
            document.getElementById('bill').classList.remove('error')
            document.getElementById('error-message-bill').innerText = "";
        },5000);
    }
    else{
        document.getElementById('bill').classList.add('success');
        bill_amount = parseFloat(this.value);
    }
})


document.getElementById('number-of-people').addEventListener('change',function (){
    if(isNaN(this.value) || this.value.trim() === '' || this.value <=0){
        document.getElementById('number-of-people').classList.remove('success');
        document.getElementById('number-of-people').classList.add('error');
        document.getElementById('error-message-n-people').innerText = "Invalid Input";
        setTimeout(function(){
            document.getElementById('number-of-people').classList.remove('error')
            document.getElementById('error-message-n-people').innerText = "";
        },5000);
    }
    else{
        document.getElementById('number-of-people').classList.add('success');
        number_of_people = parseInt(this.value);
    }
})
document.getElementById('reset-button').addEventListener('click',function(){
    bill_amount =0;
    number_of_people = 0;
    tip_amount_per_person = 0;
    document.getElementById('tip-amount').innerText = '$0.00';
    document.getElementById('result-amount').innerText = '$0.00';
    document.getElementById('bill').value = "";
    document.getElementById('number-of-people').value = "";
    document.getElementById('number-of-people').classList.remove('success');
    document.getElementById('bill').classList.remove('success');

})

document.getElementById('5-percentage').addEventListener('click',function() {
    handlePercentage(5)
});
document.getElementById('10-percentage').addEventListener('click',function() {
    handlePercentage(10)
});
document.getElementById('15-percentage').addEventListener('click',function() {
    handlePercentage(15)
});
document.getElementById('25-percentage').addEventListener('click',function() {
    handlePercentage(25)
});
document.getElementById('50-percentage').addEventListener('click', function() {
    handlePercentage(50)
});
document.getElementById('custom-percentage').addEventListener('change',function(){
    if(isNaN(this.value) || parseFloat(this.value) < 0 || parseFloat(this.value) > 100){
        document.getElementById('error-message-perc').innerText = "Invalid Input";
        setTimeout(function(){
            document.getElementById('error-message-perc').innerText = "";
        },5000);
    }
    else{
        handlePercentage(parseFloat(this.value));
    }
});

function calculatePercentage(percentage){
    return ((bill_amount * percentage) / 100);
}

function handlePercentage(perc){
        if(bill_amount <= 0 || number_of_people === 0){
            return;
        }
        else{
            let total_tip_amount = calculatePercentage(perc);
            let total_bill_amount_per_person = (bill_amount + total_tip_amount) / number_of_people; 
            let tip_amount_per_person =  total_tip_amount / number_of_people;
            document.getElementById('tip-amount').innerText = '$' + tip_amount_per_person.toFixed(2);
            document.getElementById('result-amount').innerText = '$' + total_bill_amount_per_person.toFixed(2);

        }
}

