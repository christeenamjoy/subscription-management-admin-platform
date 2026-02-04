# Subscription Management Admin Platform

A production-grade **Admin Dashboard** built to demonstrate modern frontend architecture, server-state management, and scalable UI patterns commonly used in **product startups**.

This project is intentionally designed to optimize for **technical discussions and live coding interviews**, rather than just visual polish.

---

## ✨ What This Project Demonstrates

* Feature-first frontend architecture
* Server-state management with React Query
* Multiple parallel API calls on a single page (Dashboard)
* Role-based protected routes
* Scalable theming with Tailwind CSS v4
* Predictable rendering and memoization strategies
* Clean separation of concerns (services → hooks → UI)

---

## 🧩 Key Features

### Authentication & Routing

* Mock authentication flow
* Protected routes using route guards
* Clear separation between public and private areas

### Dashboard

* Multiple API calls executed in parallel
* KPI cards (Revenue, Active Subscriptions, Churn)
* Revenue trend chart
* Aggregated loading and error handling

### Subscriptions Management

* Subscription listing table
* Server-state powered data fetching
* Scalable table structure (sorting / pagination ready)

### Theming

* Light / Dark mode
* Token-based design system using CSS variables
* Tailwind CSS v4

---

## 🏗 Architecture Overview

The project follows a **feature-first architecture** where each domain owns its:

* API services
* React Query hooks
* Types
* UI components

```
src/
 ├─ app/
 │   ├─ layout/
 │   ├─ providers/
 │   ├─ routes/
 │   └─ guards/
 │
 ├─ features/
 │   ├─ auth/
 │   │   ├─ services/
 │   │   ├─ hooks/
 │   │   └─ Login.tsx
 │   │
 │   ├─ dashboard/
 │   │   ├─ services/
 │   │   ├─ hooks/
 │   │   ├─ components/
 │   │   └─ Dashboard.tsx
 │   │
 │   ├─ subscriptions/
 │   │   ├─ services/
 │   │   ├─ hooks/
 │   │   └─ Subscriptions.tsx
 │   │
 │   └─ users/
 │       ├─ services/
 │       ├─ hooks/
 │       └─ Users.tsx
 │
 ├─ shared/
 │   ├─ components/
 │   ├─ services/
 │   └─ utils/
 │
 ├─ store/
 └─ styles/
```

---

## 🔄 Data Fetching Strategy

* All server interactions are modeled using **React Query**
* Each API endpoint has its own dedicated hook
* Pages compose hooks declaratively
* No data fetching logic inside UI components

### Example: Dashboard

The Dashboard page composes multiple independent queries:

* Metrics
* Revenue trend

An optional **aggregator hook** (`useDashboardData`) coordinates shared loading and error states without tightly coupling APIs.

---

## 🎨 Theming Strategy

* Tailwind CSS v4
* CSS variable–based design tokens
* Light/Dark mode via a global `ThemeProvider`
* Tokens are defined once and consumed consistently across the app

This approach ensures:

* Predictable theming
* Easy future extension (brand themes, accessibility modes)

---

## ⚙️ Tech Stack

* **React** (with TypeScript)
* **Vite**
* **React Router**
* **@tanstack/react-query**
* **Tailwind CSS v4**
* **Zustand** (UI state)

---

## 🧠 Design Decisions & Trade-offs

### Why feature-first structure?

* Keeps related logic colocated
* Scales better as the codebase grows
* Makes ownership and refactoring easier

### Why React Query?

* Handles caching, retries, and background updates
* Removes the need for complex global state for server data
* Encourages declarative data fetching

### Why no heavy UI libraries?

* Focus is on **architecture and logic**, not UI abstraction
* Easier to discuss and live-code during interviews

---

## 🚀 What I Would Improve Next

Given more time, I would:

* Add optimistic updates for subscription actions
* Introduce role-based access control (admin / support / viewer)
* Add automated tests for hooks and critical components
* Improve table UX with sorting and pagination

---

## 🧪 Running the Project

```bash
npm install
npm run dev
```

---

## 🎯 Interview Focus

This project is intentionally structured to support:

* System design discussions
* Live coding sessions
* Architectural walkthroughs

It prioritizes **clarity, scalability, and real-world patterns** over demo-only shortcuts.

---

**Author:** Christeena Mary Joy
**Role:** Senior Frontend Engineer
