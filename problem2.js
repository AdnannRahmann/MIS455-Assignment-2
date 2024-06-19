document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const resultElement = document.getElementById('result');
    
    if (age >= 18) {
        resultElement.textContent = 'You are eligible to cast a vote.';
        resultElement.style.color = 'green';
    } 
    
    else {
        resultElement.textContent = 'You are not eligible to cast a vote.';
        resultElement.style.color = 'red';
    }
});
