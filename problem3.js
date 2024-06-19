document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    
    const greatestNumber = Math.max(number1, number2, number3);
    
    console.log('The greatest number is: ' + greatestNumber);
});
