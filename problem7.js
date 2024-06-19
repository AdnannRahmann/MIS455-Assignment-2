document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const character = document.getElementById('character').value.toLowerCase();
    let message;
    
    if (character.length === 1 && /[a-z]/.test(character)) {
        if ('aeiou'.includes(character)) {
            message = 'The character is a vowel.';
        } 
        
        else {
            message = 'The character is a consonant.';
        }
    } 
    
    else {
        message = 'Please enter a single alphabetic character.';
    }
    
    document.getElementById('result').textContent = message;
    
    console.log(message);
});
