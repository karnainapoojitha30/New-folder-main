import { Users, Brain, Code, Palette, Database, Globe, Shield, Smartphone, Terminal, LineChart, Briefcase, Monitor } from 'lucide-react';

export const courses = [
  { id: 1, title: 'Advanced React', progress: 75, color: 'var(--accent-primary)', duration: '12h', icon: Code },
  { id: 2, title: 'Machine Learning Basics', progress: 30, color: 'var(--accent-success)', duration: '24h', icon: Brain },
  { id: 3, title: 'UI/UX Principles', progress: 10, color: 'var(--accent-warning)', duration: '8h', icon: Palette },
  { id: 4, title: 'Data Structures', progress: 0, color: '#8b5cf6', duration: '18h', icon: Database },
  { id: 5, title: 'Cloud Computing Intro', progress: 0, color: '#ec4899', duration: '10h', icon: Globe },
  { id: 6, title: 'Cybersecurity Fundamentals', progress: 0, color: '#f43f5e', duration: '15h', icon: Shield },
  { id: 7, title: 'Mobile App Dev with React Native', progress: 0, color: '#14b8a6', duration: '20h', icon: Smartphone },
  { id: 8, title: 'SQL & Database Architecture', progress: 0, color: '#f59e0b', duration: '11h', icon: Database },
  { id: 9, title: 'Blockchain & Web3', progress: 0, color: '#6366f1', duration: '14h', icon: Monitor },
  { id: 10, title: 'Ethical Hacking Intro', progress: 0, color: '#ef4444', duration: '9h', icon: Shield }
];

export const categories = [
  { title: 'Development', icon: Code, count: 124, color: 'var(--accent-primary)' },
  { title: 'Design', icon: Palette, count: 86, color: '#ec4899' },
  { title: 'Business', icon: Briefcase, count: 42, color: 'var(--accent-warning)' },
  { title: 'Data Science', icon: LineChart, count: 56, color: 'var(--accent-success)' },
  { title: 'Marketing', icon: Users, count: 34, color: '#ef4444' },
  { title: 'Security', icon: Shield, count: 28, color: '#f43f5e' },
  { title: 'Databases', icon: Database, count: 45, color: '#f59e0b' },
  { title: 'Mobile Apps', icon: Smartphone, count: 62, color: '#14b8a6' },
  { title: 'DevOps', icon: Terminal, count: 39, color: '#6366f1' },
  { title: 'IT & Hardware', icon: Monitor, count: 51, color: '#8b5cf6' }
];

export const careerPaths = [
  { 
    title: 'Frontend Developer', 
    role: 'Software', 
    jobs: '10k+ Openings', 
    icon: Code, 
    color: 'var(--accent-primary)', 
    salary: '$80k - $120k', 
    description: 'Specialists in building user interfaces and web applications using HTML, CSS, JavaScript, and modern frameworks like React.', 
    skills: ['React', 'JavaScript', 'CSS/SASS', 'Web Performance'],
    roadmap: [
      { id: 1, title: 'HTML & CSS Essentials', desc: 'Master semantic HTML, Flexbox, Grid, and responsive design techniques.', duration: '4 Weeks' },
      { id: 2, title: 'JavaScript Fundamentals', desc: 'Deep dive into ES6+, async/await, DOM manipulation, and browser APIs.', duration: '6 Weeks' },
      { id: 3, title: 'React Masterclass', desc: 'Learn component architecture, hooks, context API, and routing essentials.', duration: '8 Weeks' },
      { id: 4, title: 'State Management', desc: 'Integrate Redux Toolkit or Zustand for complex application state control.', duration: '3 Weeks' },
      { id: 5, title: 'Testing & Optimization', desc: 'Unit testing with Jest/RTL and performance profiling for web apps.', duration: '3 Weeks' },
      { id: 6, title: 'Final Project: Personal Portfolio', desc: 'Build and deploy a full-featured portfolio to showcase your skills.', duration: '4 Weeks' }
    ]
  },
  { 
    title: 'Data Scientist', 
    role: 'Data', 
    jobs: '5k+ Openings', 
    icon: Brain, 
    color: 'var(--accent-success)', 
    salary: '$95k - $140k', 
    description: 'Extract insights and knowledge from structured and unstructured data using algorithms and machine learning.', 
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization'],
    roadmap: [
      { id: 1, title: 'Python for Data Science', desc: 'Master NumPy, Pandas, and Python scripting for data manipulation.', duration: '4 Weeks' },
      { id: 2, title: 'SQL & Database Design', desc: 'Learn relational database queries, joins, and indexing for data retrieval.', duration: '3 Weeks' },
      { id: 3, title: 'Statistics & Probability', desc: 'Understand the mathematical foundation for hypothesis testing and distributions.', duration: '5 Weeks' },
      { id: 4, title: 'Machine Learning Basics', desc: 'Supervised and unsupervised learning with Scikit-learn algorithms.', duration: '8 Weeks' },
      { id: 5, title: 'Deep Learning & Neural Networks', desc: 'Build models for image recognition and NLP using PyTorch or TensorFlow.', duration: '10 Weeks' },
      { id: 6, title: 'Data Capstone: Predictive Model', desc: 'Clean, analyze, and build a predictive model for a real-world dataset.', duration: '6 Weeks' }
    ]
  },
  { 
    title: 'Product Manager', 
    role: 'Management', 
    jobs: '8k+ Openings', 
    icon: Briefcase, 
    color: 'var(--accent-warning)', 
    salary: '$100k - $150k', 
    description: 'Guide the success of a product and lead the cross-functional team responsible for improving it.', 
    skills: ['Agile', 'Product Roadmapping', 'User Research', 'Data Analysis'],
    roadmap: [
      { id: 1, title: 'Product Fundamentals', desc: 'Learn the PRD process, user personas, and product lifecycle management.', duration: '3 Weeks' },
      { id: 2, title: 'Agile & Scrum Methodologies', desc: 'Master sprint planning, backlog grooming, and collaborative workflow tools.', duration: '3 Weeks' },
      { id: 3, title: 'User Research & Testing', desc: 'Learn to conduct interviews, usability tests, and analyze feedback loops.', duration: '4 Weeks' },
      { id: 4, title: 'Data-Driven Decision Making', desc: 'Using A/B testing and product analytics to inform strategy.', duration: '4 Weeks' },
      { id: 5, title: 'Financial Modeling for PMs', desc: 'Understand unit economics, P&L, and product forecasting.', duration: '4 Weeks' },
      { id: 6, title: 'Capstone: Product Roadmap Launch', desc: 'Draft a full product strategy and launch plan for a new feature.', duration: '5 Weeks' }
    ]
  },
  { 
    title: 'UX Researcher', 
    role: 'Design', 
    jobs: '3k+ Openings', 
    icon: Palette, 
    color: '#ec4899', 
    salary: '$85k - $130k', 
    description: 'Systematically study target users to collect and analyze data that will help inform the product design process.', 
    skills: ['Wireframing', 'User Testing', 'Figma', 'Prototyping'],
    roadmap: [
      { id: 1, title: 'Design Thinking Basics', desc: 'Empathize, Define, Ideate, Prototype, and Test frameworks.', duration: '3 Weeks' },
      { id: 2, title: 'Qualitative Research Methods', desc: 'In-depth interviews, ethnography, and focus groups.', duration: '4 Weeks' },
      { id: 3, title: 'Quantitative Data Analysis', desc: 'Surveys, statistical significance, and usability metrics.', duration: '4 Weeks' },
      { id: 4, title: 'Information Architecture', desc: 'Card sorting, site mapping, and user flow development.', duration: '3 Weeks' },
      { id: 5, title: 'Accessibility (WCAG) Standards', desc: 'Testing for screen readers and inclusive design principles.', duration: '3 Weeks' },
      { id: 6, title: 'Research Report & Presentation', desc: 'Communicating findings to stakeholders effectively.', duration: '4 Weeks' }
    ]
  },
  { 
    title: 'Cloud Architect', 
    role: 'Infrastructure', 
    jobs: '4k+ Openings', 
    icon: Globe, 
    color: '#8b5cf6', 
    salary: '$120k - $160k', 
    description: 'Oversee a company\'s cloud computing strategy, including cloud adoption plans, cloud application design, and management.', 
    skills: ['AWS / GCP', 'Docker', 'Kubernetes', 'Networking'],
    roadmap: [
      { id: 1, title: 'Networking Fundamentals', desc: 'VPCs, Subnets, DNS, and IP routing for cloud systems.', duration: '4 Weeks' },
      { id: 2, title: 'Cloud Platform Basics (AWS/GCP)', desc: 'IAM, EC2, S3, and RDS services on primary platforms.', duration: '6 Weeks' },
      { id: 3, title: 'Containers & Docker', desc: 'Packaging applications for consistent deployment loops.', duration: '4 Weeks' },
      { id: 4, title: 'Kubernetes Orchestration', desc: 'Scaling and managing containerized apps in production.', duration: '8 Weeks' },
      { id: 5, title: 'Infrastructure as Code (Terraform)', desc: 'Automating cloud resource creation with HCL.', duration: '5 Weeks' },
      { id: 6, title: 'Security & Compliance Pillar', desc: 'Implementing Zero Trust and data encryption at scale.', duration: '6 Weeks' }
    ]
  },
  { 
    title: 'Cybersecurity Analyst', 
    role: 'Security', 
    jobs: '7k+ Openings', 
    icon: Shield, 
    color: '#f43f5e', 
    salary: '$90k - $135k', 
    description: 'Protect an organization\'s computer networks and systems by monitoring and responding to security breaches.', 
    skills: ['Risk Assessment', 'Network Security', 'Cryptography', 'SIEM'],
    roadmap: [
      { id: 1, title: 'CompTIA Security+ Core', desc: 'Foundation in cryptography, threats, and access controls.', duration: '8 Weeks' },
      { id: 2, title: 'Network Security Monitoring', desc: 'Intrusion detection (IDS) and prevention (IPS) systems.', duration: '5 Weeks' },
      { id: 3, title: 'Ethical Hacking Intro', desc: 'Vulnerability scanning and penetration testing basics.', duration: '10 Weeks' },
      { id: 4, title: 'Incident Response & Recovery', desc: 'Forensics and disaster recovery plan execution.', duration: '6 Weeks' },
      { id: 5, title: 'Governance, Risk, and Compliance', desc: 'Understanding GDPR, HIPAA, and industry audit standards.', duration: '4 Weeks' },
      { id: 6, title: 'Final Project: SOC Simulation', desc: 'Perform live threat analysis in a sandboxed environment.', duration: '6 Weeks' }
    ]
  },
  { 
    title: 'Mobile Developer', 
    role: 'Software', 
    jobs: '6k+ Openings', 
    icon: Smartphone, 
    color: '#14b8a6', 
    salary: '$85k - $130k', 
    description: 'Design and build applications for mobile devices running iOS and Android operating systems.', 
    skills: ['React Native', 'Swift', 'Kotlin', 'Mobile UI'],
    roadmap: [
      { id: 1, title: 'Mobile UI Layout Basics', desc: 'Responsive design for various screen sizes and densities.', duration: '3 Weeks' },
      { id: 2, title: 'SwiftUI for iOS Development', desc: 'Building native Apple applications with declarative code.', duration: '8 Weeks' },
      { id: 3, title: 'Android Development with Kotlin', desc: 'Jetpack Compose and native Android lifecycle components.', duration: '8 Weeks' },
      { id: 4, title: 'React Native Cross-Platform', desc: 'Shared codebases for both iOS and Android platforms.', duration: '6 Weeks' },
      { id: 5, title: 'Mobile Backend Integration', desc: 'Push notifications, deep linking, and offline storage.', duration: '4 Weeks' },
      { id: 6, title: 'App Store Submission Guide', desc: 'Preparing and deploying applications to Google & Apple stores.', duration: '2 Weeks' }
    ]
  },
  { 
    title: 'Database Admin', 
    role: 'Data', 
    jobs: '2k+ Openings', 
    icon: Database, 
    color: '#f59e0b', 
    salary: '$80k - $115k', 
    description: 'Ensure that databases run efficiently and are secure from unauthorized access.', 
    skills: ['SQL', 'Database Design', 'Performance Tuning', 'Backup Strategy'],
    roadmap: [
      { id: 1, title: 'Advanced SQL Querying', desc: 'Optimizing joins, CTEs, and procedural SQL scripts.', duration: '4 Weeks' },
      { id: 2, title: 'Database Design & Normalization', desc: 'Ensuring data integrity and efficient storage schema.', duration: '5 Weeks' },
      { id: 3, title: 'Performance Tuning & Indexing', desc: 'Profiling slow queries and implementing cluster indexes.', duration: '6 Weeks' },
      { id: 4, title: 'NoSQL vs Relational Storage', desc: 'Knowing when to use MongoDB vs PostgreSQL workflows.', duration: '4 Weeks' },
      { id: 5, title: 'Backup & High Availability', desc: 'Implementing failover clusters and automated disaster recovery.', duration: '6 Weeks' },
      { id: 6, title: 'Database Security & Auditing', desc: 'Encryption at rest, masked data, and access logs.', duration: '3 Weeks' }
    ]
  },
  { 
    title: 'DevOps Engineer', 
    role: 'Infrastructure', 
    jobs: '5k+ Openings', 
    icon: Terminal, 
    color: '#6366f1', 
    salary: '$105k - $145k', 
    description: 'Introduce processes, tools, and methodologies to balance needs throughout the software development life cycle.', 
    skills: ['CI/CD', 'Jenkins', 'Terraform', 'Linux'],
    roadmap: [
      { id: 1, title: 'Linux System Administration', desc: 'Bash scripting, user management, and security hardening.', duration: '6 Weeks' },
      { id: 2, title: 'CI/CD Pipeline Automation', desc: 'Automating build, test, and deploy cycles with Jenkins.', duration: '5 Weeks' },
      { id: 3, title: 'Infrastructure as Code', desc: 'Provisioning multi-cloud environments with Terraform.', duration: '5 Weeks' },
      { id: 4, title: 'Service Mesh & Observability', desc: 'Monitoring with Prometheus and Istio integration.', duration: '6 Weeks' },
      { id: 5, title: 'Cloud Native Technologies', desc: 'Serverless funcs and edge computing paradigms.', duration: '4 Weeks' },
      { id: 6, title: 'DevSecOps Integration', desc: 'Automating security scanning within the pipeline.', duration: '4 Weeks' }
    ]
  },
  { 
    title: 'Digital Marketer', 
    role: 'Marketing', 
    jobs: '12k+ Openings', 
    icon: LineChart, 
    color: '#ef4444', 
    salary: '$60k - $95k', 
    description: 'Promote brands to connect with potential customers using the internet and other forms of digital communication.', 
    skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media'],
    roadmap: [
      { id: 1, title: 'SEO & Organic Growth', desc: 'Keyword research and on-page technical SEO optimizations.', duration: '6 Weeks' },
      { id: 2, title: 'Paid Advertising Search & Social', desc: 'Facebook Ads, Google Ads, and PPC measurement.', duration: '5 Weeks' },
      { id: 3, title: 'Content Strategy & Marketing', desc: 'Inbound marketing funnels and copy creation basics.', duration: '4 Weeks' },
      { id: 4, title: 'Web Analytics (GA4)', desc: 'Tracking user behavior and conversion events correctly.', duration: '3 Weeks' },
      { id: 5, title: 'Email & Lifecycle Marketing', desc: 'Building trust and loyalty with automated drip cycles.', duration: '3 Weeks' },
      { id: 6, title: 'Final Project: Multi-Channel Camp', desc: 'Executing a holistic campaign for a fake brand launch.', duration: '6 Weeks' }
    ]
  }
];

export const getCategorySpecificCourses = (category) => {
    let mockTitles = [];
    switch(category.title) {
        case 'Development': 
            mockTitles = [
                'Full Stack React Developer', 'Node.js Microservices', 'Advanced TypeScript', 
                'Python for Backend Devs', 'Introduction to Go', 'GraphQL API Design',
                'Rust Programming Essentials', 'WebAssembly Deep Dive', 'Modern PHP with Laravel'
            ]; break;
        case 'Design': 
            mockTitles = [
                'Figma UI/UX Masterclass', 'Design Systems & Tokens', 'Animation in UI Design', 
                'Web Accessibility Guidelines', 'Typography Fundamentals', 'Brand Identity Design',
                'Adobe Illustrator Mastery', 'Prototyping with Framer', 'Color Theory for Web'
            ]; break;
        case 'Business': 
            mockTitles = [
                'Agile Product Management', 'Startup Marketing Strategy', 'Financial Modeling Basics', 
                'Business Communication', 'Operations Management', 'Supply Chain Fundamentals',
                'Leadership and Team Building', 'Entrepreneurship 101', 'Modern Sales Techniques'
            ]; break;
        case 'Data Science': 
            mockTitles = [
                'Pandas & NumPy Basics', 'Deep Learning with PyTorch', 'Data Visualization with D3', 
                'Machine Learning Algorithms', 'Big Data with Spark', 'Natural Language Processing',
                'Computer Vision Intro', 'Data Engineering Pipelines', 'Statistical Analysis with R'
            ]; break;
        case 'Marketing': 
            mockTitles = [
                'SEO Strategy 2026', 'Social Media Analytics', 'Email Marketing Mastery', 
                'Growth Hacking Techniques', 'Content Marketing Fundamentals', 'Google Ads Expert',
                'Digital PR and Branding', 'Influencer Marketing', 'E-commerce Marketing'
            ]; break;
        case 'Security': 
            mockTitles = [
                'Ethical Hacking Intro', 'Network Penetration Testing', 'Cryptography Fundamentals', 
                'Zero Trust Architecture', 'Incident Response Planning', 'Cloud Security Essentials',
                'Malware Analysis Basics', 'Web Application Security', 'Identity Access Management'
            ]; break;
        case 'Databases': 
            mockTitles = [
                'Advanced SQL Queries', 'NoSQL with MongoDB', 'PostgreSQL Administration', 
                'Database Design Patterns', 'Redis for Caching', 'Cassandra for Scale',
                'SQL Server optimization', 'Graph Databases with Neo4j', 'Database Migration Strategies'
            ]; break;
        case 'Mobile Apps': 
            mockTitles = [
                'React Native Apps', 'SwiftUI for iOS', 'Flutter Cross-platform Dev', 
                'Mobile UI Animation', 'Android Development with Kotlin', 'Mobile App Performance',
                'App Store Optimization', 'Firebase for Mobile', 'Progressive Web Apps'
            ]; break;
        case 'DevOps': 
            mockTitles = [
                'Docker & Kubernetes', 'CI/CD Pipelines with Actions', 'AWS Solutions Architect', 
                'Terraform Infrastructure', 'Monitoring with Prometheus', 'Log Management with ELK',
                'Azure DevOps Platform', 'Serverless Architecture', 'Site Reliability Engineering'
            ]; break;
        case 'IT & Hardware': 
            mockTitles = [
                'Network Troubleshooting', 'Linux Administration', 'Hardware Basics', 
                'Cloud Network Security', 'Virtualization with VMware', 'IT Support Fundamentals',
                'Computer Architecture', 'Operating Systems Intro', 'Office 365 Administration'
            ]; break;
        default: 
            mockTitles = [
                `Introduction to ${category.title}`, `Advanced ${category.title}`, `${category.title} Masterclass`, 
                `${category.title} Best Practices`, `Expert ${category.title}`, `${category.title} for Professionals`,
                `Future of ${category.title}`, `${category.title} Case Studies`, `${category.title} 101`
            ];
    }
    
    return mockTitles.map((title, index) => ({
      id: `mock-${category.title}-${index}`,
      title: title,
      duration: `${Math.floor(Math.random() * 8) + 2}h ${Math.floor(Math.random() * 4) * 15}m`,
      level: index % 2 === 0 ? 'Beginner' : 'Advanced'
    }));
};
