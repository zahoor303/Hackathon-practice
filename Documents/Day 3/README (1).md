# Hackathon-3-day-3

Rental Car E-commerce Platform
Introduction
This project is a scalable and user-friendly Rental Car E-commerce platform built with Next.js and powered by Sanity CMS. The platform enables seamless car rental management, dynamic data fetching, and real-time updates, making it suitable for both customers and administrators.

Features
Dynamic Car Listings: Display car details dynamically fetched from Sanity CMS.
Secure Authentication: API token-based authentication for secure data transactions.
Custom Schema: Sanity schemas designed for structured car data storage.
Admin Dashboard: Manage car details, add or edit car entries, and track rental orders.
Environment Variables: Securely store sensitive credentials like API tokens and project configurations.
Tech Stack
Frontend: Next.js
Backend: Node.js
CMS: Sanity.io
Database: Sanity Content Lake
Styling: Tailwind CSS
Setup and Installation
Prerequisites
Node.js installed on your system.
A Sanity.io account with a project set up.
Steps to Run Locally
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/rental-car-ecommerce.git
Navigate to the project directory:
bash
Copy
Edit
cd rental-car-ecommerce
Install dependencies:
bash
Copy
Edit
npm install
Set up environment variables: Create a .env.local file in the root directory and add:
env
Copy
Edit
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_TOKEN=your-sanity-token
Start the development server:
bash
Copy
Edit
npm run dev
Deploy
For production deployment:

Build the application:
bash
Copy
Edit
npm run build
Start the server:
bash
Copy
Edit
npm start
API Integration
External API
The platform fetches car data from an external API and integrates it with Sanity CMS using a custom Node.js script:

bash
Copy
Edit
npm run import-data
This script imports car data dynamically and stores it in the CMS for real-time display.

Folder Structure
php
Copy
Edit
rental-car-ecommerce/
├── public/             # Static assets
├── components/         # Reusable React components
├── pages/              # Next.js pages
├── sanity/             # Sanity configuration and schemas
├── scripts/            # Data import and utility scripts
├── styles/             # Global and modular styles
└── .env.local          # Environment variables
Future Enhancements
Add user authentication for customers.
Implement advanced search and filter options.
Introduce car availability tracking and scheduling.
Enable multi-language support.
