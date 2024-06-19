document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    let greaterNumber;
    
    if (number1 > number2) {
        greaterNumber = number1;
    } else if (number2 > number1) {
        greaterNumber = number2;
    } else {
        console.log('Both numbers are equal.');
        return;
    }
    
    console.log('The greater number is: ' + greaterNumber);
});
