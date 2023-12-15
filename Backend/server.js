const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'codehuntemail@gmail.com',
            pass: 'cmaf nbuo qwas zgtn'
        }
    });

    let mailOptions = {
        from: 'codehuntemail@gmail.com',
        to: 'codehuntemail@gmail.com',
        subject: subject,
        text: `From: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`
    };

    let mailOptions1 = {
        from: 'codehuntemail@gmail.com',
        to: `${email}`,
        subject: subject,
        text: `ThankYou Your Response Has been Noted We Will reach you as soon as Possible \n Team RebootCAS`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            res.send('Email sent successfully');
        }
    });

    transporter.sendMail(mailOptions1, (error, info) => {
       
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
