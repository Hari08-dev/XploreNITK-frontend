# XploreNITK – AI-Powered Campus Navigation & Discovery Platform

**XploreNITK-frontend** is the interactive React web client powering the campus navigation and facility discovery platform at **National Institute of Technology Karnataka (NITK), Surathkal**. 

Featuring natural-language AI search, Google OAuth 2.0 authentication, real-time facility operating hours, and live Google Maps coordinate navigation.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![NodeJS](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?style=for-the-badge&logo=redis)

---

## 🔗 Associated Repositories

- 🌐 **Frontend Repository**: [Hari08-dev/XploreNITK-frontend](https://github.com/Hari08-dev/XploreNITK-frontend)
- ⚙️ **Backend Repository**: [Hari08-dev/XploreNITK-backend](https://github.com/Hari08-dev/XploreNITK-backend)

---

## 🌟 Key Features

- **📍 Campus Facility & Landmark Directory**:
  - Categorized discovery for Academic Blocks, Hostels, Canteens, ATMs, Sports Complex, Health Center, and Administrative Offices.
  - Interactive facility cards with images, operating hours, descriptions, and direct Google Maps navigation links.

- **🤖 AI Semantic Search (Gemini API + Redis Cache)**:
  - Natural-language queries (e.g., *"Where can I get late-night food near Mega Tower?"* or *"Quiet study areas near Central Library"*).
  - High-performance Redis caching layer to store frequent AI query embeddings, reducing Gemini API costs and response times.

- **⏱️ Live Business Hours Engine**:
  - Dynamically evaluates facility schedules in real time, displaying status badges (`OPEN NOW`, `CLOSING SOON`, `CLOSED`).

- **🔐 Secure Authentication & Favorites**:
  - Google OAuth 2.0 single sign-on with JWT-based session persistence.
  - User profiles and saved favorite locations across devices.

- **🛠️ Admin Control Dashboard**:
  - Full CRUD control panel to add, edit, or archive campus places, adjust operational timings, and monitor real-time platform analytics.

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS (Responsive Dark & Light Mode)
- **Icons & UI**: Lucide React / Axios
- **Maps**: Google Maps API & Embedded Geolocation

### Backend *(Companion Repository)*
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Caching**: Redis
- **AI Model**: Google Gemini 1.5 / 2.0 API
- **Auth**: Google OAuth 2.0 & JSON Web Tokens (JWT)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (`v18.0.0` or higher)
- npm (`v9.0.0` or higher)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Hari08-dev/XploreNITK-frontend.git
   cd XploreNITK-frontend
