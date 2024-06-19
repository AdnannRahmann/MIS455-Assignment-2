document.getElementById('markForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const marks = parseFloat(document.getElementById('marks').value);
    let grade;
    
    if (marks >= 90 && marks <= 100) {
        grade = 'A';
    } 
    
    else if (marks >= 85 && marks < 90) {
        grade = 'A-';
    } 
    
    else if (marks >= 80 && marks < 85) {
        grade = 'B+';
    } 
    
    else if (marks >= 75 && marks < 80) {
        grade = 'B';
    } 
    
    else if (marks >= 70 && marks < 75) {
        grade = 'B-';
    } 
    
    else if (marks >= 65 && marks < 70) {
        grade = 'C+';
    } 
    
    else if (marks >= 60 && marks < 65) {
        grade = 'C';
    } 
    
    else if (marks >= 55 && marks < 60) {
        grade = 'C-';
    } 
    
    else if (marks >= 50 && marks < 55) {
        grade = 'D+';
    } 
    
    else if (marks >= 45 && marks < 50) {
        grade = 'D';
    } 
    
    else if (marks >= 0 && marks < 45) {
        grade = 'F';
    } 
    
    else {
        grade = 'Invalid marks';
    }
    
    console.log('Your grade is: ' + grade);
});
