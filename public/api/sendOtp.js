// public/api/sendOtp.js

module.exports = (req, res) => {
    const { mobileNumber, email } = req.body;

    if (mobileNumber) {
        // Logic to send OTP to mobile number
        const otp = generateOtp();
        // Here you would integrate with an SMS API to send the OTP
        console.log(`Sending OTP ${otp} to mobile number ${mobileNumber}`);
        res.json({ success: true, message: 'OTP sent to mobile number' });
    } else if (email) {
        // Logic to send OTP to email
        const otp = generateOtp();
        // Here you would integrate with an email API to send the OTP
        console.log(`Sending OTP ${otp} to email ${email}`);
        res.json({ success: true, message: 'OTP sent to email' });
    } else {
        res.json({ success: false, message: 'Mobile number or email is required' });
    }
};

// Helper function to generate a 6-digit OTP
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
