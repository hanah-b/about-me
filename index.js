function promptFeedback() {
    var feedback = prompt("Did you like the portfolio? If not, please provide your feedback:");
    if (feedback !== null && feedback !== "") {
        alert("Thank you for your feedback: " + feedback);
    } else {
        alert("Thank you for visiting!");
    }
}

function toggleBackground() {
    var body = document.body;

    if (body.style.backgroundColor === '') {
        body.style.backgroundColor = '#333'; 
    } else {
        body.style.backgroundColor = '';
    }
}


document.getElementById('toggleButton').addEventListener('click', function() {
    toggleBackground();
});