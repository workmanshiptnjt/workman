# Workmanship - Christian Devotional Web App

A modern Next.js web application for daily Christian spirituality, featuring daily verses, devotionals, prayer journaling, and more.

## Features

- 📖 **Daily Verse** - Fresh scripture every day
- 📚 **Devotionals** - In-depth spiritual insights
- 🙏 **Prayer Journal** - Track and log your prayers
- 🔥 **Streaks** - Build consistent spiritual habits
- 👤 **User Profile** - Track your spiritual growth stats

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your configuration (optional for basic setup)

### Running the App

**Development:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production Build:**
```bash
npm run build
npm start
```

## Project Structure

```
workman/
├── app/
│   ├── api/              # API routes
│   ├── daily-verse/      # Daily verse page
│   ├── devotionals/      # Devotionals page
│   ├── prayer-journal/   # Prayer journal page
│   ├── profile/          # User profile page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable React components
├── lib/                  # Utility functions
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
Customize the faith color palette in `tailwind.config.js`

### Content
- Update daily verses in `/app/daily-verse/page.tsx`
- Add devotionals in `/app/devotionals/page.tsx`
- Customize prayer journal in `/app/prayer-journal/page.tsx`

## Future Enhancements

- [ ] Authentication (Supabase/Firebase)
- [ ] Database integration for user data
- [ ] Bible API integration
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Sharing functionality
- [ ] Comment and community features

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

**Workmanship** - Growing in faith, one day at a time. 🙏