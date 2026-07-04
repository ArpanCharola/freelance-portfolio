import { Project, ServicePackage } from '../types';

export const projectsData: Project[] = [
  {
    slug: 'adiyogi-wellness',
    name: 'Adiyogi Wellness',
    category: 'AI',
    description: 'An AI-powered wellness and meditation guidance system delivering custom assessments and tailored emotional support journeys.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API SDK', 'Node.js', 'Express', 'Motion'],
    liveDemoUrl: '',
    gitHubUrl: 'https://github.com/ArpanCharola/adiyogi-wellness',
    featured: true,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    showDetail: true,
    detailContent: {
      whoItIsFor: 'Individuals seeking accessible, personalized emotional wellness and meditation coaching with direct, AI-powered emotional insights and tailored self-care tools.',
      whatIBuilt: 'A responsive full-stack platform that performs real-time emotional state assessments and produces customized meditation/breathing guidance using the Gemini API.',
      keyFeatures: [
        'Emotion Aware Assessment Tool analyzing user entries for tailored suggestions.',
        'Real-time chat interface offering custom stress-reduction workflows.',
        'Interactive mindfulness worksheets and topics for cognitive behavioral self-care.',
        'Beautiful animations and zen-like audio loops for meditative visual breathing.'
      ],
      whatILearned: 'Learned to structure Gemini prompts for sensitive guidance, build secure server-side API proxy routes for the Google GenAI SDK, and manage local storage cache to preserve session history.'
    }
  },
  {
    slug: 'peregrine-quill',
    name: 'Peregrine Quill',
    category: 'AI',
    description: 'An ATS-optimized, precision resume and cover letter builder that tailors application documents to match specific job descriptions using AI.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Gemini API', 'PDF Generator'],
    liveDemoUrl: '',
    gitHubUrl: 'https://github.com/ArpanCharola/PeregrineQuill',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    showDetail: true,
    detailContent: {
      whoItIsFor: 'Job seekers looking to pass automated applicant tracking systems (ATS) and craft perfectly tailored resumes using their own actual words without generic AI-generated filler.',
      whatIBuilt: 'An advanced AI-powered document compiler that ingests raw resumes, matches them against target job descriptions, identifies skill gaps, and formats clean, ATS-compliant PDFs.',
      keyFeatures: [
        'Advanced text extraction and ATS keyword matcher analyzing job descriptions.',
        'Dynamic resume optimizer preserving original user content while enhancing impact.',
        'Seamless formatting generator producing clean, standard layouts without complex builders.',
        'Interactive preview allowing rapid iterative adjustments to tone and key achievements.'
      ],
      whatILearned: 'Developed robust PDF formatting structures compatible with common parsing systems and mastered prompt techniques for context retrieval using Gemini.'
    }
  },
  {
    slug: 'ak24-7-jobs',
    name: 'AK24-7 Jobs',
    category: 'Full-Stack',
    description: 'A powerful jobs platform in India with a personalized matching dashboard, job search aggregations, and visual application tracking.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
    liveDemoUrl: '',
    gitHubUrl: 'https://github.com/ArpanCharola/AK24-7',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    showDetail: true,
    detailContent: {
      whoItIsFor: 'Indian job seekers and employers looking for a streamlined, high-speed matching engine with localized filters and visual job application progress dashboards.',
      whatIBuilt: 'A full-stack job board and dashboard workspace displaying real-time job match percentages, customized alerts, integrated email queries, and live status tracking.',
      keyFeatures: [
        'Personalized applicant dashboard showing application statuses and interview schedules.',
        'Smart match algorithm highlighting relevant openings based on candidate tech stacks.',
        'Integrated messaging system for connecting candidates with verified recruitment officers.',
        'Interactive data visualizations tracking monthly job search statistics and application rates.'
      ],
      whatILearned: 'Optimized heavy database query indexes for high-volume job listings and learned to handle optimistic UI updates to keep state changes smooth.'
    }
  },
  {
    slug: 'bharat-sanskriti',
    name: 'Bharat Sanskriti',
    category: 'Frontend',
    description: "A vibrant web portal celebrating India's rich cultural heritage, historical landmarks, monuments, and state histories with interactive maps.",
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vercel'],
    liveDemoUrl: 'https://bharat-sanskriti-beige.vercel.app/',
    gitHubUrl: 'https://github.com/ArpanCharola/bharatSanskruti',
    featured: true,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    showDetail: true,
    detailContent: {
      whoItIsFor: 'Students, travelers, and history enthusiasts seeking a beautiful, engaging visual portal to discover the cultural heritage, arts, festivals, and history of India.',
      whatIBuilt: 'A responsive visual encyclopedia with elegant state routing, interactive SVG outline maps of Indian States & Union Territories, and detailed heritage profiles.',
      keyFeatures: [
        'Interactive Indian geographic explorer mapping cultural history, monuments, and local arts.',
        'Clean, responsive design optimized for fluid touch interactions on mobile devices.',
        'Curated cultural calendar tracking regional festivals, classical dances, and traditions.',
        'Optimized performance achieving lightning-fast loading speeds on slow internet connections.'
      ],
      whatILearned: 'Mastered fluid coordinate mappings in SVGs, optimized rich media assets for responsive delivery, and integrated clean routing structures for seamless deep-linking.'
    }
  },
  {
    slug: 'coffee-time',
    name: 'Coffee Time',
    category: 'Frontend',
    description: "Dehradun's premiere mountain coffee escape landing page featuring digital table booking, digital tray builders, and artisan menus.",
    techStack: ['React', 'Tailwind CSS', 'Motion', 'GitHub Pages'],
    liveDemoUrl: 'https://ArpanCharola.github.io/Coffee-Time/',
    gitHubUrl: '',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
    showDetail: false
  },
  {
    slug: 'raw-gym',
    name: 'Raw Gym',
    category: 'Frontend',
    description: 'A bold, high-intensity landing page for a premium unisex training destination with interactive fitness calculators and workout galleries.',
    techStack: ['React', 'Tailwind CSS', 'Motion', 'GitHub Pages'],
    liveDemoUrl: 'https://arpancharola.github.io/Raw-Gym/',
    gitHubUrl: '',
    featured: false,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    showDetail: false
  },
  {
    slug: 'swe-mentor-portfolio',
    name: 'SWE Mentor Portfolio',
    category: 'Frontend',
    description: 'A professional portfolio for a Software Engineering tutor featuring interactive booking systems, curriculum previews, and student testimonials.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'GitHub Pages'],
    liveDemoUrl: 'https://arpancharola.github.io/SWE-Tutor',
    gitHubUrl: '',
    featured: false,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    showDetail: false
  },
  {
    slug: 'dcgan-flower-generator',
    name: 'DCGAN Flower Image Generator',
    category: 'ML',
    description: 'A Deep Convolutional Generative Adversarial Network trained on floral datasets to synthesize realistic high-quality flower images.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Jupyter'],
    liveDemoUrl: '',
    gitHubUrl: 'https://github.com/ArpanCharola/Photorealistic-Floral-Synthesis-A-DCGAN-Flower-Image-Generator',
    featured: true,
    image: 'https://raw.githubusercontent.com/ArpanCharola/arpanPortfolio/main/public/images/projects/ml.png',
    showDetail: true,
    detailContent: {
      whoItIsFor: 'Machine learning researchers and generative art developers exploring Deep Convolutional GAN architectures, stable training configurations, and synthetic dataset generations.',
      whatIBuilt: 'A python-based Deep Learning generative pipeline that balances discriminator and generator model weights to yield high-quality 64x64 photorealistic floral patterns.',
      keyFeatures: [
        'Custom DCGAN architecture utilizing transposed convolutional layers for image synthesis.',
        'Optimized training configurations incorporating soft labels, mini-batch discrimination, and LeakyReLU.',
        'Automated training history tracking charting generator and discriminator losses.',
        'Seamless image grid visualizer showing image generation evolutions across epochs.'
      ],
      whatILearned: 'Faced and resolved mode collapse challenges by adding historical weight saving and noise-injection techniques, and deepened theoretical knowledge of adversarial training dynamics.'
    }
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'High-converting, mobile-responsive single-page websites tailored for creators, coaches, and targeted product launches.',
    deliveryTime: '3-5 Days',
    features: [
      'Custom conversion-focused layout',
      'Fully responsive (Mobile & Tablet optimized)',
      'Subtle, engaging scroll animations',
      'Contact form / WhatsApp button integration',
      'SEO-friendly structure & lightning speed'
    ],
    badge: 'Popular for Creators'
  },
  {
    id: 'business-website',
    title: 'Business Website',
    description: 'Multi-page website establishing premium authority for local service providers, small businesses, and growing agencies.',
    deliveryTime: '7-14 Days',
    features: [
      'Up to 5 custom structured pages',
      'Services, Team, Testimonials & About setups',
      'Advanced interactive contact options',
      'Custom domain & hosting deployment guidance',
      'Basic analytics dashboard integration'
    ],
    badge: 'Best for Businesses'
  },
  {
    id: 'design-to-code',
    title: 'Frontend From Design',
    description: 'Clean, pixel-perfect conversion of your existing Figma, Adobe XD, or Sketch designs into clean React/Tailwind code.',
    deliveryTime: '4-8 Days',
    features: [
      '100% match to design system & specs',
      'Modular, reusable React components',
      'Fluid state interactions & transitions',
      'Clean Git repository with documentation',
      'W3C-compliant semantic HTML tags'
    ]
  },
  {
    id: 'full-stack-mvp',
    title: 'Full-Stack MVP',
    description: 'A fully functional database-driven web application to validate your startup concept or digitize internal operations.',
    deliveryTime: '14-30 Days',
    features: [
      'User accounts & authentication security',
      'Dynamic database (MongoDB/PostgreSQL)',
      'Custom dashboard & client admin portal',
      'Third-party external API integrations',
      'Comprehensive testing & production handoff'
    ],
    badge: 'Startups Choice'
  },
  {
    id: 'ai-prototype',
    title: 'AI Feature Prototype',
    description: 'Integrate custom LLM features, Gemini APIs, text-generation chatbots, or semantic search into your web interface.',
    deliveryTime: '10-20 Days',
    features: [
      'Server-side secure API proxies',
      'Optimized prompt engineering templates',
      'Dynamic markdown/stream text rendering',
      'Intelligent state-handling & analytics',
      'Future-proof, scalable AI architecture'
    ],
    badge: 'Cutting Edge'
  }
];
