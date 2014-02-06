document.addEventListener("DOMContentLoaded", function() {
   var form = document.getElementById('supply-calculator');
   form.addEventListener('submit', getFormValues); 
});

function getFormValues(event) {
   var ageInput = document.getElementById('age');
   var age = ageInput.value;

   var maxAgeInput = document.getElementById('maxAge');
   var maxAge = maxAgeInput.value;

   var costInput = document.getElementById('cost');
   var cost = costInput.value;

   calculate(age, maxAge, dailyCost);
   event.preventDefault();
}

function calculate(age, maxAge, dailyCost){
    var days = (maxAge - age) * 365;
    var total = dailyCost * days;
    var resultDiv = document.getElementById('lifetime-supply');
    
    if(total > 40000){
        resultDiv.innerHTML = "You will need " + total + " to last you until the ripe old age of " + maxAge + ". Wow! That's a lot!";
    }else{
        resultDiv.innerHTML = "You will need " + total + " to last you until the ripe old age of " + maxAge + ". You seem pretty reasonable";
    } 
}