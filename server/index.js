import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiter for inquiries
const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: { success: false, message: 'Too many inquiries submitted from this IP, please try again later.' }
});

// Ensure data directory exists for local fallback storage
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const inquiriesFile = path.join(dataDir, 'inquiries.json');

// Helper to save inquiry locally
const saveInquiryLocally = (inquiry) => {
  let inquiries = [];
  try {
    if (fs.existsSync(inquiriesFile)) {
      const fileData = fs.readFileSync(inquiriesFile, 'utf8');
      inquiries = JSON.parse(fileData);
    }
  } catch (err) {
    console.error('Error reading local inquiries:', err);
  }

  inquiries.push({
    ...inquiry,
    id: 'RPG-' + Date.now().toString().slice(-6),
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));
  return inquiries[inquiries.length - 1].id;
};

// Configure Nodemailer transporter if SMTP is provided
let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

// API Routes
app.post('/api/inquiries', inquiryLimiter, async (req, res) => {
  try {
    const { fullName, phone, email, service, location, budget, details } = req.body;

    // Validation
    if (!fullName || !phone || !service || !location || !details) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Full Name, Phone, Service, Location, Project Details).'
      });
    }

    // Phone validation (Indian or international)
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$|^[\+\d\s\-\(\)]{7,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number.'
      });
    }

    // Email validation if provided
    if (email && email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address.'
        });
      }
    }

    const newInquiry = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : 'Not provided',
      service,
      location: location.trim(),
      budget: budget || 'Not specified',
      details: details.trim()
    };

    // Save locally
    const inquiryId = saveInquiryLocally(newInquiry);

    // Send email notification if transporter configured
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"RPG Infra Website" <${process.env.SMTP_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || 'rpginfratechsolutions@gmail.com',
          subject: `New Project Inquiry [${inquiryId}] - ${service}`,
          html: `
            <h2>New Inquiry Received</h2>
            <p><strong>Reference ID:</strong> ${inquiryId}</p>
            <p><strong>Full Name:</strong> ${newInquiry.fullName}</p>
            <p><strong>Phone:</strong> ${newInquiry.phone}</p>
            <p><strong>Email:</strong> ${newInquiry.email}</p>
            <p><strong>Service Required:</strong> ${newInquiry.service}</p>
            <p><strong>Project Location:</strong> ${newInquiry.location}</p>
            <p><strong>Estimated Budget:</strong> ${newInquiry.budget}</p>
            <p><strong>Project Details:</strong></p>
            <p>${newInquiry.details}</p>
          `
        });
      } catch (mailErr) {
        console.error('Failed to send notification email:', mailErr);
      }
    } else {
      console.log(`[INQUIRY SAVED] ID: ${inquiryId} | Name: ${newInquiry.fullName} | Service: ${newInquiry.service}`);
    }

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! Our team will contact you shortly.',
      inquiryId
    });

  } catch (error) {
    console.error('Server error handling inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later or contact us directly via phone.'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', company: 'RPG Infra Tech Solutions Pvt. Ltd.' });
});

// Serve frontend build in production
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`RPG Infra server running on port ${PORT}`);
});
