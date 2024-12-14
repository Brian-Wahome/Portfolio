import {
    frontend,
    backend,
    ux,
    prototyping,
    golang,
    typescript,
    python,
    aws,
    gcp,
    c,
    nodejs,
    git,
    docker,
    postgresql,
    graphql,
    komikult,
    leaderboard,
    math,
    movie,
    nyeusi,
    ecobee,
    crisp,
} from '../assets';

export const navLinks = [{
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'experience',
        title: 'Experience'
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [{
        title: 'Frontend Developer',
        icon: frontend,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'UI/UX Design',
        icon: ux,
    },
    {
        title: 'Software Prototyping',
        icon: prototyping,
    },
];

const technologies = [{
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'graphql',
        icon: graphql,
    },
    {
        name: 'postgresql',
        icon: postgresql,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'python',
        icon: python
    },
    {
        name: 'golang',
        icon: golang
    },
    {
        name: 'c++',
        icon: c
    },
    {
        name: 'aws',
        icon: aws
    },
    {
        name: 'gcp',
        icon: gcp
    },

];

const experiences = [{
        title: 'Junior Software Support Analyst',
        company_name: 'crisp',
        icon: crisp,
        iconBg: '#333333',
        date: 'Aug 2021 - June 2023',
    },
    {
        title: 'Software Engineering Intern',
        company_name: 'ecobee',
        icon: ecobee,
        iconBg: '#333333',
        date: 'September 2023 - August 2024',
    },
    {
        title: 'Software Engineer',
        company_name: 'ecobee',
        icon: ecobee,
        iconBg: '#333333',
        date: 'October 2024 - Present',
    },
];

const projects = [{
        id: 'project-1',
        name: 'KomiKult',
        description: 'A comic characters list app that displays Marvel characters.',
        tags: [{
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: komikult,
        repo: 'https://github.com/shaqdeff/KomiKult',
        demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
        id: 'project-2',
        name: 'Leaderboard',
        description: 'A leaderboard list app that displays scores submitted by different players.',
        tags: [{
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: leaderboard,
        repo: 'https://github.com/shaqdeff/Leaderboard',
        demo: 'https://shaqdeff.github.io/Leaderboard/',
    },
    {
        id: 'project-3',
        name: 'Math Magicians',
        description: 'This is a single-page calculator app built with React',
        tags: [{
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: math,
        repo: 'https://github.com/shaqdeff/Math-Magicians',
        demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    },
    {
        id: 'project-4',
        name: 'Movie Metro',
        description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
        tags: [{
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: movie,
        repo: 'https://github.com/shaqdeff/Movie-Metro',
        demo: 'https://movie-metro.netlify.app/',
    },
    {
        id: 'project-5',
        name: 'Nyeusi Fest Site',
        description: 'This is a demo concert website for a music festival called Nyeusi.',
        tags: [{
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: nyeusi,
        repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
        demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
];

export { services, technologies, experiences, projects };