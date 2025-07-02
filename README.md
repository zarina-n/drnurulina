# Dr. Nurulina - Personal Medical Practice Website

A modern, responsive website for a medical practice built with Next.js 15, featuring multilingual support and optimized user experience.

🌐 **Live Demo:** [drnurulina.vercel.app](https://drnurulina.vercel.app)

## 🏥 About

Personal website for Dr. Nurulina showcasing medical services, practice information, and patient resources. The site is designed to provide patients with easy access to essential information and streamlined appointment booking.

## ✨ Features

### Current Implementation
- **Responsive Design** - Mobile-first approach with seamless cross-device compatibility
- **Multilingual Support** - Built-in internationalization with i18next
- **Modern UI Components** - Clean, accessible interface using Shadcn/UI
- **Professional Layout** - Optimized for medical practice presentation
- **Performance Optimized** - Built with Next.js 15 and Turbopack

### Planned Features
- **Appointment Booking System** - Interactive calendar with scheduling logic
- **Patient Reviews** - Review submission and display functionality
- **Medical Guides** - Educational content and patient resources
- **Contact Forms** - Secure patient inquiry system
- **Admin Dashboard** - Content management for practice updates

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS, Shadcn/UI components
- **Animations:** Framer Motion
- **Internationalization:** i18next, i18nexus
- **Development:** ESLint, Prettier, Husky
- **Backend:** *In Planning* (considering MongoDB + Python/Django)

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── guides/        # Medical guides section
│   │   └── reception/     # Reception/contact pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Homepage
├── components/
│   ├── custom/            # Custom components
│   └── ui/                # Shadcn/UI components
├── data-jsons/            # Static data files
├── i18n/                  # Internationalization config
└── lib/                   # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd drnurulina-app
```

2. Install dependencies
```bash
yarn install
```

3. Start development server
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build production version
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix linting issues and format code
- `yarn typecheck` - Run TypeScript type checking
- `yarn nexus` - Pull latest translations

## 🌐 Internationalization

The website supports multiple languages using i18next and i18nexus for translation management. Language detection is automatic based on browser settings.

## 📱 Responsive Design

Built with mobile-first principles ensuring optimal experience across:
- Mobile devices (320px+)
- Tablets (768px+) 
- Desktop (1024px+)
- Large screens (1440px+)

## 🔧 Development

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript for type safety
- Lint-staged for staged file processing

### Component Architecture
- Reusable custom components
- Shadcn/UI for consistent design system
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Responsive homepage
- ✅ Multilingual support
- ✅ Professional design system
- 🔄 Content management

### Phase 2 (Next)
- 📅 Appointment booking system
- 💬 Patient reviews functionality
- 📚 Medical guides section
- 📧 Contact forms

### Phase 3 (Future)
- 🔧 Admin dashboard
- 🗄️ Database integration
- 🔐 User authentication
- 📊 Analytics integration

## 🤝 Contributing

This is a personal project for Dr. Nurulina's medical practice. For suggestions or issues, please open a GitHub issue.

## 📄 License

Private project - All rights reserved.

---

**Built with ❤️ for better patient care**
