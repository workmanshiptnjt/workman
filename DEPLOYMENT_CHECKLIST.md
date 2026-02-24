# Deployment Checklist - Workmanship

Use this checklist to ensure everything is configured correctly for your custom domain deployment.

## Pre-Deployment Setup

### Environment Configuration
- [ ] Review `.env.example` - contains all available variables
- [ ] Update `.env.local` with your local development values
- [ ] Update `.env.production` with your production domain
- [ ] Test locally: `npm run build && npm start`

### Repository
- [ ] All changes committed to GitHub
- [ ] Repository is public (or add GitHub token to Vercel)
- [ ] Branch is `main` (or update workflow file)

---

## Vercel Deployment (Recommended)

### Vercel Project Setup
- [ ] Create Vercel account at [vercel.com](https://vercel.com)
- [ ] Connect your GitHub repository to Vercel
- [ ] Select `workman` as the root directory
- [ ] Click "Deploy" and wait for initial deployment

### Environment Variables in Vercel
- [ ] Go to **Settings** → **Environment Variables**
- [ ] Add `NEXT_PUBLIC_BASE_URL` = `https://yourdomain.com`
- [ ] Add `NEXT_PUBLIC_APP_STORE_URL`
- [ ] Add `NEXT_PUBLIC_GOOGLE_PLAY_URL`
- [ ] Add `NEXT_PUBLIC_TWITTER_HANDLE`
- [ ] Set environment: **Production, Preview, Development**
- [ ] Click "Save"

### Custom Domain Setup
- [ ] Go to **Settings** → **Domains**
- [ ] Click "Add" and enter your domain
- [ ] Choose DNS method:
  - [ ] **Option A**: Update domain registrar to use Vercel nameservers
  - [ ] **Option B**: Add CNAME record pointing to `cname.vercel.com`
- [ ] Wait for SSL certificate (1-5 minutes)
- [ ] Test domain in browser: `https://yourdomain.com`

### GitHub Actions Automation (Optional but Recommended)
- [ ] Get `VERCEL_TOKEN` from Vercel account settings
- [ ] Get `VERCEL_PROJECT_ID` from Vercel project settings
- [ ] Go to GitHub repo → **Settings** → **Secrets and variables** → **Actions**
- [ ] Add 3 secrets:
  - [ ] `VERCEL_TOKEN` = your token
  - [ ] `VERCEL_PROJECT_ID` = your project ID
  - [ ] `VERCEL_ORG_ID` = your team ID (if using team account)
- [ ] Verify `.github/workflows/deploy.yml` exists
- [ ] Test by making a commit: `git push origin main`
- [ ] Check **Actions** tab to see workflow run
- [ ] Verify deployment in Vercel dashboard

---

## Alternative: Self-Hosted Deployment

### Server Preparation
- [ ] VPS/Server provisioned with Node.js 18+
- [ ] Domain DNS A record pointing to server IP
- [ ] SSH access configured
- [ ] Nginx/Apache installed

### Application Setup on Server
- [ ] Clone repository to `/var/www/workmanship`
- [ ] Run `npm install --production`
- [ ] Update `.env.local` with production values
- [ ] Build: `npm run build`

### Reverse Proxy Configuration
- [ ] Configure Nginx to proxy to localhost:3000
- [ ] OR configure Apache with mod_proxy
- [ ] Enable CORS headers if needed

### SSL Certificate
- [ ] Install Certbot: `sudo apt install certbot`
- [ ] Generate certificate: `sudo certbot certonly --nginx -d yourdomain.com`
- [ ] Auto-renew configured: `sudo certbot renew --dry-run`

### Application Server
- [ ] Install PM2: `npm install -g pm2`
- [ ] Start app: `pm2 start npm --name "workmanship" -- start`
- [ ] Setup autostart: `pm2 startup && pm2 save`
- [ ] OR configure Systemd service

### Monitoring
- [ ] Check logs: `pm2 logs`
- [ ] Monitor uptime with UptimeRobot or similar
- [ ] Setup alerts for critical issues

---

## Post-Deployment Verification

### Functionality Tests
- [ ] Homepage loads without errors
- [ ] All animations render smoothly
- [ ] Features grid displays all 6 cards
- [ ] Testimonials section loads
- [ ] CTA buttons functional
- [ ] Responsive on mobile (test with DevTools)

### Performance Tests
- [ ] Run Google PageSpeed Insights: `https://yourdomain.com`
- [ ] Check Lighthouse score (mobile & desktop)
- [ ] Image optimization verified
- [ ] No 404 errors in console

### SEO & Meta Tags
- [ ] Open Graph image shows correctly (share on social)
- [ ] Meta description is appropriate
- [ ] Structured data (JSON-LD) validated
- [ ] Canonical URL is correct
- [ ] robots.txt is proper

### Security
- [ ] HTTPS working (lock icon in browser)
- [ ] Security headers present: `curl -I https://yourdomain.com`
- [ ] No console errors or warnings
- [ ] X-Frame-Options header set
- [ ] Content Security Policy configured

### DNS & Domain
- [ ] Domain resolves: `nslookup yourdomain.com`
- [ ] SSL certificate valid: `openssl s_client -connect yourdomain.com:443`
- [ ] www subdomain configured (if needed)
- [ ] Email records configured (for future use)

---

## Monitoring & Maintenance

### Weekly
- [ ] Check deployment status in Vercel/Server
- [ ] Monitor uptime status
- [ ] Review analytics (if enabled)

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Check SSL certificate expiration

### Repository
- [ ] Keep `.env.local` in `.gitignore` (should already be there)
- [ ] Update documentation as needed
- [ ] Tag releases in Git

---

## Accessing Your Site

After deployment:
- [ ] **Production URL**: `https://yourdomain.com`
- [ ] **Vercel Dashboard**: `https://vercel.com/dashboard`
- [ ] **GitHub Repository**: `https://github.com/workmanshiptnjt/workman`
- [ ] **Server SSH**: `ssh user@your.server.ip`

---

## Troubleshooting Quick Links

- Vercel DNS: [docs.vercel.com/docs/concepts/projects/domains](https://vercel.com/docs/concepts/projects/domains)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Deploy Guide: See `DEPLOYMENT_GUIDE.md`
- GitHub Actions: See `.github/GITHUB_ACTIONS_SETUP.md`

---

## Support Resources

- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **SSL/HTTPS**: https://www.ssl.com

---

## Final Checklist

- [ ] All environment variables configured
- [ ] Domain pointing to Vercel/Server
- [ ] SSL certificate installed
- [ ] Automated deployment working (if using GitHub Actions)
- [ ] Site accessible at `https://yourdomain.com`
- [ ] All tests passing
- [ ] Analytics/Monitoring enabled
- [ ] Backup strategy in place
- [ ] Team members have access to Vercel/Server
- [ ] Documentation updated

**Ready to launch!** 🚀
