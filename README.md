# 🏋️ GOLD Sport — React E‑Commerce Store

A modern, fully responsive fitness e‑commerce front‑end built with **React + Vite + Tailwind CSS**.
GOLD Sport sells gym equipment, supplements, men's sportswear and bags, with a working cart,
wishlist, mock authentication gate, product search/filter, and light/dark mode.

> CSCI390 – Web Programming · Project Phase 2

---

## ✨ Features

- **Login / Signup gate** — visitors must create an account or sign in before entering the store (mock auth, persisted in `localStorage`).
- **Data‑driven catalogue** — every page renders from a single `products.js` file; add one object and it shows up everywhere.
- **Shopping cart** — add/remove items, change quantities, live cart‑count badge, order summary with free‑shipping threshold, and checkout confirmation. Persists across reloads.
- **Wishlist / favorites** — heart any product; saved and counted in the navbar.
- **Product detail pages** — full description, rating, size/nutrition info, quantity picker and related products.
- **Search & sort** — live search box and price/rating sorting on every category page.
- **Light / dark mode** — toggle in the navbar, remembered between visits.
- **Fully responsive** — mobile drawer navigation, fluid grids (Tailwind, no Bootstrap needed).
- **Polished UI** — electric‑blue & slate theme, glassmorphism navbar, gradient mesh hero, staggered animations.

## 🧱 Tech Stack

| Area | Technology |
|------|-----------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Icons | lucide-react |
| State | React Context API + localStorage |
| Hosting | Vercel |

## 📁 Project Structure

```
gold-sport/
├── public/
│   ├── images/            # product images go here (see images/README.txt)
│   └── favicon.svg
├── src/
│   ├── components/        # Navbar, Footer, ProductCard, ProductGrid, Layout, ...
│   ├── context/           # Auth, Cart, Wishlist, Theme providers
│   ├── data/products.js   # the entire product catalogue
│   ├── pages/             # Home, CategoryPage, ProductDetail, Cart, Wishlist, Login, Signup
│   ├── App.jsx            # routes + the auth gate
│   ├── main.jsx
│   └── index.css          # Tailwind + custom theme utilities
├── tailwind.config.js
├── vite.config.js
├── vercel.json            # SPA rewrite for client‑side routing
└── package.json
```

## 🚀 Getting Started

**Requirements:** [Node.js](https://nodejs.org) 18 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Add your product images
#    Copy your Phase‑1 image files into  public/images/
#    (filenames listed in public/images/README.txt)

# 3. Start the dev server
npm run dev          # opens http://localhost:5173

# 4. Build for production
npm run build        # output in /dist
npm run preview      # preview the production build
```

> On first launch you'll see the **Login / Signup** screen. Create an account
> (stored locally in your browser) to enter the store.

## 📸 Screenshots

> Add your screenshots here after running the app, e.g.:
>
> ```
> ![Login](screenshots/login.png)
> ![Home](screenshots/home.png)
> ![Product](screenshots/product.png)
> ![Cart](screenshots/cart.png)
> ```

## 👥 Group Contribution Statement

| Member | Contribution |
|--------|--------------|
| _Name_ | _e.g. UI design, cart logic_ |
| _Name_ | _e.g. auth + routing, deployment_ |

## 📝 Notes

The authentication is a **front‑end mock** for demonstration only — accounts are
stored unencrypted in `localStorage`. A production app would use a secure backend
with hashed passwords.

---

© 2026 GOLD Sport. All Rights Reserved.
