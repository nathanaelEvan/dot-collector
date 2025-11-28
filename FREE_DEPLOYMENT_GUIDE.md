# 🚀 Free Deployment Guide for Dot Collector

This guide will walk you through deploying Dot Collector completely **FREE** with a custom domain. Perfect for beginners with no coding experience!

## 🎯 Overview

We'll use:
- **Vercel** or **Netlify** - Free hosting (unlimited projects)
- **Freenom** or **DuckDNS** - Free domain (optional)
- **Firebase** - Free tier (generous limits)
- **GitHub** - Free repository

**Total Cost: $0/month** ✨

---

## 📋 Prerequisites

- Gmail account (for Firebase and GitHub)
- Your project files ready
- About 30 minutes

---

## Step 1: Set Up Firebase (Backend)

### 1.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name: `dot-collector` (or your choice)
4. **Disable** Google Analytics (not needed)
5. Click **Create Project**

### 1.2 Enable Authentication

1. In Firebase Console, click **Authentication**
2. Click **Get Started**
3. Enable **Email/Password**:
   - Click **Email/Password**
   - Toggle **Enable**
   - Click **Save**
4. Add your admin user:
   - Click **Users** tab
   - Click **Add User**
   - Email: `your-email@gmail.com`
   - Password: `YourSecurePassword123!`
   - Click **Add User**

### 1.3 Create Firestore Database

1. Click **Firestore Database** in sidebar
2. Click **Create Database**
3. Choose **Start in production mode**
4. Select location closest to you
5. Click **Enable**

### 1.4 Deploy Security Rules

1. In Firestore Database, click **Rules** tab
2. Replace content with rules from `firestore.rules` file
3. Click **Publish**

### 1.5 Get Firebase Config

1. Click gear icon ⚙️ (Project Settings)
2. Scroll to **Your apps**
3. Click **Web** icon `</>`
4. Register app name: `dot-collector-web`
5. **Copy the configuration** - you'll need this!

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "dot-collector-xxxxx.firebaseapp.com",
  projectId: "dot-collector-xxxxx",
  storageBucket: "dot-collector-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
};
```

---

## Step 2: Prepare Your Code

### 2.1 Update Firebase Config

1. Open `src/firebase.js`
2. Replace firebaseConfig with YOUR config from Step 1.5
3. Save the file

### 2.2 Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

---

## Step 3: Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Completely free for personal projects
- ✅ Automatic HTTPS
- ✅ Free `.vercel.app` subdomain
- ✅ Custom domain support
- ✅ Auto-deploys from GitHub

### 3.1 Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **New Repository**
3. Name: `dot-collector`
4. Make it **Public** or **Private**
5. Click **Create Repository**

### 3.2 Push Your Code

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dot-collector.git
git push -u origin main
```

### 3.3 Deploy with Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **Sign Up** → Continue with GitHub
3. Click **Import Project**
4. Find your `dot-collector` repository
5. Click **Import**
6. **Configure**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**

🎉 Your app will be live at `https://your-app.vercel.app` in ~2 minutes!

---

## Step 4: Set Up Custom Domain (FREE)

### Option A: Freenom (Free .tk, .ml, .ga, .cf, .gq)

1. Go to [Freenom](https://www.freenom.com)
2. Search for domain: `dot-collector.tk`
3. Check availability
4. Click **Get it now** → **Checkout**
5. Period: **12 Months @ FREE**
6. Create account and complete

### Option B: DuckDNS (Free subdomain)

1. Go to [DuckDNS](https://www.duckdns.org/)
2. Sign in with any account
3. Enter subdomain: `dot-collector`
4. You'll get: `dot-collector.duckdns.org`

### Option C: Vercel Subdomain (Easiest)

Your app is already live at:
```
https://dot-collector-yourname.vercel.app
```

**For different routes:**
- Admin: `https://dot-collector-yourname.vercel.app/admin`
- Users: `https://dot-collector-yourname.vercel.app`

### 4.1 Connect Custom Domain to Vercel

1. In Vercel Dashboard, click your project
2. Go to **Settings** → **Domains**
3. Enter your domain: `dot-collector.tk` (or your domain)
4. Click **Add**
5. Follow DNS configuration instructions:
   - **For Freenom**:
     1. Go to Freenom → My Domains → Manage Domain
     2. Click **Manage Freenom DNS**
     3. Add Record:
        - Type: `A`
        - Name: `@`
        - Target: `76.76.21.21` (Vercel IP)
     4. Add second record:
        - Type: `CNAME`
        - Name: `www`
        - Target: `cname.vercel-dns.com`
   - **For DuckDNS**:
     1. Point to Vercel IP in DuckDNS settings

6. Wait 24-48 hours for DNS to propagate

---

## Step 5: Route Configuration

Your app now has two routes:

### Admin Route
**URL**: `https://your-domain.com/admin`

**Purpose**: Teachers/facilitators login to create sessions

**Login Credentials**: 
- Email: (the one you set in Firebase)
- Password: (the one you set in Firebase)

### User Route
**URL**: `https://your-domain.com`

**Purpose**: Participants join sessions

**Requirements**:
- Name
- Session code (6 characters from admin)

---

## Step 6: Maintenance & Monitoring

### 6.1 Monitor Firebase Usage

1. Go to Firebase Console
2. Click **Usage and Billing**
3. Check:
   - **Firestore reads/writes**: 50k/day free
   - **Authentication**: Unlimited free
   - **Storage**: 1GB free

### 6.2 Update Your App

```bash
# Make changes locally
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will **automatically redeploy** within 2 minutes!

### 6.3 View Deployment Logs

1. Vercel Dashboard → Your Project
2. Click **Deployments**
3. Click any deployment to see logs

---

## 💰 Cost Breakdown

| Service | Free Tier | Your Cost |
|---------|-----------|-----------|
| Vercel Hosting | Unlimited | **$0** |
| Firebase (Firestore + Auth) | 50k reads/day | **$0** |
| Domain (Freenom) | 1 domain/year | **$0** |
| GitHub | Unlimited public repos | **$0** |
| **TOTAL** | **All Included** | **$0/month** |

---

## 🔒 Security Best Practices

### 1. Environment Variables (Advanced)

For extra security, use environment variables:

1. In Vercel Dashboard → Settings → Environment Variables
2. Add:
   - `VITE_FIREBASE_API_KEY`: Your API key
   - `VITE_FIREBASE_AUTH_DOMAIN`: Your auth domain
   etc.

3. Update `src/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ... etc
};
```

### 2. Firestore Security Rules

Already configured in `firestore.rules`. Key protections:
- Users can only read/write their own data
- Reviews require authentication
- Session access is restricted

### 3. Admin Password

Use a strong password for admin account:
- 12+ characters
- Mix of letters, numbers, symbols
- Don't share publicly

---

## 🆘 Troubleshooting

### "Failed to fetch" errors
- **Solution**: Check Firebase config in `src/firebase.js` matches your Firebase project

### Admin can't login
- **Solution**: Verify email/password in Firebase Console → Authentication → Users

### Custom domain not working
- **Solution**: Wait 24-48 hours for DNS propagation. Check DNS records in Freenom/DuckDNS

### Build fails on Vercel
- **Solution**: 
  1. Check build command is `npm run build`
  2. Check output directory is `dist`
  3. View build logs for errors

### "Offline" errors
- **Solution**: Enable IndexedDB persistence (already done in `src/firebase.js`)

---

## 📊 Scaling (When You Outgrow Free Tier)

**Firebase Free Tier Limits:**
- 50,000 reads/day
- 20,000 writes/day
- 20,000 deletes/day

**Example**: A class of 30 students in one session typically uses:
- ~500 reads
- ~100 writes

**You can handle ~100 sessions/day on free tier!**

**If you exceed free tier:**
- Firebase: Pay-as-you-go (~$0.06 per 100k reads)
- Vercel: Still free for personal use
- Domain: ~$10/year for .com domain

---

## 🎓 Summary

You now have:
- ✅ Live website accessible globally
- ✅ Separate admin and user access
- ✅ Free hosting forever (as long as it's personal use)
- ✅ Optional custom domain
- ✅ Automatic deployments from GitHub
- ✅ HTTPS security included

**Your URLs:**
- Admin Login: `https://your-domain.com/admin`
- User Join: `https://your-domain.com`

**Admin Credentials:**
- Email: (your admin email from Firebase)
- Password: (your admin password from Firebase)

Share the user URL with your students/team and share the session code after creating a session!

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router](https://reactrouter.com/)
- [Vite Guide](https://vitejs.dev/guide/)

Need help? Open an issue on GitHub!

---

**🎉 Congratulations!** Your Dot Collector app is now live and completely free to use!
