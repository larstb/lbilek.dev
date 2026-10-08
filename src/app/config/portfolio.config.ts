import { PortfolioConfig } from './portfolio.model';

export const portfolio: PortfolioConfig = {
  name: 'Lars-Thorsten Bilek',

  animation: {
    showSplashAnimation: true,
    splashAnimationDuration: 2000,
  },

  theme: {
    showToggle: true,
  },

  sectionOrder: ['about', 'experience', 'education', 'skills', 'projects', 'contact'],

  sections: {
    about: {
      enabled: true,
      title: 'About',
      navLabel: 'About',
      greeting: "Hi, I'm",
      name: 'Lars',
      intro:
        'A passionate full-stack developer building modern web applications with Java, Spring and Angular - ' +
        'from interactive frontends and robust backend services to automated delivery with Docker, Kubernetes and DevOps.',
      avatarAlt: 'Portrait of Lars-Thorsten Bilek',
      avatar: 'images/avatar.jpg',
      actions: [{ label: 'View My Experience', url: '#experience' }],
    },

    experience: {
      enabled: true,
      title: 'Work Experience',
      navLabel: 'Experience',
      icon: 'work',
      entries: [
        {
          role: 'Full-Stack Developer',
          company: 'RISE GmbH',
          period: '04/2023 - Present',
          description:
            'Building software solutions for the eHealth sector, with a focus on modern web development and automation.',
          sections: [
            {
              title: 'Healthcare Application',
              highlights: [
                'Leading the frontend development with Angular and TypeScript',
                'Implementing backend services with Java and Spring Boot',
              ],
            },
            {
              title: 'Statistics Platform',
              highlights: [
                'Developing ETL pipelines for the platform',
                'Responsible for DevOps: CI/CD pipelines and Kubernetes deployments with Helm',
              ],
            },
          ],
          technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'Helm'],
        },
        {
          role: 'Junior Developer',
          company: 'Austrian Standards',
          period: '09/2021 - 03/2023',
          description: 'Developed a workflow-based platform that supports the standards development process.',
          highlights: [
            'Built features end to end with Java, Spring and Angular, with business processes modelled in Camunda',
            'Ensured quality with JUnit 5 and Serenity BDD tests running in Docker and Azure DevOps pipelines',
          ],
          technologies: ['Java', 'Spring', 'Angular', 'Camunda', 'JPA', 'Oracle', 'PostgreSQL'],
        },
        {
          role: 'Software Developer',
          company: 'Social Insurance',
          period: '03/2021 - 08/2021',
          description:
            'Developed Java EE and Angular applications and administered the systems supporting development.',
          highlights: [
            'Full-stack application development with Vaadin and Angular',
            'Administered and configured Microsoft Server, Nexus, Jira and other internal platforms',
          ],
          technologies: ['Java EE', 'Angular', 'Vaadin'],
        },
        {
          role: 'IT Apprentice',
          company: 'Social Insurance',
          period: '09/2017 - 02/2021',
          description:
            'Apprenticeship focused on full-stack development and internal tooling, including planning and leading training projects.',
          highlights: [
            'Supervised internal software projects for fellow apprentices',
            'Supported development with Java, JPA, Vaadin and MSSQL',
          ],
          technologies: ['Java', 'JPA', 'Vaadin', 'MSSQL'],
        },
      ],
    },

    education: {
      enabled: true,
      title: 'Education',
      navLabel: 'Education',
      icon: 'school',
      entries: [
        {
          role: 'Information Technology - Apprenticeship with Matura',
          company: 'HTL Spengergasse',
          period: '2019 - 2023',
          description:
            'Combined the apprenticeship with higher technical education and graduated with honors in the final qualification exam (Matura).',
          highlights: [
            'Led and mentored small teams in training projects',
            'Responsible for project planning and team organization',
          ],
        },
        {
          role: 'IT Technician - Software Development',
          company: 'BS Evita - Vocational School for IT',
          period: '09/2017 - 02/2021',
          description:
            'Vocational school alongside the apprenticeship, with practical training in Java, databases and web technologies.',
        },
      ],
    },

    skills: {
      enabled: true,
      title: 'What I Do',
      subtitle: 'Full-stack developer specialized in modern web technologies',
      navLabel: 'Skills',
      groups: [
        {
          name: 'Frontend',
          description: 'Building interactive user interfaces',
          skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        },
        {
          name: 'Backend',
          description: 'Developing robust services and data models',
          skills: ['Java', 'Spring Boot', 'JPA', 'Camunda', 'SQL', 'PostgreSQL'],
        },
        {
          name: 'DevOps & Tools',
          description: 'Automating builds, tests and deployments',
          skills: ['Docker', 'Kubernetes', 'Helm', 'DevOps', 'Git'],
        },
      ],
    },

    projects: {
      enabled: false,
      title: 'Featured Projects',
      navLabel: 'Projects',
      showImagePlaceholder: true,
      items: [],
    },

    contact: {
      enabled: true,
      title: 'Reach Out to Me',
      navLabel: 'Contact',
      text: 'Want to discuss a project or just say hi? My inbox is always open.',
      action: { label: 'Say Hello', url: 'mailto:lbilek.dev@gmail.com' },
    },
  },

  footer: {
    socials: [
      { label: 'GitHub', url: 'https://github.com/larstb', svgIcon: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lars-thorsten-bilek/', svgIcon: 'linkedin' },
      { label: 'Email', url: 'mailto:lbilek.dev@gmail.com', icon: 'mail' },
      { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100008249610930', svgIcon: 'facebook' },
      { label: 'Instagram', url: 'https://www.instagram.com/ltb_2001/', svgIcon: 'instagram' },
    ],
    copyright: '© {year} Lars-Thorsten Bilek. All rights reserved.',
  },
};
