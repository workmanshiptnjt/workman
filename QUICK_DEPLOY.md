# Quick Start: Deploy to Custom Domain

Get your Workmanship showcase live in minutes!

## 🚀 The Fastest Path (Vercel)

### 1. Push to GitHub (1 minute)
```bash
git add .
git commit -m "Setup: Environment configuration"
git push origin main
```

### 2. Connect to Vercel (2 minutes)
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your GitHub repo: `workman`
4. Select root directory: `workman`
5. Click **"Deploy"**

✅ **Your site is now live at your-vercel-url.vercel.app**

### 3. Add Custom Domain (2 minutes)
1. In Vercel project → **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain: `yourdomain.com`
4. Update your DNS or Vercel nameservers
5. Wait 5-60 seconds, then test

✅ **Your site is live at yourdomain.com!**

### 4. Setup Automated Deployments (1 minute - Optional)
1. Get tokens from Vercel account settings
2. Go to GitHub repo → **Settings** → **Secrets**
3. Add:
   - `VERCEL_TOKEN`
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID` (if team account)

✅ **Future pushes to main auto-deploy!**

---

## 📋 Environment Files Already Created

We've created everything you need:

```
.env.example          # All available variables
.env.local            # Your local development values
.env.production       # Production values (update with your domain)
vercel.json           # Vercel configuration
next.config.js        # Next.js production config
.github/workflows/    # GitHub Actions automation
```

---

## 🔧 One-Time Configuration

### Before deploying, update these files:

#### `.env.production`
```bash
# Change this line to your actual domain:
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# Update your app store links:
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/workmanship
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.workmanship
```

#### `public/og-image.png` (Optional)
Create a social sharing image:
- Size: 1200x630px
- Save as: `public/og-image.png`
- Recommended: Use Canva or similar tool

---

## ✨ What's Ready

Your showcase already includes:

✅ **Environment-aware configuration**
- Automatically uses correct domain in dev/prod
- Easy to customize app store links

✅ **Production optimizations**
- Security headers configured
- Compressed assets
- Optimized images

✅ **SEO-ready**
- Meta tags use your domain
- Open Graph configured
- Twitter card ready

✅ **Deployment ready**
- Vercel config included
- GitHub Actions workflow
- Environment variable setup

---

## 📖 Full Guides

For detailed information, see:

1. **`DEPLOYMENT_GUIDE.md`** - Complete deployment instructions
2. **`.github/GITHUB_ACTIONS_SETUP.md`** - Automated deployment setup
3. **`DEPLOYMENT_CHECKLIST.md`** - Pre-launch checklist

---

## 🎯 Common Scenarios

### Scenario 1: Deploy to yourdomain.com

1. Update `.env.production`:
   ```
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```

2. In Vercel → Add domain `yourdomain.com`
3. Update DNS or use Vercel nameservers
4. Done! 🎉

### Scenario 2: Deploy multiple environments

Create multiple Vercel projects:
- `workmanship-staging.vercel.app` (for testing)
- `workmanship-prod.vercel.app` (for production)

Each with different environment variables.

### Scenario 3: Use with your own server

See `DEPLOYMENT_GUIDE.md` section on "Self-Hosted Deployment"

---

## 🔍 Testing Locally First

Before deploying:

```bash
cd workman
npm run build
npm start
```

Visit `http://localhost:3000` to test.

---

## ✅ Launch Checklist (Quick)

- [ ] Update `.env.production` with your domain
- [ ] Push to GitHub
- [ ] Create Vercel project
- [ ] Add custom domain in Vercel
- [ ] Test at `https://yourdomain.com`
- [ ] (Optional) Setup GitHub Actions for auto-deploy

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Domain not working | Wait 5-60 min for DNS, check DNS configuration |
| 502 Bad Gateway | Next.js failed to build - check Vercel logs |
| Environment vars not applying | Add them in Vercel dashboard, not GitHub |
| Old content showing | Clear browser cache or use incognito |
| SSL errors | Wait 1-5 minutes for certificate generation |

---

## 📞 Need Help?

1. **Vercel Docs**: https://vercel.com/docs
2. **Next.js Docs**: https://nextjs.org/docs
3. **GitHub Support**: https://github.com/support

---

## 🎉 You're Ready!

Your Workmanship showcase is production-ready. Deploy now and share your faith-building app with the world! 

**Total time to live: ~5-10 minutes**

Questions? Check the detailed guides above or reach out to the Workmanship team.
