# ⚛️ React + Tailwind Frontend Boilerplate

A responsive and scalable **React frontend boilerplate** built using **Vite**, **Tailwind CSS**, and **React Router**. This project includes a basic layout, reusable components, and mock login/register authentication flow with role-based redirection for **Admin** and **User** roles.


---

## 📌 Key Features

✅ **Vite-powered React app** with blazing fast development  
🎨 **Tailwind CSS** for styling and custom design  
🧭 **React Router v6** for routing  
🔐 **Mock Authentication System** with Admin/User roles  
🧱 **Protected Dashboard Page** (access-controlled)  
🌓 **Responsive Design** with light/dark theme support  
📂 **Clean file structure** for scalability  
🧩 **Reusable Navbar + Sidebar layout** in Dashboard  
📝 **Dynamic Form Page** accessible from Dashboard

---

## 🧪 Test Login (Mock Auth)

You can log in using the following **mock user credentials** defined in the frontend:

### 👑 Admin Users

| Email               | Password   | Role  |
|--------------------|------------|--------|
| admin1@example.com | admin123   | admin  |
| admin2@example.com | admin456   | admin  |

### 👤 Regular Users

| Email              | Password   | Role |
|-------------------|------------|------|
| user1@example.com | user123    | user |
| user2@example.com | user456    | user |

> ✅ Successful login redirects to the **Dashboard**  
> ❌ Invalid credentials show an error message  
> 📝 Register page mimics signup but doesn't store data (mock only)  

---

## 📄 Pages Included

| Page        | Description                                        |
|-------------|----------------------------------------------------|
| 🏠 Home      | Public homepage with intro                        |
| ℹ️ About      | Project/about section                             |
| 🔐 Login     | Mock login with role check                        |
| 📝 Register  | Mock signup (redirects to login)                  |
| 📊 Dashboard | Protected page, accessible after login            |
| 📋 FormPage  | Page with a simple editable form, from Dashboard  |

---

## 🔒 Authentication Logic

- Frontend-only mock validation
- User role stored in `localStorage`
- Redirect based on role (`admin` or `user`)
- Dashboard & FormPage protected via `PrivateRoute`
- No backend or persistent storage involved

---

## 🧰 Tech Stack

| Package                | Purpose                                     |
|------------------------|---------------------------------------------|
| `vite`                 | Fast bundler and dev server                 |
| `react`                | Frontend library                            |
| `react-router-dom`     | Page navigation & client-side routing       |
| `tailwindcss`          | Utility-first CSS framework                 |
| `postcss`, `autoprefixer` | Required by Tailwind CSS                 |
| `@vitejs/plugin-react` | React support in Vite                       |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/react-boilerplate.git

# Navigate into the project directory
cd react-boilerplate

# Install dependencies
npm install

# Run the app
npm run dev
