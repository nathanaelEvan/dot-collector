# 🎯 Dot Collector - Peer Feedback Application

A real-time peer feedback tool inspired by Ray Dalio's "Dot Collector" system. Features comprehensive heatmap visualization, privacy controls, and multi-category feedback collection.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-9.x-FFA611?logo=firebase)

## ✨ Features

- **📊 Comprehensive Feedback Grid** - View all \\participants' ratings simultaneously in a Ray Dalio-style heatmap
- **🎨 4×5 Evaluation Matrix** - Four categories with five metrics each
- **🔒 Privacy Controls** - Toggle between "Always Reveal" and "Reveal at End" modes
- **👥 Real-time Collaboration** - Live updates as participants submit reviews
- **📱 Mobile Responsive** - Works seamlessly on all devices
- **🌙 Dark Mode** - Automatic dark mode with manual toggle
- **📄 PDF Export** - Export any participant's heatmap
- **🎯 Multi-Category Reviews** - Rate participants across all categories

## 🎭 User Roles

### Admin (Teacher/Facilitator)
- **Access**: `/admin` route
- **Authentication**: Email & Password
- **Capabilities**:
  - Create feedback sessions
  - Manage privacy settings
  - Control session status (start/end)
  - Export PDFs
  - View all participant feedback

### Participants (Students/Team Members)
- **Access**: `/` route
- **Authentication**: Name + Session Code
- **Capabilities**:
  - Join sessions with code
  - Submit reviews for peers
  - View feedback grid
  - See personal feedback summary
  - Edit reviews until session ends

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Firebase account (free)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dot-collector.git
cd dot-collector

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## 🔑 Admin Setup

### Step 1: Add Admin User to Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** → **Users**
4. Click **Add User**
5. Enter admin email and password
6. Save

### Step 2: Access Admin Panel

- Navigate to `http://localhost:3000/admin`
- Login with admin credentials
- Create and manage sessions

## 🎓 Usage

### For Admins:

1. Go to `/admin`
2. Login with email/password
3. Click **Create New Session**
4. Configure:
   - Privacy mode
   - Active category
5. Click **Start Session**
6. Share the 6-character code with participants
7. Monitor feedback in real-time
8. Export PDFs as needed
9. Click **End Session** when complete

### For Participants:

1. Go to `/` (home page)
2. Enter your name
3. Enter session code from admin
4. Click **Join Session**
5. Submit reviews in the **Vote** tab
6. View feedback in **The Grid** tab
7. Check personal feedback in **My Feedback** tab

## 📊 Evaluation Categories

### 1. Delivery Dynamics
- Voice Clarity
- Pacing & Flow
- Body Language
- Energy Level
- Professionalism

### 2. Content Strength
- Concept Clarity
- Depth of Analysis
- Argument Logic
- Evidence & Data
- Relevance

### 3. Audience Impact
- Engagement
- Interaction / Q&A
- Inspiration
- Empathy / Tone
- Key Takeaway

### 4. Structure & Visuals
- Visual Aids
- Organization
- Time Management
- Opening Hook
- Closing Impact

## 🎨 Score Legend

- **6** - Excellent (Dark Green)
- **5** - Very Good (Emerald)
- **4** - Good (Lime)
- **3** - Below Average (Amber)
- **2** - Poor (Orange)
- **1** - Very Poor (Red)

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore + Authentication)
- **Routing**: React Router
- **PDF**: jsPDF + html2canvas
- **Icons**: Lucide React

## 📁 Project Structure

```
dot-collector/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AdminLogin.jsx
│   │   │   └── UserJoin.jsx
│   │   ├── Teacher/
│   │   │   └── TeacherDashboard.jsx
│   │   ├── Student/
│   │   │   ├── StudentInterface.jsx
│   │   │   ├── VoteTab.jsx
│   │   │   ├── GridTab.jsx
│   │   │   └── MyFeedbackTab.jsx
│   │   └── Grid/
│   │       ├── ComprehensiveGrid.jsx
│   │       ├── HeatmapGrid.jsx
│   │       └── ScoreLegend.jsx
│   ├── hooks/
│   │   ├── useAuth.jsx
│   │   ├── useSession.js
│   │   └── useReviews.js
│   ├── utils/
│   │   ├── colors.js
│   │   └── exportPdf.js
│   ├── config/
│   │   └── evaluationConfig.js
│   ├── firebase.js
│   └── App.jsx
├── firestore.rules
└── package.json
```

## 🔐 Security

- Firestore security rules enforce:
  - Session-based access control
  - Review editability until session ends
  - Admin-only session creation
  - User can only update their own data

## 🌍 Deployment

See [FREE_DEPLOYMENT_GUIDE.md](./FREE_DEPLOYMENT_GUIDE.md) for complete instructions on:
- Deploying to Vercel/Netlify (free)
- Setting up custom domain (free options)
- Environment configuration
- Production optimization

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for effective peer feedback
