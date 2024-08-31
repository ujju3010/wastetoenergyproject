function openModal(locationId) {
    document.getElementById(locationId).style.display = "block";

    // Start electricity production simulation
    simulateElectricityProduction(locationId);
}

function closeModal(locationId) {
    document.getElementById(locationId).style.display = "none";
}

function simulateElectricityProduction(locationId) {
    let electricitySpan = document.getElementById('electricity' + locationId.slice(-1));
    let currentProduction = parseInt(electricitySpan.textContent);

    setInterval(function () {
        currentProduction += Math.floor(Math.random() * 3) + 2; // Increase by 2-4 units
        electricitySpan.textContent = currentProduction;
    }, 2000);
}
function openReferralModal() {
    document.getElementById('referral-modal').style.display = 'block';
}

function closeReferralModal() {
    document.getElementById('referral-modal').style.display = 'none';
}

function submitReferralCode() {
    const codeInput = document.getElementById('referral-code').value;
    const messageElement = document.getElementById('message');

    // Simulate validation of referral code
    if (codeInput.trim()) {
        // Copy the discount code to clipboard
        const discountCode = '10PERCENTDISCOUNT';
        navigator.clipboard.writeText(discountCode).then(() => {
            messageElement.textContent = '10% discount code copied to clipboard!';
            setTimeout(() => {
                window.location.href = 'shop.html'; // Redirect to store
            }, 2000); // Redirect after 2 seconds
        }).catch(err => {
            messageElement.textContent = 'Failed to copy discount code.';
        });
    } else {
        messageElement.textContent = 'Please enter a referral code.';
    }
}


