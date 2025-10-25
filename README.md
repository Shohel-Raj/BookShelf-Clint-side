
#  📚  Bookshelf Client

A modern, animated, and responsive React application integrated with Firebase and a MongoDB/Express backend. This frontend is styled with Tailwind CSS & DaisyUI, and uses a rich set of libraries for charts, animations, forms, and UI enhancements.

The purpose of the Bookshelf website is to provide users with a convenient and organized platform to manage and explore their personal book collections. The site allows users to catalog books they have read, are currently reading, or plan to read in the future. It also enables users to discover new books, track reading progress, write reviews, and share recommendations with others. Tthe Bookshelf website aims to promote reading habits and create a community of book lovers.

---

## Live Demo

Check out the live version of the project [BOOKSHELF](https://book-shelf-7d010.web.app/).

## 🌟 Features

- 📚 Dynamic book listing with filtering, CRUD, and reviews
- 🔐 Firebase authentication (email/password or Google)
- 📈 Data visualization using Recharts
- 💬 Toast notifications with React Toastify
- 🎞️ Animations via AOS, Lottie, Framer Motion
- 🧼 Clean and responsive UI using DaisyUI + Tailwind
- 📅 Date handling with `date-fns`
- 🧭 React Router v7 for navigation
- 🎉 SweetAlert2 modals for elegant alerts
- ⚙️ Axios for backend communication

---

### ✨ Newly Added Functionalities
- 💌 **Subscription System** – Users can subscribe with their email to receive updates and newsletters.
- 📞 **Contact Us Form** – Users can send feedback or inquiries directly through the website.
- 🧑‍💼 **Admin Dashboard** – Dedicated admin panel to manage books, subscriptions, and messages.

---

## 🛠️ Tech Stack

- React 19
- React Router 7
- Firebase (v11)
- Tailwind CSS + DaisyUI
- Axios
- MongoDB (via backend)
- Recharts
- Framer Motion
- AOS & Lottie for animations

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone pject to your machine
   cd bookshelf-client

2. **Install dependencies:**

   ```bash
   bash

   npm install

3. **Create a .env file in the root:**

    ```bash
    .env

    VITE_api_base_url=https://your-backend-url.com
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_site_name=BOOKSHELF
   VITE_ApiCall=your_server_api

4. **🧪 Running the App:**

   ```bash
   bash
   
    npm run dev

Then open http://localhovst:5173




## 🧩 Key Libraries

| Library                | Purpose                                       |
|------------------------|-----------------------------------------------|
| `aos`                  | Animate on scroll for element transitions     |
| `axios`                | Promise-based HTTP client for API requests    |
| `daisyui`              | Tailwind CSS components for styling           |
| `date-fns`             | Utility library for date manipulation         |
| `firebase`             | Firebase auth and real-time database          |
| `lottie-react`         | Render Lottie JSON animations in React        |
| `motion`               | Framer Motion – advanced animations library   |
| `react`                | Core React library                            |
| `react-countup`        | Count-up animation for numbers                |
| `react-dom`            | DOM rendering for React apps                  |
| `react-fast-marquee`   | Lightweight horizontal text/image scrolling   |
| `react-form-stepper`   | Multi-step form UI component                  |
| `react-icons`          | Popular icon packs as React components        |
| `react-router`         | Declarative routing in React apps             |
| `react-toastify`       | Customizable toast notifications              |
| `recharts`             | Charting and data visualization               |
| `sweetalert2`          | Beautiful alert and modal dialogs             |
| `swiper`               | Touch slider for mobile and web               |
