const http = require('http');
const nodemailer = require('nodemailer');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/send-email') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const formData = JSON.parse(data);
            sendEmail(formData);
            res.statusCode = 200;
            res.end('Email sent successfully!');
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Function to send the email
function sendEmail(formData) {
    // Extract form data
    const { name, email, phone, subject, message } = formData;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Configure your email service provider details here
        host: 'smtp.example.com',
        port: 587,
        secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
        auth: {
            user: 'your-email@example.com',
            pass: 'your-email-password'
        }
    });

    // Compose the email
    const mailOptions = {
        from: 'your-email@example.com',
        to: 'meerwebservices@gmail.com',
        subject: `New Message: ${subject}`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message: ${message}
    `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred while sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}
