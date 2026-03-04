export default defineAppConfig({
    tags: {
        milestone: {
            fr: "Chiffre clé",
            en: "Milestone",
        },
    },
    header: {
        nav: {
            fr: [
                {
                    label: "Actualités",
                    to: "/blog",
                },
                {
                    label: "Productions pédagogiques",
                    children: [
                        {
                            label: "ePocs",
                            description: "Explorez le numérique sur mobile",
                            to: "/epocs",
                        },
                        {
                            label: "MOOCs",
                            description: "Développez vos compétences autour du numérique",
                            to: "/moocs",
                        },
                        {
                            label: "Jeux sérieux",
                            description: "Apprenez en jouant",
                            to: "/serious-games",
                        },
                    ],
                },
                {
                    label: "Équipe",
                    to: "/team",
                },
                {
                    label: "Publications",
                    to: "/publications",
                },
            ],
            en: [
                {
                    label: "News",
                    to: "/en/blog",
                },
                {
                    label: "Pedagogical Resources",
                    children: [
                        {
                            label: "ePocs",
                            description: "Explore the digital world on mobile",
                            to: "/en/epocs",
                        },
                        {
                            label: "MOOCs",
                            description: "Develop your skills in the digital field",
                            to: "/en/moocs",
                        },
                        {
                            label: "Serious Games",
                            description: "Learn while you play",
                            to: "/en/serious-games",
                        },
                    ],
                },
                {
                    label: "Team",
                    to: "/en/team",
                },
            ],
        },
    },
    footer: {
        copyright: "Copyright © Inria",
        links: {
            fr: [
                {
                    label: "Conditions d'utilisation",
                    to: "/terms",
                },
                {
                    label: "Vie privée",
                    to: "/privacy",
                },
            ],
            en: [
                {
                    label: "Terms of Use",
                    to: "/en/terms",
                },
                {
                    label: "Privacy Policy",
                    to: "/en/privacy",
                },
            ],
        },
        right: [
            {
                icon: "simple-icons:youtube",
                to: "https://www.youtube.com/playlist?list=PLJ1qHZpFsMsR7wceUpWOVTjJhI4gBC0wk",
            },
            {
                icon: "simple-icons:linkedin",
                to: "https://www.linkedin.com/in/inrialearninglab/",
            },
        ],
    },
    team: [
        {
            name: "Elise Taillant",
            avatar: "/images/team/elise.jpg",
            title: {
                fr: "Responsable Inria Learning Lab",
                en: "Inria Learning Lab manager",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/elisetaillant/",
                },
            ],
        },
        {
            name: "Marie Collin",
            avatar: "/images/team/marie.jpg",
            title: {
                fr: "Ingénieure pédagogique / Product owner",
                en: "Learning designer / Product owner",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/marie-collin-ba6b553b/",
                },
            ],
        },
          {
            name: "Sherazade Djeballah",
            avatar: "/images/team/sherazade.jpg",
            title: {
                fr: "Ingénieure pédagogique",
                en: "Learning designer",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/sherazade-djeballah-6a8759233/",
                },
            ],
        },
        {
            name: "Laurence Farhi",
            avatar: "/images/team/laurence.jpg",
            title: {
                fr: "Ingénieure pédagogique",
                en: "Learning designer",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/laurence-farhi-760981ba/",
                },
            ],
        },
        {
            name: "Sabah Khalfa",
            avatar: "/images/team/sabah.jpg",
            title: {
                fr: "Ingénieure pédagogique",
                en: "Learning designer",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/sabah-khalfa-ab24749/",
                },
            ],
        },
        {
            name: "Aurélie Lagarrigue",
            avatar: "/images/team/aurelie.jpg",
            title: {
                fr: "Ingénieure pédagogique",
                en: "Learning designer",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/aur%C3%A9lie-lagarrigue-631b5112a/",
                },
            ],
        },
        {
            name: "Christelle Mariais",
            avatar: "/images/team/christelle.jpg",
            title: {
                fr: "Ingénieure pédagogique",
                en: "Learning designer",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/cmariais/",
                },
            ],
        },
        {
            name: "Madeline Montigny",
            avatar: "/images/team/madeline.jpg",
            title: {
                fr: "Ingénieure pédagogique",
                en: "Learning designer",
            },
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/madelinemontigny/",
                },
            ],
        },
        {
            name: "Benoit Rospars",
            avatar: "/images/team/benoit.jpg",
            title: {
                fr: "Développeur",
                en: "Developer",
            },
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/brospars",
                },
                {
                    icon: "simple-icons:bluesky",
                    to: "https://bsky.app/profile/rospars.me",
                },
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/rosparsbenoit/",
                },
            ],
        },
        {
            name: "Nathan Viaud",
            avatar: "/images/team/nathan.jpg",
            gold: true,
            title: {
                fr: "Développeur",
                en: "Developer",
            },
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/NathanViaud",
                },
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/nathan-viaud-109b09205",
                },
            ],
        },
        {
            name: "Tristan Rollet",
            avatar: "https://avatars.githubusercontent.com/u/93080156?v=4",
            title: {
                fr: "Alternant développeur",
                en: "Apprentice developer",
            },
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/TrRollet",
                },
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/tristanrollet/?originalSubdomain=fr",
                },
            ],
        },
    ],
    ui: {
        colors: {
            primary: "primary",
        },
        button: {
            compoundVariants: [
                {
                    variant: "solid",
                    color: "primary",
                    class: "text-white",
                },
            ],
        },
    },
});
