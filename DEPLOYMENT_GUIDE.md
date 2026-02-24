# Deployment Guide - Workmanship Showcase

This guide explains how to deploy the Workmanship app showcase to your custom domain.

## Quick Start - Vercel (Recommended)

### 1. Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Update: Environment configuration for custom domain"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository (`workmanshiptnjt/workman`)
4. Select the `workman` directory as root
5. Click **"Deploy"**

### 3. Configure Environment Variables in Vercel

1. In your Vercel project, go to **Settings → Environment Variables**
2. Add these variables:

```
NEXT_PUBLIC_APP_NAME=Workmanship
NEXT_PUBLIC_APP_DESCRIPTION=Grow Your Faith Daily
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/workmanship
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.workmanship
```

3. Set the **Environment** to apply to: **Production, Preview, Development**

### 4. Add Custom Domain

1. In Vercel project → **Settings → Domains**
2. Click **"Add"** and enter your domain (e.g., `workmanship.app`)
3. Choose one of two options:

**Option A: Using Vercel Nameservers (Recommended)**
- Update your domain registrar to use Vercel's nameservers
- This gives Vercel full control of your DNS

**Option B: Using CNAME Record**
- Add a CNAME record pointing to `cname.vercel.com`
- Keep your current domain registrar

5. SSL certificate auto-generates (takes 1-5 minutes)

---

## Alternative: Self-Hosted Deployment

### Prerequisites
- VPS or dedicated server
- Node.js 18+ installed
- Nginx or Apache (for reverse proxy)
- Domain registered and configured

### Step 1: Build Locally

```bash
cd workman
npm install
npm run build
```

### Step 2: Transfer to Server

```bash
# Upload project to server (via rsync, SCP, or Git)
rsync -avz --delete ./ user@server.com:/var/www/workmanship/
```

### Step 3: Setup on Server

```bash
# SSH into server
ssh user@server.com

# Navigate to project
cd /var/www/workmanship

# Install dependencies (production only)
npm install --production

# Create .env.local with production values
cat > .env.local << EOF
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/workmanship
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.workmanship
EOF

# Build application
npm run build
```

### Step 4: Configure Nginx

```nginx
# /etc/nginx/sites-available/workmanship
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: Setup SSL (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com

# Update Nginx config
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Step 6: Run Application

```bash
# Option 1: PM2 (Recommended - auto-restart)
npm install -g pm2
pm2 start npm --name "workmanship" -- start
pm2 startup
pm2 save

# Option 2: Systemd Service
sudo nano /etc/systemd/system/workmanship.service
```

**Systemd Service Example:**
```ini
[Unit]
Description=Workmanship App
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/workmanship
ExecStart=/usr/bin/npm start
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable workmanship
sudo systemctl start workmanship
```

---

## Environment Variables Reference

### Local Development
- Edit `.env.local` for your local machine
- Never commit `.env.local` to git

### For Vercel
- Set in Vercel dashboard → Project Settings → Environment Variables
- Apply to: Production, Preview, Development

### Key Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_BASE_URL` | Your domain URL | `https://workmanship.app` |
| `NEXT_PUBLIC_APP_NAME` | App display name | `Workmanship` |
| `NEXT_PUBLIC_APP_STORE_URL` | iOS app store link | `https://apps.apple.com/app/...` |
| `NEXT_PUBLIC_GOOGLE_PLAY_URL` | Android store link | `https://play.google.com/store/...` |
| `NEXT_PUBLIC_TWITTER_HANDLE` | For social meta tags | `@WorkmanshipApp` |

---

## DNS Configuration

### For Vercel
1. Update your domain registrar to use nameservers:
   - `ns1.vercel.com`
   - `ns2.vercel.com`
   - `ns3.vercel.com`
   - `ns4.vercel.com`

### For Self-Hosted
1. Point your domain's A record to your server IP:
   ```
   Type: A
   Name: @
   Value: your.server.ip.address
   ```

2. Add www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: yourdomain.com
   ```

---

## Monitoring & Maintenance

### Vercel Analytics
- Built-in Web Analytics available
- Go to **Analytics** tab in Vercel dashboard
- View page performance metrics

### Self-Hosted Monitoring
- Check server resources: `htop`
- View application logs: `pm2 logs workmanship`
- Monitor uptime with services like UptimeRobot

---

## Update Deployment

### Vercel (Automatic)
1. Push changes to GitHub main branch
2. Vercel auto-deploys (no manual action needed)

### Self-Hosted (Manual)
```bash
# Pull latest changes
git pull origin main

# Rebuild
npm run build

# Restart application
pm2 restart workmanship
```

---

## Troubleshooting

### Domain Not Resolving
- DNS propagation takes 1-48 hours
- Use `nslookup yourdomain.com` to check DNS

### SSL Certificate Issues
- Vercel: Auto-generated, check Settings → Domains
- Self-Hosted: `sudo certbot renew --dry-run`

### 502 Bad Gateway
- Self-Hosted: Check if Next.js is running on port 3000
- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`

### Slow Performance
- Enable gzip compression in Nginx
- Use CDN (Cloudflare recommended)
- Check server resources with `free -h` and `df -h`

---

## Support

For issues:
1. Check deployment logs
2. Verify environment variables are set correctly
3. Test locally with `npm run build && npm start`
4. Check firewall/security group rules
