# Cashora - MFS (Mobile Financial Service) Frontend

A modern and responsive frontend application for the Cashora Mobile Financial Service, built with React, TypeScript, and Tailwind CSS. This project provides a user-friendly interface for financial transactions, user management, and agent operations.

## 🔐 Auth Credentials

**Admin Login:**
- Email: admin@mail.com 
- PIN: 12345

**Agent Login:**
- Email: mahmudulhasanturan@gmail.com
- PIN: 12345

**User Login:**
- Email: notmahmudulturan@gmail.com
- PIN: 12345


## 🚀 Key Features

- **Multi-Role Interface**: Dedicated ui interfaces for Users, Agents, and Admin
- **Financial Operations**: 
  - Send Money Interface
  - Cash In Management
  - Cash Out Processing
  - Balance Tracking
- **Agent Dashboard**:
  - Cash In/Out Management
  - Balance Management
  - Transaction Records
- **Admin Panel**:
  - User/Agent Management
  - Transaction Monitoring
  - System Analytics
  - Agent Approval Interface

## 🛠️ Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- React Query (TanStack Query)
- React Hook Form
- Zod Validation
- Axios
- Vite

## ⚡ Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16.x or higher)
- npm (v8.x or higher)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/mahmudulturan/cashora-frontend.git
cd cashora-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Scripts

- `npm run dev`: Start development server on port 3000
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint for code quality
- `npm run preview`: Preview the production build locally

## 📁 Project Structure

```bash
src/
├── assets/      # Static assets (images, fonts)
├── components/  # Reusable UI components
├── configs/     # Configuration files
├── hooks/       # Custom React hooks
├── layout/      # Layout components
├── lib/         # Utility libraries
├── pages/       # Page components
├── providers/   # Context providers
├── routes/      # Route configurations
├── schema/      # Zod validation schemas
├── services/    # API service layers
├── types/       # TypeScript type definitions
└── utils/       # Utility functions
```

## 🎨 UI Components

The project uses a combination of custom components and Radix UI primitives:

- Alert Dialog
- Dialog
- Label
- Select
- Toast
- Custom Button
- Form Components
- Layout Components

## 🔐 Features Implementation

### Authentication
- Login/Register Forms
- PIN Management
- Session Handling
- Protected Routes

### Transaction Management
- Send Money Interface
- Cash In/Out Forms
- Transaction History
- Balance Display

### User Management
- Profile Settings
- Security Settings
- Notification Center

## 🎯 State Management

- React Query for server state
- Context API for global state
- Form state with React Hook Form

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS for responsive layouts
- Adaptive UI components

## 🔧 Development

### Code Quality Tools
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting

### Best Practices
- Component composition
- Custom hooks for logic reuse
- Proper error handling
- Loading states management

## 👨‍💻 Author

Mahmudul Hasan

---