export const profile = {
  name: 'Beebek Limbu',
  initials: 'BL',
  role: 'Software Engineer',
  portrait: '/profilepic.jpg',
  portraitAlt: 'Beebek Limbu, the person in the middle, pictured with two friends outside a venue.',
  intro: 'Interested in solving real-world problems through code.',
  about: 'A London-based software engineer and Computer Science graduate from Queen Mary University of London. Outside work, I’m usually trying a new sport (currently swimming) or searching for the best food spots.',
  skills: ['Python', 'Java', 'SQL', 'JavaScript', 'Spring Boot', 'React', 'Next.js', 'Git', 'Docker', 'AWS'],
  email: 'limbubeebek@gmail.com',
  github: 'https://github.com/beebek4',
  linkedin: 'https://www.linkedin.com/in/beebeklimbu',
  cv: '/Beebek-Limbu-CV.pdf',
};

export const projects = [
  {
    name: 'Q-Sine',
    category: 'Final-year project · First Class · Sep 2023 — May 2024',
    description: 'Q-Sine is a restaurant recommendation app that helps people cut through endless choices and find places suited to them. It combines Yelp data with preference and dining-history signals.',
    reasoning: 'Ratings only tell part of the story, and people’s preferences change. I used a DQN model with interaction and dining-history signals to make recommendations more tailored than a fixed ranking.',
    contribution: 'Built the end-to-end system: a Yelp data pipeline, DQN recommender, FastAPI services, and a Next.js/TypeScript frontend.',
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'PyTorch', 'FastAPI', 'Next.js', 'TypeScript', 'Supabase'],
    image: '/projects/qsine_start.png',
    imageAlt: 'Q-Sine landing page with a featured dining recommendation and restaurant suggestions.',
    images: [
      {
        src: '/projects/qsine_start.png',
        alt: 'Q-Sine landing page with a featured restaurant recommendation and suggested places to try.',
        width: 1920,
        height: 990,
      },
      {
        src: '/projects/qsine_login.png',
        alt: 'Q-Sine sign-in screen with email and password fields.',
        width: 1920,
        height: 990,
      },
      {
        src: '/projects/qsine_loggedin.png',
        alt: 'Q-Sine signed-in recommendations screen with saved restaurant options and dining history.',
        width: 1920,
        height: 990,
      },
    ],
    demo: 'https://q-sine.vercel.app/',
    source: '',
  },
  {
    name: 'RouteMapper',
    category: 'Lloyds Banking Group × ShowCode · Hackathon winner · Nov 2022',
    description: 'RouteMapper plans shared employee pickups in a company vehicle, using home addresses and working hours to calculate a short, workable route. The aim is to reduce unnecessary driving and support a lower-carbon commute.',
    reasoning: 'Instead of employees making separate journeys, the idea is to coordinate their pickups into one company-vehicle route. Grouping stops and optimizing their order around employee locations and shift times is intended to reduce total distance travelled and the associated carbon footprint.',
    contribution: 'Built the desktop app to manage employee addresses, start and end times, and pickup groups, then calculate a route using Google Maps, MySQL, and Tkinter.',
    technologies: ['Python', 'Google Maps API', 'MySQL', 'Tkinter'],
    image: '/projects/rm_start.png',
    imageAlt: 'RouteMapper start screen with a road graphic and a Create New Route button.',
    images: [
      {
        src: '/projects/rm_start.png',
        alt: 'RouteMapper start screen with a road graphic and a Create New Route button.',
        width: 852,
        height: 691,
      },
      {
        src: '/projects/rm_routing.png',
        alt: 'RouteMapper routing screen showing employees, work times, and route setup fields.',
        width: 918,
        height: 751,
      },
      {
        src: '/projects/rm_update.png',
        alt: 'RouteMapper update screen showing an employee record and update confirmation.',
        width: 855,
        height: 691,
      },
      {
        src: '/projects/rm_final.png',
        alt: 'RouteMapper final route screen with employees from a group and the calculated pickup order.',
        width: 856,
        height: 691,
      },
    ],
    demo: '/routemapper.mp4',
    demoLabel: 'Video presentation',
    source: '',
  },
];

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Hawkeye Innovations (Sony Sports)',
    dates: 'Sep 2024 — Present',
    details: [
      'Built a reusable test framework for data platforms, with a standalone Spring Boot runner so teams could validate message processing without adding Spring dependencies to their services.',
      'Worked across real-time tracking and AWS infrastructure: added a C++ reprojection-error metric, maintained Terraform-managed services, and supported cost alerts and automated deployments.',
    ],
  },
  {
    title: 'Spring Intern',
    company: 'Amazon',
    dates: 'Jun 2023',
    details: ['Developed and integrated APIs using a test-first PyTest workflow, keeping changes straightforward to verify.'],
  },
  {
    title: 'Volunteer',
    company: 'Royal British Legion',
    dates: 'Nov 2019',
    details: ['Supervised merchandise sales and moved the stall to busier areas, helping bring more visitors over during the event.'],
  },
];
