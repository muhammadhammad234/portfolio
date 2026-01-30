# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Perfect for showcasing your skills, projects, and experience.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎭 **Smooth Animations**: Beautiful animations using Framer Motion
- 🔍 **SEO Optimized**: Meta tags and structured data for better SEO
- 📧 **Contact Form**: Functional contact form (ready for backend integration)
- 🚀 **Vercel Ready**: Optimized for deployment on Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Customization

### Personal Information

Update your personal information in the following files:

1. **Header** (`components/header.tsx`)
   - Change "YourName" to your actual name

2. **Hero Section** (`components/hero.tsx`)
   - Update name, title, and description
   - Modify call-to-action buttons

3. **About Section** (`components/about.tsx`)
   - Update personal information array
   - Modify about text and key points

4. **Contact Section** (`components/contact.tsx`)
   - Update contact information
   - Modify social media links

### Projects

Edit the projects array in `components/projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'TypeScript'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true // Set to true for featured projects
  }
]
```

### Skills

Update your skills in `components/skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      // Add more skills...
    ]
  }
]
```

### Experience

Modify your work experience and education in `components/experience.tsx`:

```typescript
const workExperience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'Location',
    period: '2022 - Present',
    description: 'Job description...',
    technologies: ['React', 'Node.js', 'TypeScript']
  }
]
```

### Styling

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Edit the color palette in `tailwind.config.js`
- **Fonts**: Update font families in the config
- **Animations**: Modify animation settings

### Meta Information

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Muhammad Hammad - Mobile Application Developer',
  description: 'Senior Flutter Developer with more than 3 years of experience in the field of development',
  // Update other meta fields...
}
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - In your Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS settings as instructed

### Other Deployment Options

- **Netlify**: Use the Netlify CLI or connect your GitHub repo
- **AWS Amplify**: Connect your repository for automatic deployments
- **DigitalOcean App Platform**: Deploy directly from your Git repository

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Contact Form

The contact form is currently set up to log form data to the console. To make it functional:

1. **Add a backend service** (e.g., Vercel Functions, Netlify Functions)
2. **Use a form service** like Formspree, Netlify Forms, or EmailJS
3. **Update the form submission handler** in `components/contact.tsx`

Example with EmailJS:
```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── header.tsx           # Navigation header
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About section
│   ├── skills.tsx           # Skills section
│   ├── projects.tsx         # Projects section
│   ├── experience.tsx       # Experience section
│   ├── contact.tsx          # Contact section
│   ├── footer.tsx           # Footer
│   └── theme-provider.tsx   # Theme provider
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── README.md
```

## 🎨 Customization Tips

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/header.tsx`

### Changing Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... customize your colors
      }
    }
  }
}
```

### Adding Animations

Use Framer Motion for custom animations:

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

Made with ❤️ by Muhammad Hammad
# portfolio
