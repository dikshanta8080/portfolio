import type {
  ExperienceItem,
  NavLink,
  PersonalInfo,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Dikshanta Acharya',
  role: 'Java Spring Boot Backend Developer',
  tagline:
    'Building scalable backends with Java, Spring Boot & Event-Driven Architecture',
  bio: 'Passionate Java backend developer specializing in REST APIs, Spring Security, and event-driven systems using Kafka. I build clean, secure, and production-ready backends.',
  github: 'https://github.com/dikshanta8080',
  email: 'dikshantaacharya04@gmail.com',
  linkedin: 'https://linkedin.com/in/dikshanta-acharya',
  typewriterRoles: [
    'Java Developer',
    'Spring Boot Developer',
    'Backend Developer',
    'Kafka Developer',
  ],
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'APIs Designed' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: 'SiJava', brandColor: '#007396' },
      { name: 'Spring Boot', icon: 'SiSpringboot', brandColor: '#6DB33F' },
      { name: 'Spring Security', icon: 'SiSpringsecurity', brandColor: '#6DB33F' },
      { name: 'Hibernate', icon: 'SiHibernate', brandColor: '#59666C' },
      { name: 'Kafka', icon: 'SiApachekafka', brandColor: '#231F20' },
      { name: 'Gradle', icon: 'SiGradle', brandColor: '#02303A' },
      { name: 'Maven', icon: 'SiApachemaven', brandColor: '#C71A36' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', brandColor: '#4169E1' },
      { name: 'MySQL', icon: 'SiMysql', brandColor: '#4479A1' },
      { name: 'MongoDB', icon: 'SiMongodb', brandColor: '#47A248' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Docker', icon: 'SiDocker', brandColor: '#2496ED' },
      { name: 'Git', icon: 'SiGit', brandColor: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', brandColor: '#ffffff' },
      { name: 'Postman', icon: 'SiPostman', brandColor: '#FF6C37' },
      { name: 'Swagger', icon: 'SiSwagger', brandColor: '#85EA2D' },
      { name: 'IntelliJ', icon: 'SiIntellijidea', brandColor: '#FE315D' },
      { name: 'TypeScript', icon: 'SiTypescript', brandColor: '#3178C6' },
      { name: 'Linux', icon: 'SiLinux', brandColor: '#FCC624' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'ecommed',
    title: 'EcomMed',
    description:
      'Spring Boot REST API for a medical e-commerce platform with JWT auth, shopping cart, orders, inventory management, and Kafka-driven async processing (inventory deduction, invoice generation, email notifications).',
    tech: [
      'Java 21',
      'Spring Boot 3.3.5',
      'PostgreSQL',
      'Apache Kafka',
      'Flyway',
      'Gradle',
      'Docker',
    ],
    category: 'E-commerce',
    github: 'https://github.com/dikshanta8080/EcomMed',
    highlights: [
      'Kafka topics (user-registered, product-added, order-placed)',
      'OpenAPI/Swagger',
      'JWT + BCrypt',
      'Layered monolith architecture',
    ],
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description:
      'Backend for a hospital management system built with Spring Boot, Spring Data JPA, and Spring Security.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'MySQL'],
    category: 'Healthcare',
    github: 'https://github.com/dikshanta8080/Hospital-Management-System',
  },
  {
    id: 'springboot-security',
    title: 'Spring Boot Security App',
    description:
      'Authentication system with JWT, refresh tokens, fine-grained roles & permissions, input validations, and unit tests with Mockito.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MapStruct', 'Mockito'],
    category: 'Security',
    github: 'https://github.com/dikshanta8080/springboot-security-app',
    stars: 2,
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    description: 'Full-stack restaurant management system (second-year project).',
    tech: ['TypeScript', 'React', 'Spring Boot'],
    category: 'Full-Stack',
    github: 'https://github.com/dikshanta8080/Restaurant_Management_System',
  },
  {
    id: 'atomicbank',
    title: 'AtomicBank - Secure Transaction Banking System',
    description:
      'Java banking application using JSP, Servlets, and MVC architecture. Supports account management, deposits, withdrawals, and secure fund transfers.',
    tech: ['Java', 'JSP', 'Servlets', 'MVC', 'MySQL'],
    category: 'Banking',
    github:
      'https://github.com/dikshanta8080/AtomicBank-Secure-Transaction-Banking-System',
  },
];

export const projectFilters = [
  'All',
  'E-commerce',
  'Security',
  'Healthcare',
  'Banking',
  'Full-Stack',
] as const;

export const experienceItems: ExperienceItem[] = [
  {
    id: 'self-taught-overall',
    period: 'Jan 2024 – Present',
    duration: '1.5 years',
    title: 'Self-Taught Java Backend Developer',
    type: 'Learning & Building',
    description:
      'Started learning Java and Spring Boot from scratch, progressing from Core Java fundamentals to building REST APIs with Spring Boot, Spring Security, and JPA while continuing to learn Kafka and event-driven systems.',
    highlights: [
      'Mastered Core Java, OOP, Collections, and Exception Handling',
      'Built REST APIs with Spring Boot and layered architecture',
      'Implemented JWT authentication with refresh tokens and role-based access',
      'Currently learning Kafka and event-driven backend patterns',
      'Used PostgreSQL + Flyway for schema-managed database migrations',
      'Containerized services using Docker',
    ],
  },
  {
    id: 'phase-1',
    period: 'Jan 2024 – Mar 2024',
    title: 'Core Java & OOP Foundations',
    type: 'Phase 1',
    description:
      'Built strong fundamentals in Core Java — OOP principles, Collections, Generics, Exception Handling, and basic file I/O.',
    highlights: [
      'Java OOP: Inheritance, Polymorphism, Encapsulation, Abstraction',
      'Collections Framework: List, Map, Set, Queue',
      'Exception handling and custom exceptions',
      'Basic data structures and algorithms in Java',
    ],
  },
  {
    id: 'phase-2',
    period: 'Mar 2024 – Jun 2024',
    title: 'Spring Boot & REST API Development',
    type: 'Phase 2',
    description:
      'Learned Spring framework ecosystem — Spring Core, Spring Boot, Spring MVC, and built first real REST APIs with proper layered architecture.',
    highlights: [
      'Spring Core: IoC, DI, Bean lifecycle',
      'Built REST APIs with Spring Boot + Spring MVC',
      'Spring Data JPA + Hibernate for ORM',
      'Deployed first Hospital Management System backend',
    ],
  },
  {
    id: 'phase-3',
    period: 'Jun 2024 – Sep 2024',
    title: 'Spring Security & Authentication',
    type: 'Phase 3',
    description:
      'Deep dive into securing Spring Boot applications. Built a full authentication system with JWT, refresh tokens, and fine-grained role/permission-based access control.',
    highlights: [
      'JWT authentication with access + refresh token flow',
      'BCrypt password encoding and stateless sessions',
      'Fine-grained roles & permissions with @PreAuthorize',
      'Unit testing with Mockito and JUnit 5',
      'MapStruct for clean DTO mapping',
    ],
  },
  {
    id: 'phase-4',
    period: 'Jan 2025 – Present',
    title: 'Kafka & Event-Driven Systems',
    type: 'Phase 4',
    description:
      'Currently learning Apache Kafka and event-driven backend design while exploring how async workflows can be applied in projects like EcomMed.',
    highlights: [
      'Learning Kafka producers, consumers, topics, and partitions',
      'Exploring event-driven async processing patterns',
      'Practicing Kafka setup with Docker Compose',
      'Applying these concepts gradually in personal backend projects',
      'Continuing to improve system design and backend architecture skills',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/dikshanta8080', icon: 'FaGithub' },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dikshanta-acharya',
    icon: 'FaLinkedin',
  },
];
