# Polaris Medical Consulting - Setup & Deployment Guide

## Project Structure

```
polaris-app/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Resources.jsx
│   │   ├── InTheNews.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/
│       └── dr-johnson.jpg  (add your headshot here)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── .gitignore
```

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Headshot
- Copy your headshot image (SARAH-14.jpg) to `public/images/dr-johnson.jpg`
- Create the `public/images/` directory if it doesn't exist

### 3. Set Up NewsAPI
- Go to https://newsapi.org and sign up for a free account
- Copy your API key
- Create a `.env` file in the project root:
  ```
  VITE_NEWSAPI_KEY=your_api_key_here
  ```
- Replace `your_api_key_here` with your actual API key from NewsAPI

### 4. Run Development Server
```bash
npm run dev
```
- Open http://localhost:3000 in your browser
- Site will hot-reload as you make changes

### 5. Build for Production
```bash
npm run build
```
- Creates optimized build in the `dist/` directory

## Updating Content

### Home Page
- File: `src/pages/Home.jsx`
- The blurb is already in place
- Update the three feature cards as needed

### About Page
- File: `src/pages/About.jsx`
- Bio is already included
- Image path: `/images/dr-johnson.jpg`

### Services Page
- File: `src/pages/Services.jsx`
- Replace "Add your service description here" with actual descriptions
- Services are in the `services` array at the top of the file

### Resources Page
- File: `src/pages/Resources.jsx`
- Update resource titles, descriptions, and links
- Change `href="#"` to your actual resource URLs

### In the News
- File: `src/pages/InTheNews.jsx`
- Automatically fetches occupational medicine news from NewsAPI
- Users can search for specific topics
- No editing needed - this is dynamic

### Contact Form
- File: `src/pages/Contact.jsx`
- Industry dropdown is pre-populated
- Update the contact email in the "Get in Touch" section
- Form currently shows success message - you may want to integrate with a backend or email service later

## GitHub Setup

### 1. Create Repository
```bash
# In the polaris-app directory
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub
- Go to github.com and create a new repository called `polaris-medical-consulting`
- Don't initialize with README (you already have one)
- Follow GitHub's instructions to push:
  ```bash
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/polaris-medical-consulting.git
  git push -u origin main
  ```

## Netlify Deployment

### 1. Connect to Netlify
- Go to netlify.com and sign in (create account if needed)
- Click "New site from Git"
- Choose GitHub as provider
- Select your `polaris-medical-consulting` repository
- Netlify will auto-detect Vite setup

### 2. Configure Build Settings
- Build command: `npm run build`
- Publish directory: `dist`
- Click "Deploy site"

### 3. Add Environment Variables
- In Netlify dashboard, go to Site Settings → Build & Deploy → Environment
- Add environment variable:
  - Key: `VITE_NEWSAPI_KEY`
  - Value: Your NewsAPI key
- Redeploy site for changes to take effect

### 4. Custom Domain (Optional)
- In Netlify dashboard, go to Domain settings
- Add your custom domain and update DNS records as needed

## Troubleshooting

### News not loading
- Check that `VITE_NEWSAPI_KEY` environment variable is set in Netlify
- Verify API key is valid at newsapi.org
- Check browser console for errors (F12 → Console)

### Image not showing on About page
- Make sure headshot is at `public/images/dr-johnson.jpg`
- Restart dev server after adding image

### Styles look wrong
- Make sure Tailwind CSS compiled properly
- Run `npm install` again if CSS isn't working
- Clear browser cache (Ctrl+Shift+Delete)

### Build fails on Netlify
- Check that all files were pushed to GitHub
- Verify Node version - Netlify uses Node 18+ by default
- Check Netlify deploy logs for specific errors

## Git Workflow for Updates

```bash
# Make changes to files
# Then:
git add .
git commit -m "Update services descriptions"
git push origin main

# Netlify will automatically redeploy
```

## Next Steps

1. Add your headshot to `public/images/dr-johnson.jpg`
2. Get NewsAPI key and add to .env (local) and Netlify (production)
3. Update Services, Resources with your content
4. Test locally with `npm run dev`
5. Push to GitHub
6. Monitor Netlify deploy logs
7. Site will be live at your Netlify domain

## Support

For questions about:
- Tailwind CSS: https://tailwindcss.com/docs
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- NewsAPI: https://newsapi.org/docs

Good luck with the launch!
