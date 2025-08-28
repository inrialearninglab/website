export default defineAppConfig({
    ui: {
        colors: {
            primary: "primary",
        },
    },
    header: {
        nav: [
            {
                label: "Actualités",
                to: "/blog",
            },
            {
                label: "Productions pédagogiques",
                children: [
                    {
                        label: "ePocs",
                        description: "Découvrez la collection ePocs Inria",
                        to: "/epocs",
                    },
                    {
                        label: "MOOCs",
                        description: "Découvrez les MOOCs produit par le Learning Lab",
                        to: "/moocs",
                    },
                    {
                        label: "Jeux sérieux",
                        description: "Découvrez les jeux sérieux de l'Inria",
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
    },
    footer: {
        copyright: "Copyright © Inria Learning Lab",
        right: [
            {
                label: "Conditions d'utilisation",
                to: "/terms",
            },
            {
                label: "Vie privée",
                to: "/privacy",
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
});
