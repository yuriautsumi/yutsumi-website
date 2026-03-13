type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  // {
  //   name: 'Motion Primitives Pro',
  //   description:
  //     'Advanced components and templates to craft beautiful websites.',
  //   link: 'https://pro.motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
  //   id: 'project1',
  // },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Allianz Life',
    title: 'Machine Learning Engineer',
    start: '2024',
    end: '2025',
    link: 'https://www.allianzlife.com/',
    id: 'work1',
  },
  // {
  //   company: 'Sociotechnical Systems Research Center',
  //   title: 'Research Assistant',
  //   start: '2023',
  //   end: '2023',
  //   link: 'https://ibelick.com',
  //   id: 'work2',
  // },
  {
    company: 'MIT Institute for Medical Engineering & Science',
    title: 'Graduate Research Assistant',
    start: '2020',
    end: '2022',
    link: 'http://clinicalml.org/',
    id: 'work2',
  },
  {
    company: 'MIT EECS Department',
    title: 'Graduate Teaching Assistant',
    start: '2021',
    end: '2021',
    link: 'https://www.eecs.mit.edu/',
    id: 'work3',
  },
  {
    company: 'Apple',
    title: 'Machine Learning Engineer Intern',
    start: '2019',
    end: '2019',
    link: 'https://apple.com',
    id: 'work5',
  },
  {
    company: 'MIT CSAIL',
    title: 'Research Assistant',
    start: '2019',
    end: '2019',
    link: 'https://appinventor.mit.edu/',
    id: 'work6',
  },
  {
    company: 'MIT Media Lab',
    title: 'Research Assistant',
    start: '2018',
    end: '2018',
    link: 'https://www.media.mit.edu/groups/affective-computing/overview/',
    id: 'work7',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/yuriautsumi',
  },
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=2NMQwyEAAAAJ&hl=en',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yuria-u-977101335',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/ibelick',
  // },
]

export const EMAIL = 'yuria.utsumi@gmail.com'
