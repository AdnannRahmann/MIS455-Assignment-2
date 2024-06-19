document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const tuitionFees = parseFloat(document.getElementById('tuitionFees').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);
    
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    let discount = 0;
    
    if (tuitionFees > 50000 && age > 21) {
        discount = 0.15;
    } 
    
    else if (tuitionFees > 40000 && age > 20) {
        discount = 0.10;
    } 
    
    else if (tuitionFees > 30000 && age > 19) {
        discount = 0.05;
    } 
    
    else {
        discount = 0.02;
    }
    
    const discountAmount = tuitionFees * discount;
    const payableFees = tuitionFees - discountAmount;
    
    const resultText = `Name: ${name}\nDiscount Amount: $${discountAmount.toFixed(2)}\nPayable Tuition Fees: $${payableFees.toFixed(2)}`;
    document.getElementById('result').textContent = resultText;
    
    console.log(resultText);
});
