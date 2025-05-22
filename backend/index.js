const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper: create transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // e.g. 'gmail'
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST /api/send-quote
app.post('/api/send-quote', async (req, res) => {
    const data = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'sacresilas@gmail.com',
        subject: 'New Quote Request',
        text: JSON.stringify(data, null, 2)
    };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// POST /api/send-message
app.post('/api/send-message', async (req, res) => {
    const { name, email, company, message } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'sacresilas@gmail.com',
        subject: 'New Quick Message',
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 