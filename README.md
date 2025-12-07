# 🚀 Frontend Setup Guide

This guide will help you set up and run the frontend locally.

---

## 📥 1. Clone the Repository

Clone the repository and navigate to the project folder:

```bash
git clone https://github.com/udara885/product-frontend-react.git
cd product-frontend-react
```

## 📦 2. Install Dependencies

Install all dependencies using your preferred package manager:

```bash
# Using pnpm
pnpm install

# Or using npm
npm install
```

**Note:** I used `pnpm` as the package manager.

## ⚙️ 3. Configure Environment Variables

Create a `.env` file in the root directory of the project:

```bash
touch .env
```

Add the following environment variable with your backend API URL:

```env
VITE_API_URL = http://127.0.0.1:8000
```

**Important:** Replace `http://127.0.0.1:8000` with your actual backend API URL.

## ▶️ 4. Run the Development Server

Start the development server:

```bash
pnpm dev
```

Or with npm:

```bash
npm run dev
```

You can now access the frontend in your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## ✅ Notes

- Make sure the backend API is running before starting the frontend.
- `pnpm` is recommended, but `npm` works as well.
- The `VITE_API_URL` environment variable must match your backend server URL.
- Do not commit the `.env` file to version control. Add it to `.gitignore` if not already included.
