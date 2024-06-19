document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    let message;
    
    if (temperature < 0) {
        message = 'Freezing weather';
    } 
    
    else if (temperature >= 0 && temperature < 10) {
        message = 'Very Cold weather';
    } 
    
    else if (temperature >= 10 && temperature < 20) {
        message = 'Cold weather';
    } 
    
    else if (temperature >= 20 && temperature < 30) {
        message = 'Normal in Temp';
    } 
    
    else if (temperature >= 30 && temperature < 40) {
        message = 'Its Hot';
    } 
    
    else {
        message = 'Its Very Hot';
    }
    
    document.getElementById('result').textContent = message;
    
    console.log(message);
});
