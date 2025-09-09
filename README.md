# AI & Data Science Portfolio Dashboard

A dynamic, analytics-inspired portfolio website that showcases my journey in artificial intelligence and data science through an interactive dashboard interface with real-time GitHub integration.

## 🚀 Live Demo

[View Live Portfolio](your-portfolio-url.com)

## 📊 Overview

This portfolio transforms the traditional resume format into an engaging analytical dashboard, reflecting my passion for data visualization and AI. The website dynamically pulls data from my GitHub repositories to showcase real-time project statistics and contributions, creating a living portfolio that evolves with my work.

## ✨ Key Features

- **Dashboard Interface** - Analytics-inspired design with interactive charts and metrics
- **Real-time GitHub Integration** - Dynamic project data pulled directly from GitHub API
- **Interactive Visualizations** - Data-driven charts showing project statistics and contributions
- **Responsive Analytics Layout** - Dashboard components that adapt across all devices
- **Live Project Metrics** - Real-time updates of repository statistics, languages used, and commit activity
- **Performance Optimized** - Fast loading with efficient data fetching and caching

## 🎯 Portfolio Sections

### 📋 About Me
Complete personal story including background, interests, hobbies, and what drives my passion for AI/Data Science - not just the academic journey.

### 🔄 Currently
Real-time updates on current projects, research, learning goals, and what I'm actively working on in the AI/Data Science space.

### 🏆 Achievements
Showcase of accomplishments, certifications, competitions, publications, and notable milestones in my career.

### 🛠️ Technical Skills
Interactive skill visualization with proficiency levels in:
- Programming Languages (Python, R, SQL, JavaScript, etc.)
- AI/ML Frameworks (TensorFlow, PyTorch, Scikit-learn, etc.)
- Data Tools (Pandas, NumPy, Matplotlib, Tableau, etc.)
- Cloud Platforms (AWS, GCP, Azure)
- Databases and Big Data technologies

### 💼 Projects
Dynamic project showcase with live GitHub data including:
- Repository statistics and activity
- Language composition charts
- Commit history visualizations
- Live demo links and detailed case studies

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with dashboard aesthetics
- **Chart.js/D3.js** - Data visualization libraries
- **Axios** - HTTP client for API requests

### Data Integration
- **GitHub API** - Real-time repository and user data
- **GitHub REST API v4** - Advanced repository statistics
- **Local Storage** - Caching for performance optimization

### Development Tools
- **Vite** - Fast build tool and dev server
- **npm** - Package management
- **Git & GitHub** - Version control and hosting

### Deployment
- **Vercel/Netlify** - Serverless deployment platform

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- GitHub Personal Access Token (for API access)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ai-portfolio-dashboard.git
   ```

2. Navigate to project directory
   ```bash
   cd ai-portfolio-dashboard
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Create environment variables file
   ```bash
   cp .env.example .env.local
   ```

5. Add your GitHub token to `.env.local`
   ```bash
   REACT_APP_GITHUB_TOKEN=your_github_personal_access_token
   REACT_APP_GITHUB_USERNAME=your_github_username
   ```

6. Start development server
   ```bash
   npm run dev
   ```

7. Open `http://localhost:3000` in your browser

## 📁 Project Structure

```
ai-portfolio-dashboard/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── MetricsCard.jsx
│   │   │   └── ChartContainer.jsx
│   │   ├── AboutMe/
│   │   ├── Currently/
│   │   ├── Achievements/
│   │   ├── TechnicalSkills/
│   │   │   ├── SkillChart.jsx
│   │   │   └── TechStack.jsx
│   │   ├── Projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── GitHubStats.jsx
│   │   │   └── RepoChart.jsx
│   │   └── Layout/
│   ├── services/
│   │   ├── githubAPI.js
│   │   └── dataProcessor.js
│   ├── hooks/
│   │   ├── useGitHubData.js
│   │   └── useChartData.js
│   ├── utils/
│   │   ├── chartConfigs.js
│   │   └── dataFormatters.js
│   ├── styles/
│   │   ├── dashboard.css
│   │   └── variables.css
│   └── App.jsx
├── .env.example
└── README.md
```

## 🔧 GitHub Integration Setup

### Personal Access Token
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate a new token with `public_repo` scope
3. Add token to your environment variables

### API Endpoints Used
- User profile data
- Repository statistics
- Commit activity
- Language statistics
- Contribution graph data

## 🎨 Dashboard Customization

### Personal Data
Update your information in `src/data/personal.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "AI/Data Science Engineer",
  githubUsername: "yourusername",
  currentFocus: ["Machine Learning", "Deep Learning", "NLP"],
  // ... other details
}
```

### Skills Configuration
Customize your technical skills in `src/data/skills.js`:
```javascript
export const technicalSkills = {
  programming: ["Python", "R", "SQL", "JavaScript"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn"],
  dataTools: ["Pandas", "NumPy", "Matplotlib", "Tableau"],
  // ... proficiency levels and categories
}
```

### Dashboard Metrics
Configure displayed metrics in `src/config/dashboardConfig.js`

## 🚀 Deployment

### Environment Variables for Production
```bash
REACT_APP_GITHUB_TOKEN=your_production_github_token
REACT_APP_GITHUB_USERNAME=your_github_username
REACT_APP_API_BASE_URL=https://api.github.com
```

### Build and Deploy
```bash
npm run build
```

Deploy the `dist` folder to your preferred hosting platform.

## 🤝 Contributing

This portfolio showcases personal work, but I welcome feedback on:
- Dashboard UX improvements
- Data visualization suggestions  
- Performance optimizations
- New GitHub API integrations

## 📈 Features Roadmap

- [ ] Interactive ML model demos
- [ ] Blog post integration
- [ ] Advanced GitHub analytics
- [ ] Real-time collaboration metrics
- [ ] Kaggle competition integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Let's Connect

**Your Name** - AI/Data Science Enthusiast

- 📧 Email: your.email@example.com  
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🐱 GitHub: [Your GitHub](https://github.com/yourusername)
- 🌐 Portfolio: [Dashboard Portfolio](https://yourportfolio.com)

---

🤖 Built with passion for AI and love for data visualization
⭐ Star this repo if you find the dashboard approach inspiring!
