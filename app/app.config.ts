export default defineAppConfig({
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
                            description: "Découvrez notre collection d'ePocs",
                            to: "/epocs",
                        },
                        {
                            label: "MOOCs",
                            description: "Découvrez nos MOOCs",
                            to: "/moocs",
                        },
                        {
                            label: "Jeux sérieux",
                            description: "Découvrez nos jeux sérieux",
                            to: "/serious-games",
                        },
                    ],
                },
                {
                    label: "Education scientifique",
                    to: "/scientific-education",
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
                            description: "Discover our ePocs collection",
                            to: "/en/epocs",
                        },
                        {
                            label: "MOOCs",
                            description: "Discover our MOOCs",
                            to: "/en/moocs",
                        },
                        {
                            label: "Serious Games",
                            description: "Discover our serious games",
                            to: "/en/serious-games",
                        },
                    ],
                },
                {
                    label: "Scientific Education",
                    to: "/en/scientific-education",
                },
            ],
        },
    },
    footer: {
        copyright: "Copyright © Inria Learning Lab",
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
                icon: "simple-icons:twitter",
                to: "https://twitter.com/InriaLearnLab",
            },
            {
                icon: "simple-icons:linkedin",
                to: "https://www.linkedin.com/in/inrialearninglab/",
            },
            {
                icon: "simple-icons:facebook",
                to: "https://www.facebook.com/Inria-Learning-Lab-269656773437569/",
            },
        ],
    },
    team: [
        {
            name: "Elise Taillant",
            avatar: "/images/team/elise.jpg",
            title: "Responsable Inria Learning Lab",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/elisetaillant/",
                },
            ],
        },
        {
            name: "Marie Colin",
            avatar: "/images/team/marie.jpg",
            title: "Ingénieure Pédagogique / Product Owner",
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
            title: "Ingénieure Pédagogique",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/sherazade-djeballah-6a8759233/",
                },
            ],
        },
        {
            name: "Sabah Khalfa",
            avatar: "/images/team/sabah.jpg",
            title: "Ingénieure Pédagogique",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/sabah-khalfa-ab24749/",
                },
            ],
        },
        {
            name: "Madeline Montigny",
            avatar: "/images/team/madeline.jpg",
            title: "Ingénieure Pédagogique",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/madelinemontigny/",
                },
            ],
        },
        {
            name: "Aurélie Lagarrigue",
            avatar: "/images/team/aurelie.jpg",
            title: "Ingénieure Pédagogique",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/aur%C3%A9lie-lagarrigue-631b5112a/",
                },
            ],
        },
        {
            name: "Laurence Farhi",
            avatar: "/images/team/laurence.jpg",
            title: "Ingénieure Pédagogique",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/laurence-farhi-760981ba/",
                },
            ],
        },
        {
            name: "Christelle Mariais",
            avatar: "/images/team/christelle.jpg",
            title: "Ingénieure Pédagogique",
            links: [
                {
                    icon: "simple-icons:linkedin",
                    to: "https://www.linkedin.com/in/cmariais/",
                },
            ],
        },
        {
            name: "Nathan Viaud",
            avatar: "https://avatars.githubusercontent.com/u/79544144?v=4&size=64",
            title: "Ingénieur informatique",
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
            name: "Benoit Rospars",
            avatar: "/images/team/benoit.jpg",
            title: "Ingénieur informatique",
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
    ],
    ui: {
        colors: {
            primary: "primary",
        },
        pageSection: {
            slots: {
                container: "py-8!",
            },
        },
        pageHero: {
            slots: {
                container: "py-16!",
            },
        },
    },
});
