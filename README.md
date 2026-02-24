# Workmanship - App Showcase Website

A modern, animated showcase website for the Workmanship Christian app. Built with Next.js 14, React 18, and Tailwind CSS.

## 🎯 Overview

Workmanship is a platform dedicated to helping believers grow in their faith through:
- **Bible Trivia** - Interactive biblical knowledge challenges
- **Prayer Requests** - Community-driven prayer support
- **Faith Feed** - Daily inspirational updates
- **Topics & Learning** - Curated spiritual topics
- **Daily Verses** - Personalized scripture
- **Community Hub** - Connect with believers worldwide

This repository contains the **app showcase/marketing website** that presents these features with beautiful animations and gradients.

## 🚀 Quick Start

### Local Development

```bash
# Navigate to project
cd workman

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

**Want to launch on your custom domain?**

→ See **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** for fastest path to live (5-10 minutes)

### Full Guides

1. **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** - Quick start (recommended for most users)
2. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Detailed deployment instructions
3. **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre-launch checklist
4. **[.github/GITHUB_ACTIONS_SETUP.md](./.github/GITHUB_ACTIONS_SETUP.md)** - Automated deployment

### One-Click Deploy (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/workmanshiptnjt/workman&project-name=workmanship&repository-name=workman)

## 📁 Project Structure

```
workman/
├── app/
│   ├── page.tsx              # Main showcase landing page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles + animations
│   ├── daily-verse/          # Daily verse page
│   ├── devotionals/          # Devotional articles
│   ├── prayer-journal/       # Prayer journaling
│   ├── profile/              # User profile
│   └── api/                  # API routes
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Footer.tsx            # Footer component
│   ├── FeatureShowcase.tsx   # Feature card component
│   ├── VerseCard.tsx         # Scripture display
│   ├── QuickStats.tsx        # Statistics dashboard
│   └── index.ts              # Component exports
├── lib/                       # Utility functions
├── public/                    # Static assets
├── .env.example               # Environment variable template
├── .env.local                 # Local development variables
├── .env.production            # Production variables
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework
- **Runtime**: [React 18](https://react.dev/) - UI library
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- **Animations**: Pure CSS keyframes (no external libraries)

## 🎨 Features

✨ **Beautiful Design**
- Dark theme with purple accents
- Smooth CSS animations
- Responsive mobile-first design
- Gradient backgrounds

🚀 **Performance**
- Optimized images
- Minified CSS/JS
- Server-side rendering
- Zero JavaScript for critical path

🔍 **SEO Optimized**
- Meta tags for all pages
- Open Graph configuration
- Twitter card support
- Structured data ready

🔒 **Security**
- Security headers configured
- No external tracking (privacy-first)
- Type-safe with TypeScript

## 📦 Environment Variables

### Required (for deployment)
```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/workmanship
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.workmanship
```

### Optional
```env
NEXT_PUBLIC_TWITTER_HANDLE=@WorkmanshipApp
NEXT_PUBLIC_CREATOR_EMAIL=contact@workmanship.com
```

See `.env.example` for all available variables.

## 🚢 Building & Running

### Development
```bash
npm run dev
```
Server runs on `http://localhost:3000` with hot reload.

### Production Build
```bash
npm run build
npm start
```
Optimized production bundle.

### Linting
```bash
npm run lint
```
ESLint validation for code quality.

## 📱 Responsive Design

The site is fully responsive and tested on:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1280px+)

## 🎯 Deployment Platforms

This project is ready for:
- **[Vercel](https://vercel.com)** (Recommended - zero-config)
- **[Netlify](https://netlify.com)** - Connected to Git
- **Self-hosted** - Docker or Node.js
- **AWS, Google Cloud, Azure** - Full instructions in deployment guide

## 📊 Performance Metrics

Optimized for:
- **PageSpeed**: 90+ (desktop)
- **Lighthouse**: 95+ (performance)
- **First Contentful Paint**: <1.5s
- **Cumulative Layout Shift**: <0.1

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add: description"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Open Pull Request

## 📝 License

MIT License - See LICENSE file for details.

## 👥 Team

**Workmanship** is built by believers for believers with a passion for digital discipleship.

- **Website**: [workmanship.app](https://workmanship.app)
- **Email**: contact@workmanship.com
- **Social**: [@WorkmanshipApp](https://twitter.com/workmanshipapp)

## 🙏 Support

For issues, questions, or suggestions:
1. Check existing [GitHub Issues](https://github.com/workmanshiptnjt/workman/issues)
2. Open a new issue with clear description
3. Include screenshots if applicable

## 📌 Roadmap

- [ ] Blog section with faith articles
- [ ] Prayer community forums
- [ ] User testimonials section
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Analytics dashboard

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)

---

**Ready to share the faith? Deploy your showcase today!** 🚀

See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) to get started.