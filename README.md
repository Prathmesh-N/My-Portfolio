# Portfolio (MERN Stack)

A full-stack personal portfolio application with:
- Public landing page
- Authentication (signup/login) with JWT
- Protected dashboard pages (Home, About, Skills, Projects, Contact)

## Tech Stack

- Frontend: React, React Router, CSS
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Auth: JWT + bcryptjs

## Project Structure

```text
Portfolio/
├─ frontend/
│  ├─ public/
│  │  ├─ assets/
│  │  └─ Prathmesh_resume.pdf
│  ├─ src/
│  │  ├─ pages/
│  │  │  ├─ dashboard/
│  │  │  ├─ login/
│  │  │  ├─ signup/
│  │  │  ├─ styles/
│  │  │  └─ landing.jsx
│  │  └─ index.js
│  └─ package.json
├─ backend/
│  ├─ src/
│  │  ├─ config/db.js
│  │  ├─ controllers/authController.js
│  │  ├─ middleware/authMiddleware.js
│  │  ├─ models/user.js
│  │  ├─ routes/authRoutes.js
│  │  └─ app.js
│  └─ package.json
└─ .gitignore
```

## Features

- User registration and login
- Password hashing with bcrypt
- JWT token generation
- Protected frontend routes using localStorage token
- Portfolio dashboard with multiple sections

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Optional frontend env (`frontend/.env`):

```env
REACT_APP_API_URL=http://localhost:5000
```

If `REACT_APP_API_URL` is not set, frontend defaults to `http://localhost:5000`.

## Installation & Run

### 1) Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2) Start backend

```bash
cd backend
npm run dev
```

### 3) Start frontend

```bash
cd frontend
npm start
```

Frontend runs on `http://localhost:3000` and backend on `http://localhost:5000` (by default).

## API Endpoints

Base URL: `http://localhost:5000/api/auth`

- `POST /signup`
- `POST /login`

## Scripts

Backend:
- `npm start` - run server with node
- `npm run dev` - run server with nodemon

Frontend:
- `npm start` - start React dev server
- `npm run build` - create production build
- `npm test` - run tests
