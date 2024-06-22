// scripts/main.js

document.addEventListener("DOMContentLoaded", function() {
    const sendOtpButton = document.getElementById('sendOtpButton');
    const sendOtpEmailButton = document.getElementById('sendOtpEmailButton');
    const verifyOtpButton = document.getElementById('verifyOtpButton');
    const verifyOtpEmailButton = document.getElementById('verifyOtpEmailButton');
    const otpSection = document.getElementById('otpSection');
    const callSection = document.getElementById('callSection');

    sendOtpButton.addEventListener('click', function() {
        const mobileNumber = document.getElementById('mobileNumber').value;
        fetch('/api/sendOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobileNumber }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    sendOtpEmailButton.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        fetch('/api/sendOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    verifyOtpButton.addEventListener('click', function() {
        const mobileNumber = document.getElementById('mobileNumber').value;
        const otp = document.getElementById('otp').value;
        fetch('/api/verifyOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobileNumber, otp }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                otpSection.style.display = 'none';
                callSection.style.display = 'block';
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    verifyOtpEmailButton.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const otpEmail = document.getElementById('otpEmail').value;
        fetch('/api/verifyOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp: otpEmail }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                otpSection.style.display = 'none';
                callSection.style.display = 'block';
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
