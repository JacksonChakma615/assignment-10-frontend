 # HomeNest - Real Estate Listing Platform

HomeNest is a modern real estate listing platform where property owners can post their available rentals or properties for sale. Users can browse, search, and filter properties based on location, price, or type. It is designed as a single-page application (SPA) with full authentication and dynamic CRUD operations.

---

## 🌐 Live Site
[Visit HomeNest Live](https://your-client-live-site-url.com)

---

## 📝 Features

- **User Authentication:** Email/password-based login and registration, along with Google login.
- **Dynamic Property Listings:** Users can add, update, and delete their properties. Listings are stored in MongoDB.
- **Ratings & Reviews:** Logged-in users can submit ratings (1–5 stars) and reviews for properties.
- **Search & Sort:** Users can search for properties by name and sort them by price or posted date.
- **Responsive Design:** Fully responsive UI for mobile, tablet, and desktop devices.
- **Private Routes:** Protected routes for adding properties, viewing personal properties, and managing ratings.
- **Interactive UI:** Toast and SweetAlert notifications for success/error messages.
- **Featured Homes & Slider:** Home page includes featured properties, sliders, and additional relevant sections.

---

## 🏗️ Technologies Used

- **Frontend:** React.js, Tailwind CSS, React Router DOM, React Hot Toast, React Tooltip
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication (Email/Password + Google)
- **Hosting:** Netlify (Client), Vercel (Server)
- **Additional Libraries:** SweetAlert, Font Awesome, Carousel library for sliders

---

## 📂 Project Structure

### Client Side
- `/src/components` - Reusable UI components (PropertyCard, HomeCard, FeaturedHomes, etc.)
- `/src/pages` - Different pages (Home, All Properties, Add Properties, My Properties, My Ratings, Login, Register)
- `/src/context` - Firebase Auth Provider and context
- `/src/routes` - Route management with private and public routes

### Server Side
- `/routes` - API routes for CRUD operations (properties, reviews, wishlist)
- `/controllers` - Business logic for each route
- `/db` - MongoDB connection setup
- `/middleware` - Authentication & authorization middleware (JWT or Firebase Admin)

---

## 🔑 Key Functionalities

1. **Home Page**
   - Slider with 3 meaningful slides
   - Featured real estate section (latest 6 properties)
   - "Why Choose Us" static section
   - 2 extra custom sections for value addition

2. **Authentication**
   - Login & Registration with email/password
   - Google login
   - Error & success notifications with toast/sweetalert
   - Private routes accessible only to logged-in users

3. **Property Management**
   - Add, update, delete properties (private routes)
   - CRUD operations connected to MongoDB
   - Real-time UI updates after actions (no page reload)

4. **All Properties Page**
   - Shows all properties in card format
   - Search and sort functionalities

5. **Property Details Page**
   - Shows full property information
   - Ratings & Reviews section
   - Private route: requires login for full access

6. **My Ratings Page**
   - Shows logged-in user's submitted ratings and reviews
   - Cards show property name, reviewer name, rating, review text, and date

---

## 🛠 Installation Instructions

### Client Side
```bash
cd client
npm install
npm start
