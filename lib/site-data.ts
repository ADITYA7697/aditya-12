/**
 * Central place for all editable portfolio content.
 * Update the values here to change what appears across the site —
 * you shouldn't need to touch the component files for content edits.
 */

export const profile = {
  name: 'Aditya Dube',
  role: 'Aspiring Full Stack Developer',
  subtitle: 'BCA Student | Full Stack Developer',
  intro:
    'I build modern, responsive web applications and turn ideas into real-world solutions. Currently seeking internship opportunities to grow my skills, gain hands-on experience, and contribute to meaningful projects.',
  about:
    'I am Aditya Dube, a BCA student at the University of Allahabad with a strong interest in web development. I enjoy creating clean, user-friendly websites and exploring new technologies. I have worked on projects like VASTRA, an E-commerce Shopping Website, and a few other web development projects that have helped me improve my skills. I am currently looking for an internship where I can gain real-world experience, learn from professionals, and grow as a web developer.',
  email: 'adityadubey41888@gmail.com',
  phone: '7007437443',
  github: 'https://github.com/ADITYA7697',
  linkedin: 'https://www.linkedin.com/in/aditya-dube-b50380342',
  // Place your profile photo at public/images/profile.jpg (or update this path).
  photo: '/images/profile-aditya.png',
  // Place your resume at public/resume.pdf to enable the download button.
  resume: '/resume.pdf',
}

export const aboutCards = [
  {
    title: 'BCA Final Year',
    description: 'Building a strong foundation in computer applications.',
  },
  {
    title: 'Aspiring Full Stack Developer',
    description: 'Learning to build complete web experiences end to end.',
  },
  {
    title: 'Open to Internship',
    description: 'Ready to contribute, learn, and grow with a great team.',
  },
]

export type Skill = {
  name: string
  description: string
  learning?: boolean
}

export const skills: Skill[] = [
  { name: 'HTML', description: 'Semantic, accessible markup for modern web pages.' },
  { name: 'CSS', description: 'Styling, layouts, and responsive design.' },
  { name: 'JavaScript', description: 'Interactive, dynamic front-end behavior.' },
  { name: 'React', description: 'Component-based UI library.' },
  { name: 'Node.js', description: 'JavaScript runtime for building server-side applications.' },
  { name: 'MongoDB', description: 'Document database for flexible, scalable applications.' },
]

export type Project = {
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  // Live demo links are placeholders until real URLs are provided.
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'VASTRA-Ecommerce Website',
    description:
      'A modern shopping website project with a responsive interface and shopping-related functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project-eazymart.png',
    github: 'https://github.com/ADITYA7697/EAZYMART-Modern-Shopping',
    demo: undefined,
  },
  {
    title: 'Calculator',
    description:
      'A simple and responsive calculator project built using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project-calculator.png',
    github: undefined,
    demo: undefined,
  },
  {
    title: 'Personal Portfolio',
    description:
      'A responsive personal portfolio website created to showcase my skills, projects, and contact information.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project-portfolio.png',
    github: undefined,
    demo: undefined,
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
