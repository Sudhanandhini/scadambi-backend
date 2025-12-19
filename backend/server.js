require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Section to email mapping
const sectionEmails = {
  'play-school': 'support@sunsys.in',
  'pre-primary': 'sunsys06@gmail.com',
  'icse-primary': 'sudhanandhini@sunsys.in',
  'icse-high': 'sudhanandhinis@gmail.com',
  'high-school': 'manjunatha.n@sunsys.in',
  'pu-college': 'maheshkumar.d.sunsys@gmail.com',
  'contact': 'dmahesh879@gmail.com'
};

// Contact route - CHANGED to /api/send-contact to match your frontend
app.post('/api/send-contact', async (req, res) => {
  try {
    console.log('📨 Received contact form:', req.body);
    
    const { section, name, email, phone, mobile, subject, message, extra } = req.body;

    if (!section || !name || !email) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const recipientEmail = sectionEmails[section] || sectionEmails['contact'];
    console.log('📧 Sending to:', recipientEmail);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let htmlContent = `
      <div style="font-family: Arial; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #0F2A4A, #1a4d7a); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2>S. Cadambi Education Center</h2>
          <p>${section.toUpperCase()}</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h3 style="color: #0F2A4A; border-bottom: 2px solid #FDB913;">New Contact Form</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Name:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${phone}</td></tr>` : ''}
            ${mobile ? `<tr><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Mobile:</td><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${mobile}</td></tr>` : ''}
            ${subject ? `<tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Subject:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${subject}</td></tr>` : ''}
            ${extra ? Object.keys(extra).map(key => `<tr><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">${key}:</td><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${extra[key]}</td></tr>`).join('') : ''}
            <tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Message:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${message || 'No message'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #FDB913; border-radius: 5px; text-align: center;">
            <p style="margin: 0; color: #0F2A4A; font-weight: bold;">📅 ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"S. Cadambi Contact" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: subject || `New Contact - ${name}`,
      html: htmlContent
    });

    console.log('✅ Email sent:', info.messageId);
    res.json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message: ' + error.message });
  }
});

app.get('/', (req, res) => res.json({ message: 'S. Cadambi Contact API' }));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_USER}`);
});