import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-1.png',
    title: 'Next-Quiz-App',
    description:
      'A knowledge base quiz App for Next.js developers, packed with features like TypeScript, Tailwind CSS, Eslint, testing tools and more.',
    technologies: [
      'Next.js',
      'TailwindCSS',
      'Shadcn/ui',
      'Framer-Motion',
      'Trivia-Api',
    ],
    links: {
      preview: 'https://next-quiz-master.netlify.app/',
      github: 'https://github.com/Majid-Hassan/Quiz-Master',
    },
  },
  {
    image: '/images/project-2.png',
    title: 'Next-Clerk-Quick-Cart',
    description:
      'Next Clerk Quick Cart is a Shopping Cart Mangement app developed using Next.js and below technologies.',
    technologies: [
      'Next.js',
      'MongoDB',
      'Mongoose',
      'TailwindCSS',
      'Inngest',
      'Clerk-Auth',
    ],
    links: {
      preview: 'https://next-clerk-quick-cart.vercel.app/',
      github: 'https://github.com/Majid-Hassan/next-clerk-cart',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web development intern',
    company: '360 - Software House, Bahawalpur',
    description:
      'During this internship, I focused on Frontend development using HTM and CSS. Also design with Bootstrap.',
    period: '2018',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Full Stack intern',
    company: 'NCBA University, Bahawalpur',
    description:
      'During my internship at NCBA University, I collaborated frontend development with HTML, CSS and design with Bootstrap. I also worked on backend using PHP and MySQL.',
    period: '2019',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
  },
  {
    title: 'Self Development',
    company: 'Self',
    description:
      'As a developer, I specialized in Next.js, MongoDB, PostgreSQL, Prisma, TypeScript, Tailwind and different designing tools like Material/ui, Shadcn/ui and Framer-Motion etc.',
    period: '2019 - present',
    technologies: [
      'React.js',
      'Redux',
      'Next.js',
      'MongoDB',
      'Mongoose',
      'PostgreSQL',
      'TypeScript',
      'Clerk-Auth',
      'Prisma',
      'Inngest',
      'TailwindCSS',
      'Material/ui',
      'Shadcn/ui',
      'Framer-Motion',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  { icon: <Icons.mongodb className="size-24" /> },
] as const;
