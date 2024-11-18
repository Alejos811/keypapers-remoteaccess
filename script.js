document.getElementById('connectBtn').addEventListener('click', function() {
    const pin = document.getElementById('pin').value;
    if (pin) {
        alert(`Connecting with PIN: ${pin}`);
        // Add your connection logic here
    } else {
        alert('Please enter a valid PIN code.');
    }
});
