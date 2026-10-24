# RPG Infra Tech Solutions Pvt. Ltd. — Inquiry & Corporate Website

A premium, modern inquiry website for **RPG Infra Tech Solutions Pvt. Ltd.**, a construction and infrastructure company based in Vile Parle East, Mumbai, Maharashtra, India.

---

## Brand Identity & Design System

- **Primary Navy**: `#071B3D`
- **Secondary Navy**: `#0B2855`
- **Construction Orange**: `#F39216`
- **Accent Gold**: `#FFB347`
- **Warm White**: `#FAF9F6`
- **Light Gray**: `#F0F2F5`
- **Typography**: Plus Jakarta Sans (Headings) & Inter (Body)

---

## Tech Stack

- **Frontend**: React 18, Vite 6, Tailwind CSS 4, Lucide React icons, Framer Motion
- **Backend**: Node.js & Express
- **API Security**: Express Rate Limiting, Input Sanitization, Validation
- **Storage**: JSON File Persistence (`data/inquiries.json`)
- **Email Delivery**: Nodemailer SMTP integration

---

## Features

1. **Sticky Header & Navigation**: Smooth scrolling, mobile drawer menu, phone link, and "Get a Quote" call-to-action.
2. **High-Impact Hero Section**: Architectural imagery, dark navy gradient overlay, taglines, dual CTAs, and verified company credentials.
3. **About Us**: Two-column layout featuring company profile, location in Vile Parle East, CIN (`U45200MH2023PTC123456`), and director profiles (**Mr. Ravindra Jadhav** & **Mr. Pravin Jadhav**).
4. **Our Services**: 6 core services (Civil Construction, Infrastructure Development, Interior & Renovation, PMC Services, Industrial Construction, Repairs & Maintenance). Selecting "Discuss Your Project" pre-fills the inquiry dropdown!
5. **Portfolio & Lightbox Gallery**: Category filters (Residential, Commercial, Industrial, Infrastructure, Interiors), hover zoom, and full-screen lightbox.
6. **Why Choose Us**: 4 core value pillars (Quality-Focused Execution, Safety-Conscious Practices, Reliable Project Delivery, Client-Centric Approach).
7. **Inquiry Form (Core Lead Generation)**: Full name, phone number, email address, service dropdown, project location, budget range, and project details. Real-time validation, server-side rate limiting, unique inquiry reference ID generator.
8. **Direct WhatsApp Integration**: Floating action button linking directly to WhatsApp chat (`+91 9819152119`).

---

## Setup & Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Mode
Runs both the Express server (port 5000) and Vite frontend (port 5173) concurrently:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build & Production Run
```bash
npm run build
npm start
```
Open `http://localhost:5000` in your browser.

---

## Email & SMTP Configuration

To enable automated email alerts whenever a new inquiry is submitted, create a `.env` file from `.env.example`:

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=rpginfratechsolutions@gmail.com
```

If SMTP credentials are not configured, all incoming project inquiries are securely saved to `data/inquiries.json` and logged to the server console.

---

## Verified Company Details

- **Company Name**: RPG Infra Tech Solutions Pvt. Ltd.
- **Location**: Vile Parle East, Mumbai, Maharashtra, India
- **CIN**: U45200MH2023PTC123456
- **Email**: rpginfratechsolutions@gmail.com
- **Phone**: +91 9819152119 / +91 9920654541
- **Directors**: Mr. Ravindra Jadhav & Mr. Pravin Jadhav
