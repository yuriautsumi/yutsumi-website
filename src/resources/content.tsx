import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yuria",
  lastName: "Utsumi",
  name: `Yuria Utsumi`,
  role: "Machine Learning Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Japanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yuriautsumi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yuria-u-977101335/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  //   essential: true,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Technical problem solving from first principles</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        {/* <strong className="ml-4">Once UI</strong>{" "} */}
        {/* <Line background="brand-alpha-strong" vert height="20" /> */}
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Yuria, a machine learning engineer who works on AI and Machine Learning Infrastructure. After hours, I like to read and work on technical problem solving.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yuria is a United States-based machine learning engineer with a passion for problem solving complex challenges
        into solutions. Her work spans from AI and machine learning to infrastructure solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Allianz Life Insurance Company of North America",
        timeframe: "2024 - 2025",
        role: "Data Scientist Intern, Data Scientist, Machine Learning Engineer",
        achievements: [
          <>
            Automate AI and machine learning model and infrastructure CI/CD in Azure via GitHub Actions, in DEV, QA, & PROD environment.
          </>,
          <>
            Research covariate shift, insurance product feature, and bias mitigation through statistical and machine learning simulation and application.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Sociotechnical Systems Research Center",
        timeframe: "2023 - 2023",
        role: "Research Assistant",
        achievements: [
          <>
            Assisted on a project on the digital preservation of heritage, as an alternative to traditional preservation methods like museum, documentary, and catalogues. 
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
      {
        company: "Institute for Medical Engineering & Science",
        timeframe: "2020 - 2022",
        role: "Research Assistant",
        achievements: [
          <>
            Developed tool to surface members for high-risk pregnancy care management, using insurance claims data.
          </>,
          <>
            Models to estimate counterfactual outcomes under treatment, to supplement pending RCT.
          </>,
          <>
            Research distilling neural network activation feature to infer interpretable clinical phenotypes via Hidden Markov model on a sepsis cohort from MIMIC-III.
          </>,
        ],
        images: [],
      },
      {
        company: "Apple",
        timeframe: "2019 - 2019",
        role: "Machine Learning Engineer Intern",
        achievements: [
          <>
            Image processing algorithm, computer vision on video, sensor data for motion detection.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
      {
        company: "MIT CSAIL",
        timeframe: "2019 - 2019",
        role: "Research Assistant",
        achievements: [
          <>
            Implement feature to customize model for deep learning web application written in Tensorflow JS.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
      {
        company: "MIT Media Lab",
        timeframe: "2018 - 2018",
        role: "Research Assistant",
        achievements: [
          <>
            Implementation of domain adaptation algorithm for forecasting & deep learning model.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Massachusetts Institute of Technology",
        description: <>M.Eng. Computer Science & Engineering (Artificial Intelligence)</>,
      },
      {
        name: "Massachusetts Institute of Technology",
        description: <>B.Sc. Computer Science & Engineering (Minor in Mathematics)</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and problem solving...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    // {
    //   src: "/images/gallery/vertical-3.JPEG",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-7.JPEG",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    {
      src: "/images/gallery/vertical-8.JPEG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-5.JPEG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-9.JPEG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
