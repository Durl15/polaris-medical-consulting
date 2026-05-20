# GitHub + Netlify Deployment Walkthrough

## Prerequisites
- GitHub account (github.com)
- Netlify account (netlify.com)
- NewsAPI account with API key (newsapi.org)
- Node.js and npm installed locally

## Step 1: Prepare Your Local Files

1. Download the complete app files from Claude (as zip)
2. Extract to: `C:\Projects\polaris-app`
3. Copy your headshot to: `C:\Projects\polaris-app\public\images\dr-johnson.jpg`
   - Rename from SARAH-14.jpg to dr-johnson.jpg

## Step 2: Test Locally

```powershell
# Open PowerShell in C:\Projects\polaris-app

# Install dependencies
npm install

# Create .env file
notepad .env
# Paste: VITE_NEWSAPI_KEY=your_key_here
# Replace with your NewsAPI key from https://newsapi.org

# Run development server
npm run dev
# Visit http://localhost:3000 in browser
# Test all pages and the news search function
```

## Step 3: Initialize Git Repository

```powershell
# In PowerShell at C:\Projects\polaris-app

git init
git add .
git commit -m "Initial commit - Polaris Medical Consulting website"
```

## Step 4: Create GitHub Repository

1. Go to github.com
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `polaris-medical-consulting`
4. Description: "Polaris Medical Consulting website"
5. Set to Public (so Netlify can access it)
6. Do NOT initialize with README, .gitignore, or license (you already have these)
7. Click "Create repository"

## Step 5: Connect Local Git to GitHub

GitHub will show you these commands. Copy and paste into PowerShell:

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/polaris-medical-consulting.git
git push -u origin main

# It will ask for GitHub credentials - use your GitHub password or Personal Access Token
```

## Step 6: Deploy to Netlify

1. Go to netlify.com and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as provider
4. Authorize Netlify to access your GitHub account
5. Select your `polaris-medical-consulting` repository
6. Netlify auto-detects build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Wait for deployment to complete (2-3 minutes)
9. You'll get a Netlify domain like `random-words-123456.netlify.app`

## Step 7: Add Environment Variables to Netlify

1. In Netlify dashboard, select your site
2. Click "Site settings" → "Build & deploy" → "Environment"
3. Click "Edit variables"
4. Add:
   - Key: `VITE_NEWSAPI_KEY`
   - Value: `your_newsapi_key_here` (from newsapi.org)
5. Save
6. Click "Deploys" → "Trigger deploy" → "Deploy site" to redeploy with env vars

## Step 8: Verify Deployment

1. Visit your Netlify domain
2. Test all pages load correctly
3. Test the news search function (requires environment variable to be set)
4. Check that Dr. Johnson's headshot appears on About page
5. Verify contact form works

## Making Future Updates

When you want to update content:

```powershell
# In C:\Projects\polaris-app

# Make changes to files (e.g., src/pages/Services.jsx)

# Commit and push
git add .
git commit -m "Update services descriptions"
git push origin main

# Netlify automatically redeploys within 1-2 minutes
```

## Troubleshooting

### "npm install" fails
- Make sure Node.js is installed: `node --version`
- Try clearing npm cache: `npm cache clean --force`
- Delete node_modules folder and try again: `npm install`

### News section shows error
- Verify VITE_NEWSAPI_KEY is set in Netlify environment variables
- Check your NewsAPI key is valid at newsapi.org
- Redeploy site after adding environment variable

### Headshot not showing
- Make sure file is at: `public/images/dr-johnson.jpg`
- File must be .jpg (not .png)
- Clear browser cache (Ctrl+Shift+Delete)

### Git push fails
- Make sure remote is set: `git remote -v`
- May need to create GitHub Personal Access Token:
  - github.com → Settings → Developer settings → Personal access tokens
  - Use token instead of password when prompted

### Netlify says "build failed"
- Check Netlify deploy logs: Click "Deploys" → latest deploy → "Deploy log"
- Common issues: missing package.json, wrong build command
- Make sure all files were pushed to GitHub: `git status`

## Custom Domain (Optional)

1. In Netlify dashboard, click "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., polaris-medical-consulting.com)
4. Follow Netlify's DNS setup instructions
5. May take 24-48 hours for DNS to propagate

## Support Links

- Netlify docs: https://docs.netlify.com
- GitHub docs: https://docs.github.com
- NewsAPI: https://newsapi.org/docs
- React: https://react.dev
- Tailwind: https://tailwindcss.com/docs

---

Your site will be live and automatically redeploy whenever you push changes to GitHub!
