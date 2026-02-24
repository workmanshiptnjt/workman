# GitHub Actions + Vercel Setup Guide

This guide shows how to setup automated deployment from GitHub to Vercel using GitHub Actions.

## Prerequisites

1. GitHub repository at `github.com/workmanshiptnjt/workman`
2. Vercel account (sign up at [vercel.com](https://vercel.com))
3. Vercel project created and connected to your GitHub repo

## Step 1: Get Vercel Tokens

### Get VERCEL_TOKEN

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click **"Create"**
3. Name it: `GitHub Actions`
4. Copy the token
5. **Save this token** - you'll need it in the next step

### Get VERCEL_ORG_ID and VERCEL_PROJECT_ID

1. In your Vercel project, go to **Settings**
2. Look for:
   - **Project ID** - Copy this (this is your VERCEL_PROJECT_ID)
   - **Team ID** (if using team account) - This is your VERCEL_ORG_ID
   - If using personal account, you may not have an ORG ID

Alternative - Run this command locally:
```bash
cd workman
npm i -g vercel
vercel link  # Follow prompts to link your project
# This creates a .vercel/project.json file with the IDs
```

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"** and add:

| Secret Name | Value |
|------------|-------|
| `VERCEL_TOKEN` | (Your token from Step 1) |
| `VERCEL_ORG_ID` | (Your org/team ID - only if using team account) |
| `VERCEL_PROJECT_ID` | (Your project ID) |

**Example:**
- Secret: `VERCEL_TOKEN`
- Value: `abc123def456...` (the full token)

Click **"Add secret"** for each one.

## Step 3: Verify Workflow File

Check that `.github/workflows/deploy.yml` exists in your repo with the correct content.

The workflow will:
- Run on every push to `main` branch
- Install dependencies
- Run linter (optional)
- Build the project
- Deploy to Vercel (with `--prod` flag for main branch)

## Step 4: Configure Environment Variables

### In Vercel Dashboard

1. Go to your Vercel project
2. **Settings** → **Environment Variables**
3. Add your production variables:

```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/workmanship
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.workmanship
```

4. Make sure to select:
   - **Environment**: Production
   - Click **"Save"**

## Step 5: Test the Workflow

### Make a test commit

```bash
git commit --allow-empty -m "test: trigger GitHub Actions workflow"
git push origin main
```

### Monitor deployment

1. Go to your GitHub repo
2. Click **Actions** tab
3. You should see the workflow running
4. Click on it to see real-time logs
5. Once complete, check Vercel dashboard for deployment

## How It Works

```
┌─────────────────┐
│  Push to main   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│  GitHub Actions Workflow    │
│  • Install dependencies     │
│  • Run linter              │
│  • Build project           │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│  Deploy to Vercel (--prod)  │
│  • Build on Vercel infra    │
│  • Run tests                │
│  • Deploy to production     │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│  Live on yourdomain.com ✅  │
└─────────────────────────────┘
```

## Troubleshooting

### Workflow Fails to Run

- Check that `.github/workflows/deploy.yml` exists
- Verify branch is `main` (not `master`)
- Check GitHub Actions is enabled: **Settings** → **Actions** → **General** → Enable

### Vercel Deployment Fails

Check logs in Actions tab:
- **Missing secrets**: Verify all 3 secrets are added
- **Auth error**: Check VERCEL_TOKEN is copied correctly (no extra spaces)
- **Project not found**: Verify VERCEL_PROJECT_ID is correct

### Environment Variables Not Applied

1. Add them in Vercel dashboard (not GitHub Actions)
2. Make sure to select **Production** environment
3. Trigger a new deployment after adding variables

### Rebuild Without Code Changes

```bash
git commit --allow-empty -m "rebuild: force deployment"
git push origin main
```

## Monitoring Deployments

### In GitHub
- **Settings** → **Branches** → **Branch protection rules**
- Require status checks to pass before merging

### In Vercel
- **Analytics** tab shows deployment history
- **Project Settings** → **Git** shows connected workflows

## Cleanup

To remove automated deployments:
1. Delete `.github/workflows/deploy.yml`
2. Or disable Actions in **Settings** → **Actions** → **General**

## Next Steps

- Setup **branch preview deployments** for pull requests
- Add **Slack notifications** for deployments
- Setup **performance monitoring** in Vercel Analytics
- Configure **custom domain** in Vercel dashboard
