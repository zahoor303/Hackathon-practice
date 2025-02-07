# Hackathon-3-day-2
Marketplace Technical Foundation - Rental E-Commerce Marketplace
A fully functional rental marketplace where users can browse, book, and pay for rental vehicles. The project is built using Next.js, TypeScript, and Sanity CMS, with third-party integrations for payments and location services.

Key Features
Frontend: Developed with Next.js and TypeScript for fast, dynamic, and user-friendly interfaces.

Home Page: Overview of available vehicles.
Product Listing: Filter and browse through vehicles.
Product Detail: Detailed information about selected vehicles.
Cart and Checkout: Add vehicles, manage selections, and confirm bookings.
Backend: Managed using Sanity CMS for efficient data handling.

Vehicle Data: Store and retrieve vehicle information.
Customer Data: Manage user profiles and bookings.
Order Management: Track orders and their statuses.
Third-Party APIs:

Stripe/PayPal: Secure payment gateways.
Google Maps API: Location-based services like pickup/drop-off.
Delivery Zone Management:

Coverage radius and charges.
Pickup and drop-off locations.
API Endpoints
Products

POST /products: Add a new vehicle.
GET /products: Retrieve available vehicles.
Orders

POST /create-order: Create a new order.
GET /order-status/{id}: Fetch order status.
Delivery Zones

GET /delivery-zones: Fetch all delivery zones.
