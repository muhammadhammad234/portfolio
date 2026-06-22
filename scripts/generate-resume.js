/**
 * Generates an ATS-optimized single-column resume PDF from portfolio data.
 * Run: node scripts/generate-resume.js
 */

const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const OUT_DIR = path.join(__dirname, '..', 'public', 'documents')
const PDF_PATH = path.join(OUT_DIR, 'resume.pdf')
const TXT_PATH = path.join(OUT_DIR, 'Muhammad_Hammad_Resume_ATS.txt')

const MARGIN = 50
const PAGE_WIDTH = 612
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

const resume = {
  name: 'Muhammad Hammad',
  title: 'Senior Flutter Developer | Mobile Application Developer',
  location: 'Lahore, Pakistan',
  phone: '+92 310 6883027',
  email: 'hammadansari234@gmail.com',
  linkedin: 'linkedin.com/in/muhammadhammad234',
  github: 'github.com/muhammadhammad234',
  portfolio: 'portfolio-b9jn-8938jeeut-muhammadhammad234s-projects.vercel.app',

  summary: [
    'Senior Flutter Developer with 3+ years of experience building high-performance cross-platform mobile applications for iOS and Android. Proven track record shipping 15+ production apps to Google Play Store and Apple App Store with an average 4.8-star rating. Expert in Dart, Flutter, clean architecture, scalable state management (Provider, Bloc, Riverpod, GetX), Firebase, REST API integration, payment processing (Stripe, Apple Pay, Google Pay), and AI-assisted development workflows. Currently leading mobile development at Value Growth Advisory, a Kuwait-based advisory firm.',
  ],

  skills: {
    'Mobile Development': [
      'Flutter',
      'Dart',
      'iOS',
      'Android',
      'Cross-Platform Development',
      'Widget Development',
      'Custom Animations',
      'Platform Channels',
      'Material Design',
      'Cupertino Design',
    ],
    'Architecture & State Management': [
      'Clean Architecture',
      'MVVM',
      'Provider',
      'Bloc',
      'Riverpod',
      'GetX',
      'MobX',
      'Code Architecture',
      'Performance Optimization',
    ],
    'Backend & Cloud': [
      'Firebase',
      'Firestore',
      'Cloud Functions',
      'Firebase Authentication',
      'Cloud Messaging',
      'Analytics',
      'Crashlytics',
      'REST APIs',
      'GraphQL',
      'WebSocket',
      'FastAPI',
      'Node.js',
      'Google Cloud',
    ],
    'Mobile Features & Integrations': [
      'Push Notifications',
      'In-App Purchases',
      'Payment Integration',
      'Stripe',
      'Apple Pay',
      'Google Pay',
      'Geolocation',
      'Geofencing',
      'Google Maps',
      'Radar.io',
      'Deep Linking',
      'Socket.io',
      'WebRTC',
    ],
    'Data & Storage': [
      'SQLite',
      'Hive',
      'Drift',
      'Isar',
      'Shared Preferences',
      'Dio',
      'HTTP',
    ],
    'DevOps & Publishing': [
      'Google Play Store',
      'Apple App Store',
      'App Store Optimization',
      'Xcode',
      'Android Studio',
      'CI/CD',
      'Docker',
      'Git',
      'Agile Methodology',
    ],
    'AI-Assisted Development': [
      'AI-Assisted Development',
      'Cursor IDE',
      'GitHub Copilot',
      'Claude',
      'ChatGPT',
      'Prompt Engineering',
      'Gemini AI',
    ],
    'Testing & Quality': [
      'Unit Testing',
      'Widget Testing',
      'UI/UX Design',
      'Figma',
      'Responsive Design',
    ],
  },

  experience: [
    {
      title: 'Senior Flutter Developer',
      company: 'Value Growth Advisory',
      location: 'Pakistan (Remote)',
      period: 'June 2026 – Present',
      bullets: [
        'Lead end-to-end mobile application development for a Kuwait-based advisory firm, architecting cross-platform Flutter apps for iOS and Android with clean architecture and scalable state management.',
        'Shipped 7+ production applications to Google Play Store and Apple App Store including Khayr (AI Health Companion), Mingle (Social/Nightlife), Waiz (Healthcare Booking), Compass Travels, Ezhalha, MHN, and Alaaf National.',
        'Integrated Firebase, Firestore, REST APIs, Stripe, Apple Pay, Google Maps, geofencing (Radar.io), Gemini AI, and in-app purchases across consumer and enterprise mobile products.',
        'Established mobile development best practices including CI/CD pipelines, code review standards, and accessible UI/UX patterns for production-grade releases.',
      ],
      technologies:
        'Flutter, Dart, Firebase, Firestore, REST APIs, Stripe, Google Maps, Gemini AI, State Management, CI/CD, iOS, Android',
    },
    {
      title: 'Senior Flutter Developer',
      company: 'Simplitaught',
      location: 'Lahore, Pakistan',
      period: 'January 2024 – May 2026',
      bullets: [
        'Led development of enterprise mobile applications using Flutter framework for iOS and Android platforms serving business and education clients.',
        'Architected and delivered cross-platform apps with Firebase backend integration, Firestore database, Stripe payment processing, and Google Cloud services.',
        'Mentored junior Flutter developers on mobile app architecture, state management patterns, and Flutter best practices to improve team delivery velocity.',
        'Implemented Docker-based development workflows and maintained high code quality through unit testing, widget testing, and performance optimization.',
      ],
      technologies:
        'Flutter, Dart, Firebase, Firestore, Stripe, Google Cloud, Docker, REST APIs, State Management',
    },
    {
      title: 'Flutter Developer',
      company: 'Rex Technologies',
      location: 'Lahore, Pakistan',
      period: 'September 2023 – December 2023',
      bullets: [
        'Developed and maintained multiple Flutter mobile applications for e-commerce and EdTech clients with full lifecycle ownership from design to deployment.',
        'Successfully published applications on both Google Play Store and Apple App Store, meeting platform compliance and App Store Optimization requirements.',
        'Collaborated with cross-functional teams including designers, product managers, and backend engineers to deliver high-quality mobile solutions on schedule.',
        'Integrated Firebase services, REST APIs, push notifications, and payment gateways into production mobile applications.',
      ],
      technologies:
        'Flutter, Dart, Firebase, REST APIs, Xcode, Android Studio, Google Play Store, Apple App Store',
    },
    {
      title: 'Flutter Developer',
      company: 'GhairMulki Software House',
      location: 'Multan, Pakistan',
      period: 'July 2022 – August 2023',
      bullets: [
        'Built responsive cross-platform mobile applications using Flutter with custom UI components and Material Design implementation.',
        'Integrated REST APIs and Firebase backend services to deliver feature-rich mobile experiences for diverse client projects.',
        'Worked closely with UI/UX designers to translate Figma designs into pixel-perfect, performant Flutter interfaces.',
        'Published multiple applications on Google Play Store with positive user feedback and stable production performance.',
      ],
      technologies:
        'Flutter, Dart, Firebase, REST APIs, Material Design, Google Play Store',
    },
  ],

  projects: [
    {
      name: 'Khayr – AI Health Companion',
      period: '2025 – Present',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.keybotix.khayr',
      appStoreUrl: 'https://apps.apple.com/us/app/khayr-ai-health-companion/id6749851886',
      bullets: [
        'Built AI-powered health companion app with Gemini AI symptom checker, personalized health assessments, and in-app purchases; rated 5.0 stars on Google Play.',
        'Technologies: Flutter, Dart, Firebase, Firestore, Gemini AI, In-App Purchases, iOS, Android.',
      ],
    },
    {
      name: 'Mingle – Social & Nightlife App',
      period: '2025',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.app.mingle',
      appStoreUrl: 'https://apps.apple.com/app/mingle-social-app/id6737700806',
      bullets: [
        'Developed social discovery app with automatic venue check-in/out via geofencing, in-app wallet, Stripe and Apple Pay payments, and real-time activity tracking.',
        'Technologies: Flutter, Firebase, Radar.io, Geofencing, Google Maps, Stripe, Apple Pay.',
      ],
    },
    {
      name: 'Waiz – Healthcare Appointment Booking',
      period: '2025',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.waizapp',
      bullets: [
        'Created healthcare booking platform enabling patients to search doctors by specialty, book appointments, and manage visit history with push notification reminders; 500+ downloads.',
        'Technologies: Flutter, Dart, REST APIs, Push Notifications, Scheduling, Reviews.',
      ],
    },
    {
      name: 'Compass Travels – Travel Booking',
      period: '2025',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.compasskuwait.store',
      bullets: [
        'Built all-in-one travel companion for flights, hotels, rental cars, and travel supplies with secure payment integration and real-time booking notifications.',
        'Technologies: Flutter, Dart, REST APIs, Payments, Maps, Push Notifications.',
      ],
    },
    {
      name: 'Ezhalha – Store Management Platform',
      period: '2025',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vga.azhelha',
      bullets: [
        'Developed business management app with store profiles, wallet balances, transaction history, and customer review monitoring dashboards.',
        'Technologies: Flutter, Dart, REST APIs, State Management, Dashboards.',
      ],
    },
    {
      name: 'MHN – Creative Marketplace',
      period: '2025',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vga.mehn',
      bullets: [
        'Built location-aware marketplace connecting users with artists and designers via category browsing, portfolio profiles, and direct WhatsApp/call integration.',
        'Technologies: Flutter, Dart, Firebase, Geolocation, REST APIs, Deep Linking.',
      ],
    },
    {
      name: 'Alaaf National – E-Commerce',
      period: '2025',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vga.national_feed_vga',
      bullets: [
        'Developed animal feed e-commerce application with product catalog, cart, checkout, and secure payment processing for livestock owners.',
        'Technologies: Flutter, Dart, REST APIs, E-Commerce, Cart and Checkout, Payments.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Bahauddin Zakariya University',
      location: 'Multan, Pakistan',
      period: '2019 – 2023',
      details:
        'Specialization in Software Engineering and Artificial Intelligence. GPA: 3.6/4.0. Coursework in algorithms, data structures, software development principles, and artificial intelligence.',
    },
  ],

  certifications: [
    'Flutter Development Certification – Google (2024)',
    'Firebase for Flutter – Google Firebase (2023)',
    'Dart Programming Language – Google (2023)',
    'Mobile App Development – Udemy (2022)',
    'Google Play Console – Google Play (2022)',
    'Apple Developer Program – Apple (2022)',
  ],
}

function getProjectLinks(proj) {
  const links = []
  if (proj.playStoreUrl) links.push({ label: 'Google Play: ', url: proj.playStoreUrl })
  if (proj.appStoreUrl) links.push({ label: 'App Store: ', url: proj.appStoreUrl })
  return links
}

function buildPlainText(data) {
  const lines = []
  const rule = '='.repeat(72)
  const dash = '-'.repeat(72)

  lines.push(data.name.toUpperCase())
  lines.push(data.title)
  lines.push(
    `${data.location} | ${data.phone} | ${data.email} | ${data.linkedin} | ${data.github}`
  )
  lines.push('')
  lines.push('PROFESSIONAL SUMMARY')
  lines.push(dash)
  data.summary.forEach((p) => lines.push(p))
  lines.push('')
  lines.push('TECHNICAL SKILLS')
  lines.push(dash)
  Object.entries(data.skills).forEach(([category, items]) => {
    lines.push(`${category}: ${items.join(', ')}`)
  })
  lines.push('')
  lines.push('PROFESSIONAL EXPERIENCE')
  lines.push(dash)
  data.experience.forEach((job) => {
    lines.push(`${job.title}`)
    lines.push(`${job.company} | ${job.location} | ${job.period}`)
    job.bullets.forEach((b) => lines.push(`  - ${b}`))
    lines.push(`  Technologies: ${job.technologies}`)
    lines.push('')
  })
  lines.push('KEY PROJECTS')
  lines.push(dash)
  data.projects.forEach((proj) => {
    lines.push(`${proj.name} | ${proj.period}`)
    proj.bullets.forEach((b) => lines.push(`  - ${b}`))
    getProjectLinks(proj).forEach((link) => lines.push(`  - ${link.label}${link.url}`))
    lines.push('')
  })
  lines.push('EDUCATION')
  lines.push(dash)
  data.education.forEach((edu) => {
    lines.push(`${edu.degree}`)
    lines.push(`${edu.institution} | ${edu.location} | ${edu.period}`)
    lines.push(edu.details)
    lines.push('')
  })
  lines.push('CERTIFICATIONS')
  lines.push(dash)
  data.certifications.forEach((c) => lines.push(`  - ${c}`))
  lines.push('')
  return lines.join('\n')
}

function ensureSpace(doc, needed = 40) {
  if (doc.y + needed > doc.page.height - MARGIN) {
    doc.addPage()
  }
}

function sectionHeading(doc, title) {
  ensureSpace(doc, 36)
  doc.moveDown(0.4)
  doc
    .font('Helvetica-Bold')
    .fontSize(11)
    .fillColor('#111111')
    .text(title.toUpperCase(), MARGIN, doc.y, { width: CONTENT_WIDTH })
  const y = doc.y + 2
  doc
    .moveTo(MARGIN, y)
    .lineTo(PAGE_WIDTH - MARGIN, y)
    .strokeColor('#333333')
    .lineWidth(0.75)
    .stroke()
  doc.moveDown(0.5)
}

function bodyText(doc, text, options = {}) {
  doc
    .font(options.bold ? 'Helvetica-Bold' : 'Helvetica')
    .fontSize(options.size || 10)
    .fillColor(options.color || '#222222')
    .text(text, MARGIN, doc.y, {
      width: CONTENT_WIDTH,
      align: options.align || 'left',
      lineGap: options.lineGap ?? 2,
    })
}

function bulletList(doc, items) {
  items.forEach((item) => {
    ensureSpace(doc, 28)
    const textX = MARGIN + 18
    const textWidth = CONTENT_WIDTH - 18
    const startY = doc.y
    doc
      .font('Helvetica')
      .fontSize(10)
      .fillColor('#222222')
      .text(`•  ${item}`, textX, startY, { width: textWidth, lineGap: 2 })
  })
  doc.moveDown(0.2)
}

function renderProjectLinks(doc, proj) {
  const textX = MARGIN + 18
  const textWidth = CONTENT_WIDTH - 18
  const links = getProjectLinks(proj)

  links.forEach(({ label, url }) => {
    ensureSpace(doc, 18)
    const startY = doc.y
    doc.font('Helvetica').fontSize(9).fillColor('#444444')
    doc.text(`•  ${label}`, textX, startY, { continued: true, lineBreak: false })
    doc.fillColor('#1a56db').text(url, { link: url, underline: true, width: textWidth })
  })

  if (links.length) doc.moveDown(0.15)
}

function generatePdf(data) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'LETTER',
      margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
      info: {
        Title: `${data.name} - Resume`,
        Author: data.name,
        Subject: 'Senior Flutter Developer Resume',
        Keywords: 'Flutter,Dart,Mobile Developer,iOS,Android,Firebase',
      },
    })

    const stream = fs.createWriteStream(PDF_PATH)
    doc.pipe(stream)

    // Header
    doc.font('Helvetica-Bold').fontSize(20).fillColor('#111111').text(data.name, {
      width: CONTENT_WIDTH,
      align: 'center',
    })
    doc
      .font('Helvetica')
      .fontSize(10.5)
      .fillColor('#333333')
      .text(data.title, { width: CONTENT_WIDTH, align: 'center', lineGap: 2 })
    doc.moveDown(0.3)
    doc
      .fontSize(9.5)
      .fillColor('#444444')
      .text(
        `${data.location}  |  ${data.phone}  |  ${data.email}`,
        { width: CONTENT_WIDTH, align: 'center' }
      )
    doc.text(`${data.linkedin}  |  ${data.github}`, {
      width: CONTENT_WIDTH,
      align: 'center',
    })

    // Summary
    sectionHeading(doc, 'Professional Summary')
    data.summary.forEach((p) => bodyText(doc, p))

    // Skills
    sectionHeading(doc, 'Technical Skills')
    Object.entries(data.skills).forEach(([category, items]) => {
      ensureSpace(doc, 24)
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#111111')
      doc.text(`${category}: `, MARGIN, doc.y, { continued: true, width: CONTENT_WIDTH })
      doc.font('Helvetica').fontSize(9.5).fillColor('#222222')
      doc.text(items.join(', '), { width: CONTENT_WIDTH, lineGap: 1 })
      doc.moveDown(0.15)
    })

    // Experience
    sectionHeading(doc, 'Professional Experience')
    data.experience.forEach((job, i) => {
      ensureSpace(doc, 80)
      bodyText(doc, job.title, { bold: true, size: 10.5 })
      bodyText(doc, `${job.company}  |  ${job.location}  |  ${job.period}`, {
        size: 9.5,
        color: '#444444',
      })
      doc.moveDown(0.15)
      bulletList(doc, job.bullets)
      bodyText(doc, `Technologies: ${job.technologies}`, { size: 9, color: '#555555' })
      if (i < data.experience.length - 1) doc.moveDown(0.35)
    })

    // Projects
    sectionHeading(doc, 'Key Projects')
    data.projects.forEach((proj, i) => {
      ensureSpace(doc, 50)
      bodyText(doc, `${proj.name}  |  ${proj.period}`, { bold: true, size: 10 })
      bulletList(doc, proj.bullets)
      renderProjectLinks(doc, proj)
      if (i < data.projects.length - 1) doc.moveDown(0.2)
    })

    // Education
    sectionHeading(doc, 'Education')
    data.education.forEach((edu) => {
      bodyText(doc, edu.degree, { bold: true, size: 10.5 })
      bodyText(doc, `${edu.institution}  |  ${edu.location}  |  ${edu.period}`, {
        size: 9.5,
        color: '#444444',
      })
      bodyText(doc, edu.details, { size: 9.5 })
    })

    // Certifications
    sectionHeading(doc, 'Certifications')
    bulletList(doc, data.certifications)

    doc.end()
    stream.on('finish', resolve)
    stream.on('error', reject)
  })
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  const plainText = buildPlainText(resume)
  fs.writeFileSync(TXT_PATH, plainText, 'utf8')
  await generatePdf(resume)

  console.log(`Created: ${PDF_PATH}`)
  console.log(`Created: ${TXT_PATH}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
